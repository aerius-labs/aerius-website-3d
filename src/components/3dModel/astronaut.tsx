import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Color, Euler, Vector2 } from 'three';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

useGLTF.preload('/models/astronaut.glb');

export default function AstronautModel() {
  const group = useRef<any>(null);
  const { nodes, materials, animations }: any = useGLTF(
    '/models/astronaut.glb'
  );
  const { mixer } = useAnimations(animations, group);

  // Create cloned materials to avoid affecting other instances
  const clonedMaterials = useMemo(() => {
    return {
      'Ch44_Body.001': materials['Ch44_Body.001'].clone(),
      'Ch44_body1.001': materials['Ch44_body1.001'].clone(),
      'Glass Gradient': materials['Glass Gradient'].clone(),
      'Frosted Glass 01': materials['Frosted Glass 01'].clone(),
    };
  }, [materials]);

  // Set up initial material properties
  useEffect(() => {
    // Frosted Glass setup
    clonedMaterials['Frosted Glass 01'].aoMapIntensity = 1;
    clonedMaterials['Frosted Glass 01'].blendAlpha = 0;
    clonedMaterials['Frosted Glass 01'].blendColor = new Color(0, 0, 0);
    clonedMaterials['Frosted Glass 01'].blendDst = 205;
    clonedMaterials['Frosted Glass 01'].blendEquation = 100;
    clonedMaterials['Frosted Glass 01'].blendSrc = 204;
    clonedMaterials['Frosted Glass 01'].blending = 1;
    clonedMaterials['Frosted Glass 01'].bumpScale = 1;
    clonedMaterials['Frosted Glass 01'].color = new Color(
      0.5972017883558645,
      0.06301001764564068,
      1
    );
    clonedMaterials['Frosted Glass 01'].colorWrite = true;
    clonedMaterials['Frosted Glass 01'].depthFunc = 3;
    clonedMaterials['Frosted Glass 01'].depthTest = true;
    clonedMaterials['Frosted Glass 01'].depthWrite = true;
    clonedMaterials['Frosted Glass 01'].displacementScale = 1;
    clonedMaterials['Frosted Glass 01'].dust = 1;
    clonedMaterials['Frosted Glass 01'].emissive = new Color(0, 0, 0);
    clonedMaterials['Frosted Glass 01'].emissiveIntensity = 1;
    clonedMaterials['Frosted Glass 01'].envMapIntensity = 1;
    clonedMaterials['Frosted Glass 01'].envMapRotation = new Euler(
      0,
      0,
      0,
      'XYZ'
    );
    clonedMaterials['Frosted Glass 01'].fog = true;
    clonedMaterials['Frosted Glass 01'].ior = 1.85;
    clonedMaterials['Frosted Glass 01'].metalness = 0.9;
    clonedMaterials['Frosted Glass 01'].normalScale = new Vector2(1, -1);
    clonedMaterials['Frosted Glass 01'].opacity = 0.9;
    clonedMaterials['Frosted Glass 01'].roughness = 0.1;
    clonedMaterials['Frosted Glass 01'].transparent = true;

    // Glass Gradient setup
    clonedMaterials['Glass Gradient'].metalness = 0.7;
    clonedMaterials['Glass Gradient'].roughness = 0.2;
    clonedMaterials['Glass Gradient'].ior = 1.45;
    clonedMaterials['Glass Gradient'].transparent = true;
    clonedMaterials['Glass Gradient'].opacity = 1;

    // Make other materials transparent for fade effect
    clonedMaterials['Ch44_Body.001'].transparent = true;
    clonedMaterials['Ch44_body1.001'].transparent = true;

    // Set initial opacity for all materials
    Object.values(clonedMaterials).forEach((material) => {
      material.opacity = material.opacity || 1;
    });
  }, [clonedMaterials]);

  useGSAP(() => {
    // Animation setup
    animations.forEach((clip: any) => {
      const action = mixer.clipAction(clip);
      action.paused = true;
    });

    // Main animation trigger
    ScrollTrigger.create({
      trigger: '#astronautContainer',
      start: 'top 40%',
      end: '+=280%',
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

    // Fade effect trigger
    ScrollTrigger.create({
      trigger: '#astronautContainer',
      start: 'top 20%', // Start fading when astronaut is 20% from top
      end: 'top -250%', // Complete fade when astronaut is -20% from top
      scrub: 2,
      onUpdate: (self) => {
        // Calculate opacity based on scroll progress
        Object.values(clonedMaterials).forEach((material) => {
          const baseOpacity =
            material === clonedMaterials['Frosted Glass 01'] ? 0.9 : 1;
          material.opacity = baseOpacity * (1 - self.progress);
        });
      },
    });

    // Pin trigger
    ScrollTrigger.create({
      trigger: '#astronautContainer',
      start: 'top top',
      end: '+=180%',
      pin: true,
      scrub: 2,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [mixer, clonedMaterials]);

  useFrame((_, delta) => {
    mixer?.update(delta);
  });

  return (
    <group ref={group} dispose={null}>
      <group name='Scene'>
        <group
          name='Armature001'
          position={[-4.452, -11.697, -12.968]}
          rotation={[1.461, 0, 0]}
          scale={0.1}
        >
          <group name='Ch44001'>
            <skinnedMesh
              name='Mesh001'
              geometry={nodes.Mesh001.geometry}
              material={clonedMaterials['Ch44_Body.001']}
              skeleton={nodes.Mesh001.skeleton}
            />
            <skinnedMesh
              name='Mesh001_1'
              geometry={nodes.Mesh001_1.geometry}
              material={clonedMaterials['Ch44_body1.001']}
              skeleton={nodes.Mesh001_1.skeleton}
            />
            <skinnedMesh
              name='Mesh001_2'
              geometry={nodes.Mesh001_2.geometry}
              material={clonedMaterials['Glass Gradient']}
              skeleton={nodes.Mesh001_2.skeleton}
            />
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>
        <group name='Empty001' scale={26.353}>
          {Object.keys(nodes).map((nodeName) => {
            if (nodeName.includes('Logo_Main001_cell')) {
              return (
                <mesh
                  key={nodeName}
                  name={nodeName}
                  castShadow
                  receiveShadow
                  geometry={nodes[nodeName].geometry}
                  material={clonedMaterials['Frosted Glass 01']}
                  position={nodes[nodeName].position}
                  scale={nodes[nodeName].scale}
                />
              );
            }
            return null;
          })}
        </group>
      </group>
    </group>
  );
}
