import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Color, Euler, Vector2 } from 'three';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

useGLTF.preload('/models/logoBreak.glb');

export default function AeriusLogoModel() {
  const group = useRef<any>();
  const model: any = useGLTF('/models/logoBreak.glb');
  const { animations, nodes, materials } = model;
  const { mixer } = useAnimations(animations, group);

  // Create base material settings
  const createBaseMaterial = () => {
    const material = materials['Frosted Glass 01'].clone();
    material.aoMapIntensity = 1;
    material.blendAlpha = 0;
    material.blendColor = new Color(0, 0, 0);
    material.blendDst = 205;
    material.blendEquation = 100;
    material.blendSrc = 204;
    material.blending = 1;
    material.bumpScale = 1;
    material.color = new Color(0.5972017883558645, 0.06301001764564068, 1);
    material.colorWrite = true;
    material.depthFunc = 3;
    material.depthTest = true;
    material.depthWrite = true;
    material.displacementScale = 1;
    material.dust = 1;
    material.emissive = new Color(0, 0, 0);
    material.emissiveIntensity = 1;
    material.envMapIntensity = 1;
    material.envMapRotation = new Euler(0, 0, 0, 'XYZ');
    material.fog = true;
    material.ior = 1.85;
    material.isMaterial = true;
    material.isMeshStandardMaterial = true;
    material.lightMapIntensity = 1;
    material.metalness = 0.9;
    material.name = 'Frosted Glass 01';
    material.normalScale = new Vector2(1, -1);
    material.opacity = 0.9;
    material.reflection = new Color(1, 0.17144110072255403, 0.9301108583738498);
    material.refractionFactor = 0.9;
    material.roughness = 0.2;
    material.shininess = 0.5;
    material.side = 2;
    material.stencilFail = 7680;
    material.stencilFunc = 519;
    material.stencilFuncMask = 255;
    material.stencilWriteMask = 255;
    material.stencilZFail = 7680;
    material.stencilZPass = 7680;
    material.toneMapped = true;
    material.transparent = true;
    return material;
  };

  // Create materials for each mesh
  const meshMaterials = useMemo(() => {
    return Object.keys(nodes).map(() => createBaseMaterial());
  }, [nodes]);

  useGSAP(() => {
    // Animation setup
    animations.forEach((clip: any) => {
      const action = mixer.clipAction(clip);
      action.paused = true;
    });

    // Main scroll trigger for animation
    ScrollTrigger.create({
      trigger: '#logoContainer',
      start: 'top 40%',
      end: '+=150%',
      scrub: 2,
      onEnter: () => {
        animations.forEach((clip: any) => {
          const action = mixer.clipAction(clip);
          action.play();
        });
      },
      onLeave: () => {
        animations.forEach((clip: any) => {
          const action = mixer.clipAction(clip);
          action.paused = true;
        });
      },
      onEnterBack: () => {
        animations.forEach((clip: any) => {
          const action = mixer.clipAction(clip);
          action.play();
        });
      },
      onLeaveBack: () => {
        animations.forEach((clip: any) => {
          const action = mixer.clipAction(clip);
          action.paused = true;
        });
      },
      onUpdate: (self) => {
        const progress = self.progress;
        animations.forEach((clip: any) => {
          const action = mixer.clipAction(clip);
          action.paused = true;
          action.time = clip.duration * progress;
        });
      },
    });

    // Fade out scroll trigger
    ScrollTrigger.create({
      trigger: '#logoContainer',
      start: 'top 5%', // Start fading when logo is 20% from top
      end: 'top -120%', // Complete fade when logo is -20% from top
      scrub: 2,
      onUpdate: (self) => {
        // Calculate opacity based on scroll progress
        const opacity = Math.max(0, 0.9 * (1 - self.progress));
        meshMaterials.forEach((material) => {
          material.opacity = opacity;
        });
      },
    });

    // Pin trigger
    ScrollTrigger.create({
      trigger: '#logoContainer',
      start: 'top top',
      end: '+=50%',
      pin: true,
      scrub: 2,
      pinSpacing: false,
    });
  }, [mixer, meshMaterials]);

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  return (
    <group ref={group} dispose={null}>
      <group name='Scene'>
        {Object.keys(nodes).map((nodeName, index) => {
          if (nodeName.includes('Logo_Main001_cell')) {
            return (
              <mesh
                key={nodeName}
                name={nodeName}
                castShadow
                receiveShadow
                geometry={nodes[nodeName].geometry}
                material={meshMaterials[index]}
                position={nodes[nodeName].position}
                scale={nodes[nodeName].scale}
              />
            );
          }
          return null;
        })}
      </group>
    </group>
  );
}
