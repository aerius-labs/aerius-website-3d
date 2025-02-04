import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useMemo, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Color, DoubleSide } from 'three';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

useGLTF.preload('/models/logoBreak.glb');

export default function AeriusLogoModel() {
  const group = useRef<any>();
  const model = useGLTF('/models/logoBreak.glb');
  const { animations, nodes, materials } = model;
  const { mixer } = useAnimations(animations, group);
  const [load, setLoad] = useState(false);

  const createBaseMaterial = () => {
    const material: any = materials['Material'].clone();
    material.metalness = 0.9;
    material.roughness = 0.2;
    material.opacity = 0;
    material.transparent = true;
    material.depthWrite = false;
    material.side = DoubleSide;
    material.alphaTest = 0.01;
    material.color = new Color(0.6, 0.06, 1);
    material.emissiveIntensity = 1.2;
    material.envMapIntensity = 1.5;
    return material;
  };

  const meshMaterials = useMemo(() => {
    return Object.keys(nodes).map(() => createBaseMaterial());
  }, [nodes]);

  useGSAP(() => {
    const layerOneAnimation: any = animations.find(
      (clip) => clip.name === 'Layer_001Action.001'
    );
    const layerOneAction: any = mixer.clipAction(layerOneAnimation);
    layerOneAction.clampWhenFinished = true;
    layerOneAction.loop = false;
    layerOneAction.play();

    const explosionAnimations = animations.filter(
      (clip) => !clip.name.includes('Layer_001')
    );

    const explosionActions = explosionAnimations.map((clip) => {
      const action: any = mixer.clipAction(clip);
      action.clampWhenFinished = true;
      action.loop = false;
      action.paused = true;
      return action;
    });

    ScrollTrigger.create({
      trigger: '#logoContainer',
      start: 'top center',
      end: '+=150%',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress <= 0.5) {
          const layerOneProgress = progress * 2;
          Object.keys(nodes).forEach((nodeName, index) => {
            if (nodeName === 'Logo_Main') {
              meshMaterials[index].opacity = Math.min(layerOneProgress * 2, 1);
              meshMaterials[index].depthWrite =
                meshMaterials[index].opacity === 1;
            } else if (nodeName.includes('Logo_Main001_cell')) {
              meshMaterials[index].opacity = 0;
              meshMaterials[index].depthWrite = false;
            }
          });
          layerOneAction.paused = true;
          layerOneAction.time =
            layerOneAction.getClip().duration * layerOneProgress;

          explosionActions.forEach((action) => {
            action.time = 0;
            action.paused = true;
          });
        } else if (progress <= 0.75) {
          const explosionProgress = (progress - 0.5) * 4;

          Object.keys(nodes).forEach((nodeName, index) => {
            if (nodeName === 'Logo_Main') {
              meshMaterials[index].opacity = Math.max(
                0,
                1 - explosionProgress * 2
              );
              meshMaterials[index].depthWrite =
                meshMaterials[index].opacity === 1;
            } else if (nodeName.includes('Logo_Main001_cell')) {
              meshMaterials[index].opacity = Math.min(explosionProgress * 2, 1);
              meshMaterials[index].depthWrite =
                meshMaterials[index].opacity === 1;
            }
          });

          layerOneAction.time = layerOneAction.getClip().duration;
          layerOneAction.paused = true;

          explosionActions.forEach((action) => {
            action.time = action.getClip().duration * explosionProgress;
            action.play();
            action.paused = true;
          });
        } else {
          const fadeOutProgress = (progress - 0.75) * 4;

          Object.keys(nodes).forEach((nodeName, index) => {
            if (nodeName.includes('Logo_Main001_cell')) {
              meshMaterials[index].opacity = Math.max(0, 1 - fadeOutProgress);
              meshMaterials[index].depthWrite =
                meshMaterials[index].opacity === 1;
            } else {
              meshMaterials[index].opacity = 0;
              meshMaterials[index].depthWrite = false;
            }
          });

          explosionActions.forEach((action) => {
            action.time = action.getClip().duration;
            action.paused = true;
          });
        }
      },
    });
  }, [mixer, meshMaterials, animations, nodes]);

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  return (
    <group ref={group} dispose={null}>
      <group name='Scene'>
        {Object.keys(nodes).map((nodeName, index) => {
          if (
            nodeName === 'Logo_Main' ||
            nodeName.includes('Logo_Main001_cell')
          ) {
            return (
              <mesh
                key={nodeName}
                name={nodeName}
                castShadow
                receiveShadow
                geometry={(nodes[nodeName] as any).geometry}
                material={meshMaterials[index]}
                position={nodes[nodeName].position}
                scale={nodes[nodeName].scale}
                renderOrder={nodeName === 'Logo_Main' ? 0 : 1} // Ensure proper rendering order
              />
            );
          }
          return null;
        })}
      </group>
    </group>
  );
}
