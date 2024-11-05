import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
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
    materials['Frosted Glass 01'].refractionFactor = 0.9;
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
  }, []);

  useGSAP(() => {
    // Play the actions once to initialize them
    animations.forEach((clip: any) => {
      const action = mixer.clipAction(clip);
      action.paused = true;
    });

    // Register ScrollTrigger
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

    ScrollTrigger.create({
      trigger: '#logoContainer',
      start: 'top top', // Pin when the top of the logoContainer hits the top of the viewport
      end: '+=50%', // End pinning when the bottom of the logoContainer hits the top of the viewport
      pin: true,
      scrub: 2,
      pinSpacing: false,
    });
  }, [mixer]);

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  return (
    <group ref={group} dispose={null}>
      <group name='Scene'>
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
  );
}
