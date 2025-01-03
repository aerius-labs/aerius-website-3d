import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Color, MeshStandardMaterial } from 'three';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

useGLTF.preload('/models/Astronaut1.glb');

export default function AstronautModel() {
  const group = useRef<any>(null);
  const { nodes, materials, animations }: any = useGLTF(
    '/models/Astronaut1.glb'
  );
  const { mixer, actions } = useAnimations(animations, group);
  const logoMaterialsRef = useRef<MeshStandardMaterial[]>([]);

  const clonedMaterials = useMemo(() => {
    if (!materials) return null;
    return Object.entries(materials).reduce(
      (acc: any, [key, material]: any) => {
        const clonedMaterial = material.clone();
        clonedMaterial.transparent = true;
        clonedMaterial.opacity = 0;
        acc[key] = clonedMaterial;
        return acc;
      },
      {}
    );
  }, [materials]);

  useEffect(() => {
    if (!actions || !mixer) return;
    Object.values(actions).forEach((action: any) => {
      if (action) {
        action.reset();
        action.play();
        action.paused = true;
      }
    });
  }, [actions, mixer]);

  useGSAP(() => {
    if (!mixer || !actions || !clonedMaterials) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#astronautContainer',
        start: 'top 0',
        end: '+=200%',
        scrub: 1,
        markers: false,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          Object.values(actions).forEach((action: any) => {
            if (action) {
              action.time = action.getClip().duration * progress;
              mixer.update(0);
            }
          });
        },
        onLeave: () => {
          Object.values(actions).forEach((action: any) => {
            if (action) action.paused = true;
          });
        },
        onEnterBack: () => {
          Object.values(actions).forEach((action: any) => {
            if (action) action.paused = true;
          });
        },
      },
    });

    ScrollTrigger.create({
      trigger: '#astronautContainer',
      start: 'top 10%',
      end: 'top -220%',
      scrub: 2,
      onUpdate: (self) => {
        let opacity = 0;
        if (self.progress < 0.1) {
          opacity = self.progress * 10;
        } else if (self.progress >= 0.8) {
          opacity = 1 - (self.progress - 0.8) / 0.2;
        } else {
          opacity = 1;
        }
        opacity = Math.max(0, Math.min(1, opacity));
        Object.values(clonedMaterials).forEach((material: any) => {
          material.opacity = opacity;
        });
        logoMaterialsRef.current.forEach((material) => {
          if (material) {
            material.opacity = opacity * 0.7;
          }
        });
      },
    });

    return () => tl.kill();
  }, [mixer, actions, clonedMaterials]);

  useFrame((_, delta) => {
    if (mixer && (ScrollTrigger as any).isScrolling) {
      mixer.update(delta);
    }
  });

  if (!clonedMaterials || !nodes) return null;

  return (
    <group ref={group} dispose={null}>
      <group name='Scene'>
        {nodes.Armature001 && (
          <group
            name='Armature001'
            position={[-4.452, -11.697, -12.968]}
            rotation={[1.461, 0, 0]}
            scale={0.1}
            renderOrder={2}
          >
            {nodes.Ch44001 && clonedMaterials['Material'] && (
              <skinnedMesh
                name='Ch44001'
                geometry={nodes.Ch44001.geometry}
                material={clonedMaterials['Material']}
                skeleton={nodes.Ch44001.skeleton}
                castShadow
                receiveShadow
                renderOrder={2}
              />
            )}
            {nodes.Ch44002 && clonedMaterials['Glass Gradient'] && (
              <skinnedMesh
                name='Ch44002'
                geometry={nodes.Ch44002.geometry}
                material={clonedMaterials['Glass Gradient']}
                skeleton={nodes.Ch44002.skeleton}
                castShadow
                receiveShadow
                renderOrder={2}
              />
            )}
            {nodes.mixamorigHips && <primitive object={nodes.mixamorigHips} />}
          </group>
        )}
        <group name='Empty001' scale={26.353} renderOrder={1}>
          {Object.keys(nodes)
            .filter((key) => key.includes('Logo_Main001_cell'))
            .map((nodeName, index) => {
              const material = new MeshStandardMaterial({
                color: '#67009a',
                emissive: '#67009a',
                emissiveIntensity: 1.5,
                transparent: true,
                opacity: 0,
              });
              logoMaterialsRef.current[index] = material;
              return (
                <mesh
                  key={nodeName}
                  name={nodeName}
                  castShadow
                  receiveShadow
                  geometry={nodes[nodeName].geometry}
                  material={material}
                  position={nodes[nodeName].position}
                  scale={nodes[nodeName].scale}
                  renderOrder={1}
                />
              );
            })}
        </group>
      </group>
    </group>
  );
}
