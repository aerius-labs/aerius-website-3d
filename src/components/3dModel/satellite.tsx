import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
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

  useEffect(() => {
    materials['Frosted Glass 01'].aoMapIntensity = 1;
    materials['Frosted Glass 01'].blendAlpha = 0;
    materials['Frosted Glass 01'].blendColor = new Color(0, 0, 0);
    materials['Frosted Glass 01'].blendDst = 205;
    materials['Frosted Glass 01'].blendEquation = 100;
    materials['Frosted Glass 01'].blendSrc = 204;
    materials['Frosted Glass 01'].blending = 1;
    materials['Frosted Glass 01'].bumpScale = 1;
    materials['Frosted Glass 01'].color = new Color(
      0.5972017883558645,
      0.06301001764564068,
      1
    );
    materials['Frosted Glass 01'].colorWrite = true;
    materials['Frosted Glass 01'].depthFunc = 3;
    materials['Frosted Glass 01'].depthTest = true;
    materials['Frosted Glass 01'].depthWrite = true;
    materials['Frosted Glass 01'].displacementScale = 1;
    materials['Frosted Glass 01'].dust = 1;
    materials['Frosted Glass 01'].emissive = new Color(0, 0, 0);
    materials['Frosted Glass 01'].emissiveIntensity = 1;
    materials['Frosted Glass 01'].envMapIntensity = 1;
    materials['Frosted Glass 01'].envMapRotation = new Euler(0, 0, 0, 'XYZ');
    materials['Frosted Glass 01'].fog = true;
    materials['Frosted Glass 01'].ior = 1.85;
    materials['Frosted Glass 01'].isMaterial = true;
    materials['Frosted Glass 01'].isMeshStandardMaterial = true;
    materials['Frosted Glass 01'].lightMapIntensity = 1;
    materials['Frosted Glass 01'].metalness = 0.9;
    materials['Frosted Glass 01'].name = 'Frosted Glass 01';
    materials['Frosted Glass 01'].normalScale = new Vector2(1, -1);
    materials['Frosted Glass 01'].opacity = 0.9;
    materials['Frosted Glass 01'].reflection = new Color(
      1,
      0.17144110072255403,
      0.9301108583738498
    );
    materials['Frosted Glass 01'].refractionFactor = 0.54;
    materials['Frosted Glass 01'].roughness = 0.2;
    materials['Frosted Glass 01'].shininess = 0.5;
    materials['Frosted Glass 01'].side = 2;
    materials['Frosted Glass 01'].stencilFail = 7680;
    materials['Frosted Glass 01'].stencilFunc = 519;
    materials['Frosted Glass 01'].stencilFuncMask = 255;
    materials['Frosted Glass 01'].stencilWriteMask = 255;
    materials['Frosted Glass 01'].stencilZFail = 7680;
    materials['Frosted Glass 01'].stencilZPass = 7680;
    materials['Frosted Glass 01'].toneMapped = true;
    materials['Frosted Glass 01'].transparent = true;

    materials['tie fighter window '].roughness = 0.3;
    materials['tie fighter window '].metalness = 1;

    materials['tie fighter base'].roughness = 0.2;
  }, []);

  useGSAP(() => {
    // Play the actions once to initialize them
    animations.forEach((clip: any) => {
      const action = mixer.clipAction(clip);
      action.paused = true;
    });

    // Register ScrollTrigger
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

    ScrollTrigger.create({
      trigger: '#satelliteContainer',
      start: 'top top', // Pin when the top of the logoContainer hits the top of the viewport
      end: '+=280%', // End pinning when the bottom of the logoContainer hits the top of the viewport
      pin: true,
      scrub: 2,
      pinSpacing: false,
    });
  }, [mixer]);

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
          material={materials['tie fighter base']}
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
            material={materials['tie fighter window ']}
            position={[0.004, 0, 0]}
            rotation={[-Math.PI / 2, 0.023, -Math.PI / 2]}
            scale={1.002}
          />
          <mesh
            name='glass_frame'
            castShadow
            receiveShadow
            geometry={nodes.glass_frame.geometry}
            material={materials['tie fighter base']}
            position={[0.004, 0, 0]}
            rotation={[-Math.PI / 2, 0.023, -Math.PI / 2]}
            scale={1.016}
          />
          <mesh
            name='Retopo_other_glass_frame003'
            castShadow
            receiveShadow
            geometry={nodes.Retopo_other_glass_frame003.geometry}
            material={materials['tie fighter base']}
            position={[0.624, -0.014, 0]}
            rotation={[-Math.PI / 2, 0.023, -Math.PI / 2]}
            scale={0.784}
          />
          <mesh
            name='wing_outer_frame'
            castShadow
            receiveShadow
            geometry={nodes.wing_outer_frame.geometry}
            material={materials['tie fighter base']}
            position={[0.044, -2.2, 0]}
            rotation={[Math.PI / 2, -Math.PI / 6, 0]}
            scale={4.175}
          />
          <mesh
            name='wing_panel_DO_NOT_JOIN_2'
            castShadow
            receiveShadow
            geometry={nodes.wing_panel_DO_NOT_JOIN_2.geometry}
            material={materials['TIE FIGHTER WING']}
            position={[-0.012, -0.004, -2.295]}
            rotation={[Math.PI / 2, -Math.PI / 6, 0]}
            scale={4.189}
          />
          <mesh
            name='wing_tech_pannel'
            castShadow
            receiveShadow
            geometry={nodes.wing_tech_pannel.geometry}
            material={materials['tie fighter base']}
            position={[-0.022, -0.013, 2.268]}
            rotation={[-1.571, -1.558, 0]}
            scale={0.24}
          />
          <mesh
            name='wingbody_joiner'
            castShadow
            receiveShadow
            geometry={nodes.wingbody_joiner.geometry}
            material={materials['tie fighter base']}
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
                  material={materials['Frosted Glass 01'].clone()}
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
