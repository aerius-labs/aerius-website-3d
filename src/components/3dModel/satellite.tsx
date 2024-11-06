import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Color, Euler, Vector2 } from 'three';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

useGLTF.preload('/models/satellite.glb');

export default function SatelliteModel() {
  const group = useRef<any>(null);
  const { nodes, materials, animations }: any = useGLTF(
    '/models/satellite.glb'
  );
  const { mixer } = useAnimations(animations, group);

  // Create cloned materials to avoid affecting other instances
  const clonedMaterials = useMemo(() => {
    return {
      'Frosted Glass 01': materials['Frosted Glass 01'].clone(),
      'tie fighter window ': materials['tie fighter window '].clone(),
      'tie fighter base': materials['tie fighter base'].clone(),
      'TIE FIGHTER WING': materials['TIE FIGHTER WING'].clone(),
    };
  }, [materials]);

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
    clonedMaterials['Frosted Glass 01'].roughness = 0.2;
    clonedMaterials['Frosted Glass 01'].transparent = true;

    // Other materials setup
    clonedMaterials['tie fighter window '].roughness = 0.3;
    clonedMaterials['tie fighter window '].metalness = 1;
    clonedMaterials['tie fighter window '].transparent = true;

    clonedMaterials['tie fighter base'].roughness = 0.2;
    clonedMaterials['tie fighter base'].transparent = true;

    clonedMaterials['TIE FIGHTER WING'].transparent = true;

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
      trigger: '#satelliteContainer',
      start: 'top 40%',
      end: '+=300%',
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
      trigger: '#satelliteContainer',
      start: 'top 20%',
      end: 'top -260%',
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
      trigger: '#satelliteContainer',
      start: 'top top',
      end: '+=280%',
      pin: true,
      scrub: 2,
      pinSpacing: false,
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
        <mesh
          name='Tie_fighter'
          castShadow
          receiveShadow
          geometry={nodes.Tie_fighter.geometry}
          material={clonedMaterials['tie fighter base']}
          position={[-4.748, -2.222, -20.396]}
          rotation={[Math.PI, -1.229, Math.PI]}
          scale={1.88}
        >
          <group
            name='Empty'
            position={[-0.998, 0.037, 0.035]}
            rotation={[-1.157, -0.847, 2.101]}
            scale={1.173}
          />
          <group
            name='Empty002'
            position={[0.044, -2.234, -0.003]}
            rotation={[0, 1.568, 0]}
            scale={0.24}
          />
          <mesh
            name='glass_'
            castShadow
            receiveShadow
            geometry={nodes.glass_.geometry}
            material={clonedMaterials['tie fighter window ']}
            position={[0.004, 0, 0]}
            rotation={[-Math.PI / 2, 0.023, -Math.PI / 2]}
            scale={1.002}
          />
          <mesh
            name='glass_frame'
            castShadow
            receiveShadow
            geometry={nodes.glass_frame.geometry}
            material={clonedMaterials['tie fighter base']}
            position={[0.004, 0, 0]}
            rotation={[-Math.PI / 2, 0.023, -Math.PI / 2]}
            scale={1.016}
          />
          <mesh
            name='Retopo_other_glass_frame003'
            castShadow
            receiveShadow
            geometry={nodes.Retopo_other_glass_frame003.geometry}
            material={clonedMaterials['tie fighter base']}
            position={[0.624, -0.014, 0]}
            rotation={[-Math.PI / 2, 0.023, -Math.PI / 2]}
            scale={0.784}
          />
          <mesh
            name='wing_outer_frame'
            castShadow
            receiveShadow
            geometry={nodes.wing_outer_frame.geometry}
            material={clonedMaterials['tie fighter base']}
            position={[0.044, -2.2, 0]}
            rotation={[Math.PI / 2, -Math.PI / 6, 0]}
            scale={4.175}
          />
          <mesh
            name='wing_panel_DO_NOT_JOIN_2'
            castShadow
            receiveShadow
            geometry={nodes.wing_panel_DO_NOT_JOIN_2.geometry}
            material={clonedMaterials['TIE FIGHTER WING']}
            position={[-0.012, -0.004, -2.295]}
            rotation={[Math.PI / 2, -Math.PI / 6, 0]}
            scale={4.189}
          />
          <mesh
            name='wing_tech_pannel'
            castShadow
            receiveShadow
            geometry={nodes.wing_tech_pannel.geometry}
            material={clonedMaterials['tie fighter base']}
            position={[-0.022, -0.013, 2.268]}
            rotation={[-1.571, -1.558, 0]}
            scale={0.24}
          />
          <mesh
            name='wingbody_joiner'
            castShadow
            receiveShadow
            geometry={nodes.wingbody_joiner.geometry}
            material={clonedMaterials['tie fighter base']}
            position={[0.044, -2.2, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[0.061, 0.119, 0.119]}
          />
        </mesh>
        <group
          name='Empty001'
          position={[0.318, 0, -11.854]}
          rotation={[0.56, -0.671, 0.954]}
          scale={26.353}
        >
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
