import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
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
    materials['Frosted Glass 01'].roughness = 0.1;
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

    materials['Glass Gradient'].alphaToCoverage = false;
    materials['Glass Gradient'].anisotropyMap = null;
    materials['Glass Gradient'].anisotropyRotation = 0;
    materials['Glass Gradient'].aoMap = null;
    materials['Glass Gradient'].aoMapIntensity = 1;
    materials['Glass Gradient'].attenuationColor = new Color(1, 1, 1);
    materials['Glass Gradient'].attenuationDistance = Infinity;
    materials['Glass Gradient'].blendAlpha = 0;
    materials['Glass Gradient'].blendColor = new Color(0, 0, 0);
    materials['Glass Gradient'].blendDst = 205;
    materials['Glass Gradient'].blendDstAlpha = null;
    materials['Glass Gradient'].blendEquation = 100;
    materials['Glass Gradient'].blendEquationAlpha = null;
    materials['Glass Gradient'].blendSrc = 204;
    materials['Glass Gradient'].blendSrcAlpha = null;
    materials['Glass Gradient'].blending = 1;
    materials['Glass Gradient'].bumpMap = null;
    materials['Glass Gradient'].bumpScale = 1;
    materials['Glass Gradient'].clearcoatMap = null;
    materials['Glass Gradient'].clearcoatNormalMap = null;
    materials['Glass Gradient'].clearcoatNormalScale = new Vector2(1, -1);
    materials['Glass Gradient'].clearcoatRoughness = 0;
    materials['Glass Gradient'].clearcoatRoughnessMap = null;
    materials['Glass Gradient'].clipIntersection = false;
    materials['Glass Gradient'].clipShadows = false;
    materials['Glass Gradient'].clippingPlanes = null;
    materials['Glass Gradient'].color = new Color(1, 1, 1);
    materials['Glass Gradient'].colorWrite = true;
    materials['Glass Gradient'].defines = { STANDARD: '', PHYSICAL: '' };
    materials['Glass Gradient'].depthFunc = 3;
    materials['Glass Gradient'].depthTest = true;
    materials['Glass Gradient'].depthWrite = true;
    materials['Glass Gradient'].displacementBias = 0;
    materials['Glass Gradient'].displacementMap = null;
    materials['Glass Gradient'].displacementScale = 1;
    materials['Glass Gradient'].dithering = false;
    materials['Glass Gradient'].emissive = new Color(0, 0, 0);
    materials['Glass Gradient'].emissiveIntensity = 1;
    materials['Glass Gradient'].emissiveMap = null;
    materials['Glass Gradient'].envMap = null;
    materials['Glass Gradient'].envMapIntensity = 1;
    materials['Glass Gradient'].envMapRotation = new Euler(0, 0, 0, 'XYZ');
    materials['Glass Gradient'].flatShading = false;
    materials['Glass Gradient'].fog = true;
    materials['Glass Gradient'].forceSinglePass = false;
    materials['Glass Gradient'].ior = 1.4500000476837158;
    materials['Glass Gradient'].iridescenceIOR = 1.3;
    materials['Glass Gradient'].iridescenceMap = null;
    materials['Glass Gradient'].iridescenceThicknessMap = null;
    materials['Glass Gradient'].iridescenceThicknessRange = [100, 400];
    materials['Glass Gradient'].isMaterial = true;
    materials['Glass Gradient'].isMeshPhysicalMaterial = true;
    materials['Glass Gradient'].isMeshStandardMaterial = true;
    materials['Glass Gradient'].lightMap = null;
    materials['Glass Gradient'].lightMapIntensity = 1;
    materials['Glass Gradient'].map = null;
    materials['Glass Gradient'].metalness = 0.7;
    materials['Glass Gradient'].metalnessMap = null;
    materials['Glass Gradient'].name = 'Glass Gradient';
    materials['Glass Gradient'].normalMap = null;
    materials['Glass Gradient'].normalMapType = 0;
    materials['Glass Gradient'].normalScale = new Vector2(1, -1);
    materials['Glass Gradient'].opacity = 1;
    materials['Glass Gradient'].polygonOffset = false;
    materials['Glass Gradient'].polygonOffsetFactor = 0;
    materials['Glass Gradient'].polygonOffsetUnits = 0;
    materials['Glass Gradient'].precision = null;
    materials['Glass Gradient'].premultipliedAlpha = false;
    materials['Glass Gradient'].roughness = 0.2;
    materials['Glass Gradient'].roughnessMap = null;
    materials['Glass Gradient'].shadowSide = null;
    materials['Glass Gradient'].sheenColor = new Color(0, 0, 0);
    materials['Glass Gradient'].sheenColorMap = null;
    materials['Glass Gradient'].sheenRoughness = 1;
    materials['Glass Gradient'].sheenRoughnessMap = null;
    materials['Glass Gradient'].side = 2;
    materials['Glass Gradient'].specularColor = new Color(1, 1, 1);
    materials['Glass Gradient'].specularColorMap = null;
    materials['Glass Gradient'].specularIntensity = 1;
    materials['Glass Gradient'].specularIntensityMap = null;
    materials['Glass Gradient'].stencilFail = 7680;
    materials['Glass Gradient'].stencilFunc = 519;
    materials['Glass Gradient'].stencilFuncMask = 255;
    materials['Glass Gradient'].stencilRef = 0;
    materials['Glass Gradient'].stencilWrite = false;
    materials['Glass Gradient'].stencilWriteMask = 255;
    materials['Glass Gradient'].stencilZFail = 7680;
    materials['Glass Gradient'].stencilZPass = 7680;
    materials['Glass Gradient'].thickness = 0;
    materials['Glass Gradient'].thicknessMap = null;
    materials['Glass Gradient'].toneMapped = true;
    materials['Glass Gradient'].transmissionMap = null;
    materials['Glass Gradient'].transparent = false;
    materials['Glass Gradient'].type = 'MeshPhysicalMaterial';
    materials['Glass Gradient'].userData = {};
    materials['Glass Gradient'].uuid = '502aee9e-bbfe-42c7-b759-2a859eccf50d';
    materials['Glass Gradient'].version = 6243;
    materials['Glass Gradient'].vertexColors = false;
    materials['Glass Gradient'].visible = true;
    materials['Glass Gradient'].wireframe = false;
    materials['Glass Gradient'].wireframeLinecap = 'round';
    materials['Glass Gradient'].wireframeLinejoin = 'round';
    materials['Glass Gradient'].wireframeLinewidth = 1;
  }, []);

  useGSAP(() => {
    // Play the actions once to initialize them
    animations.forEach((clip: any) => {
      const action = mixer.clipAction(clip);
      action.paused = true;
    });

    // Register ScrollTrigger
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

    ScrollTrigger.create({
      trigger: '#astronautContainer',
      start: 'top top', // Pin when the top of the logoContainer hits the top of the viewport
      end: '+=180%', // End pinning when the bottom of the logoContainer hits the top of the viewport
      pin: true,
      scrub: 2,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [mixer]);

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
              material={materials['Ch44_Body.001']}
              skeleton={nodes.Mesh001.skeleton}
            />
            <skinnedMesh
              name='Mesh001_1'
              geometry={nodes.Mesh001_1.geometry}
              material={materials['Ch44_body1.001']}
              skeleton={nodes.Mesh001_1.skeleton}
            />
            <skinnedMesh
              name='Mesh001_2'
              geometry={nodes.Mesh001_2.geometry}
              material={materials['Glass Gradient']}
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
