'use client';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

useGLTF.preload('/models/satellite.glb');

export default function SatelliteModel() {
  const group = useRef<any>(null);
  const { nodes, materials, animations }: any = useGLTF(
    '/models/satellite.glb'
  );
  const { actions } = useAnimations(animations, group);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollPosition(scrollY / maxScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition >= 0.43 && scrollPosition < 0.8 && actions) {
      setAnimationStarted(true);
      Object.values(actions).forEach((action: any) => action.play());
    } else if (actions) {
      setAnimationStarted(false);
      Object.values(actions).forEach((action: any) => action.stop());
    }
  }, [scrollPosition, actions]);

  useFrame(() => {
    if (animationStarted && actions) {
      Object.values(actions).forEach((action: any) => {
        action.time = (scrollPosition - 0.43) * 2 * action.getClip().duration;
        action.paused = false;
      });
    }
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
            name='wing_outer_frame'
            castShadow
            receiveShadow
            geometry={nodes.wing_outer_frame.geometry}
            material={materials['tie fighter base']}
            position={[0.044, -2.2, 0]}
            rotation={[Math.PI / 2, -Math.PI / 6, 0]}
            scale={4.175}
          />
          <group
            name='wing_panel_DO_NOT_JOIN_2'
            position={[-0.012, -0.004, -2.295]}
            rotation={[Math.PI / 2, -Math.PI / 6, 0]}
            scale={4.189}
          >
            <mesh
              name='Circle001'
              castShadow
              receiveShadow
              geometry={nodes.Circle001.geometry}
              material={materials['TIE FIGHTER WING.001']}
            />
            <mesh
              name='Circle001_1'
              castShadow
              receiveShadow
              geometry={nodes.Circle001_1.geometry}
              material={materials['TIE FIGHTER WING']}
            />
          </group>
          <group
            name='wing_pannel_DO_NOT_JOIN'
            position={[-0.014, -0.007, -2.295]}
            rotation={[-Math.PI / 2, -0.52, 0]}
            scale={-4.189}
          >
            <mesh
              name='Circle010'
              castShadow
              receiveShadow
              geometry={nodes.Circle010.geometry}
              material={materials['TIE FIGHTER WING']}
            />
            <mesh
              name='Circle010_1'
              castShadow
              receiveShadow
              geometry={nodes.Circle010_1.geometry}
              material={materials['TIE FIGHTER WING.001']}
            />
          </group>
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
        {/* <pointLight
          name='Point'
          intensity={2717570.653}
          decay={2}
          color='#b8b6ff'
          position={[17.563, 23.175, 7.499]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <pointLight
          name='Point001'
          intensity={543514.131}
          decay={2}
          color='#fefffa'
          position={[-9.122, 20.686, -1.713]}
          rotation={[-Math.PI / 2, 0, 0]}
        /> */}
        <group
          name='Empty001'
          position={[0.318, 0, -11.854]}
          rotation={[0.56, -0.671, 0.954]}
          scale={26.353}
        >
          <mesh
            name='Logo_Main001_cell'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.938, -0.154, -0.069]}
            scale={0.042}
          />
          <mesh
            name='Logo_Main001_cell001'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell001.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.053, -0.046, 3.073]}
            scale={-0.01}
          />
          <mesh
            name='Logo_Main001_cell002'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell002.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.744, 0.064, 2.085]}
            scale={0.036}
          />
          <mesh
            name='Logo_Main001_cell003'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell003.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.488, 1.351, -2.694]}
            scale={-0.008}
          />
          <mesh
            name='Logo_Main001_cell004'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell004.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.065, -0.725, 0.605]}
            scale={0.028}
          />
          <mesh
            name='Logo_Main001_cell005'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell005.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.943, -0.265, 2.111]}
            scale={0.119}
          />
          <mesh
            name='Logo_Main001_cell006'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell006.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.126, -0.079, -1.321]}
            scale={-0.005}
          />
          <mesh
            name='Logo_Main001_cell007'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell007.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.924, -0.133, 2.752]}
            scale={-0.092}
          />
          <mesh
            name='Logo_Main001_cell008'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell008.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.485, 0.443, -1.388]}
            scale={-0.016}
          />
          <mesh
            name='Logo_Main001_cell009'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell009.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.04, 0.905, 1.005]}
            scale={0.064}
          />
          <mesh
            name='Logo_Main001_cell010'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell010.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.926, -0.449, 2.211]}
            scale={0.013}
          />
          <mesh
            name='Logo_Main001_cell011'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell011.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.624, 0.845, 0.925]}
            scale={-0.076}
          />
          <mesh
            name='Logo_Main001_cell012'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell012.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.134, -0.116, 0.306]}
            scale={0.016}
          />
          <mesh
            name='Logo_Main001_cell013'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell013.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.297, -0.452, 2.522]}
            scale={0.062}
          />
          <mesh
            name='Logo_Main001_cell014'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell014.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.117, -0.62, 1.873]}
            scale={-0.032}
          />
          <mesh
            name='Logo_Main001_cell015'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell015.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.757, 0.109, -0.08]}
            scale={0.048}
          />
          <mesh
            name='Logo_Main001_cell016'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell016.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-3.012, 0.22, 1.885]}
            scale={-0.063}
          />
          <mesh
            name='Logo_Main001_cell017'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell017.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.705, 0.464, 2.247]}
            scale={-0.001}
          />
          <mesh
            name='Logo_Main001_cell018'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell018.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.714, -0.258, 2.299]}
            scale={0.129}
          />
          <mesh
            name='Logo_Main001_cell019'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell019.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.645, -0.689, 0.484]}
            scale={0.017}
          />
          <mesh
            name='Logo_Main001_cell020'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell020.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.592, 1.015, 2.777]}
            scale={0.098}
          />
          <mesh
            name='Logo_Main001_cell021'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell021.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.83, 0.5, 1.7]}
            scale={0.029}
          />
          <mesh
            name='Logo_Main001_cell022'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell022.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.073, -0.82, 0.026]}
            scale={0.067}
          />
          <mesh
            name='Logo_Main001_cell023'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell023.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.234, 0.059, -2.347]}
            scale={-0.013}
          />
          <mesh
            name='Logo_Main001_cell024'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell024.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.867, -0.573, 2.311]}
            scale={-0.106}
          />
          <mesh
            name='Logo_Main001_cell025'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell025.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.649, -0.554, 0.884]}
            scale={0.113}
          />
          <mesh
            name='Logo_Main001_cell026'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell026.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.626, -0.911, -0.495]}
            scale={-0.049}
          />
          <mesh
            name='Logo_Main001_cell027'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell027.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.898, 0.189, 1.9]}
            scale={-0.032}
          />
          <mesh
            name='Logo_Main001_cell028'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell028.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.685, -0.569, 0.928]}
            scale={0.101}
          />
          <mesh
            name='Logo_Main001_cell029'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell029.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.537, 0.731, 1.234]}
            scale={-0.055}
          />
          <mesh
            name='Logo_Main001_cell030'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell030.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.724, 0.13, -3.104]}
            scale={0.057}
          />
          <mesh
            name='Logo_Main001_cell031'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell031.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.29, -0.329, -2.732]}
            scale={-0.01}
          />
          <mesh
            name='Logo_Main001_cell032'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell032.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.025, 0.563, -2.249]}
            scale={0.054}
          />
          <mesh
            name='Logo_Main001_cell033'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell033.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.547, -0.784, 2.031]}
            scale={0.057}
          />
          <mesh
            name='Logo_Main001_cell034'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell034.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.827, -0.839, 0.543]}
            scale={0.132}
          />
          <mesh
            name='Logo_Main001_cell035'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell035.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.696, -0.785, -2.782]}
            scale={0.013}
          />
          <mesh
            name='Logo_Main001_cell036'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell036.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.861, 0.724, -2.916]}
            scale={0.031}
          />
          <mesh
            name='Logo_Main001_cell037'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell037.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.42, -0.732, 0.969]}
            scale={0.068}
          />
          <mesh
            name='Logo_Main001_cell038'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell038.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.756, -1.068, -3.09]}
            scale={0.103}
          />
          <mesh
            name='Logo_Main001_cell039'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell039.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.704, -0.792, -2.19]}
            scale={-0.048}
          />
          <mesh
            name='Logo_Main001_cell040'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell040.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.628, -0.418, 0.195]}
            scale={0.101}
          />
          <mesh
            name='Logo_Main001_cell041'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell041.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.704, -0.819, 2.567]}
            scale={0.03}
          />
          <mesh
            name='Logo_Main001_cell042'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell042.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.357, 0.071, -2.035]}
            scale={0.005}
          />
          <mesh
            name='Logo_Main001_cell043'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell043.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.739, 0.684, 0.582]}
            scale={-0.023}
          />
          <mesh
            name='Logo_Main001_cell044'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell044.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.88, -0.331, -2.02]}
            scale={-0.034}
          />
          <mesh
            name='Logo_Main001_cell045'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell045.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.65, 1.107, 2.469]}
            scale={0.066}
          />
          <mesh
            name='Logo_Main001_cell046'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell046.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.716, 0.308, 2.307]}
            scale={0.022}
          />
          <mesh
            name='Logo_Main001_cell047'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell047.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.645, 1.235, 2.255]}
            scale={-0.061}
          />
          <mesh
            name='Logo_Main001_cell048'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell048.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.747, 0.827, 1.829]}
            scale={0.052}
          />
          <mesh
            name='Logo_Main001_cell049'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell049.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.39, -0.583, 1.589]}
            scale={0.124}
          />
          <mesh
            name='Logo_Main001_cell050'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell050.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.752, -0.113, -2.312]}
            scale={-0.013}
          />
          <mesh
            name='Logo_Main001_cell051'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell051.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.695, -1.099, -1.192]}
            scale={-0.039}
          />
          <mesh
            name='Logo_Main001_cell052'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell052.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.831, 0.789, 1.551]}
            scale={0.1}
          />
          <mesh
            name='Logo_Main001_cell053'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell053.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.944, 0.692, 1.986]}
            scale={-0.066}
          />
          <mesh
            name='Logo_Main001_cell054'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell054.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.276, 1.185, -2.512]}
            scale={-0.067}
          />
          <mesh
            name='Logo_Main001_cell055'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell055.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.289, 0.831, 1.247]}
            scale={0.108}
          />
          <mesh
            name='Logo_Main001_cell056'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell056.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.26, 0.201, -0.926]}
            scale={-0.074}
          />
          <mesh
            name='Logo_Main001_cell057'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell057.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.199, 0.728, -2.751]}
            scale={0.028}
          />
          <mesh
            name='Logo_Main001_cell058'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell058.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.459, 0.227, 1.819]}
            scale={0.082}
          />
          <mesh
            name='Logo_Main001_cell059'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell059.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.841, -0.065, -0.384]}
            scale={0.03}
          />
          <mesh
            name='Logo_Main001_cell060'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell060.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.188, -0.743, -0.936]}
            scale={-0.001}
          />
          <mesh
            name='Logo_Main001_cell061'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell061.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-3.1, 1.092, -1.986]}
            scale={0.099}
          />
          <mesh
            name='Logo_Main001_cell062'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell062.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.079, 0.384, -2.658]}
            scale={0.063}
          />
          <mesh
            name='Logo_Main001_cell063'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell063.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.345, -0.932, 0.231]}
            scale={0.066}
          />
          <mesh
            name='Logo_Main001_cell064'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell064.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.236, -1.027, 2.819]}
            scale={0.103}
          />
          <mesh
            name='Logo_Main001_cell065'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell065.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.717, -0.483, 0.042]}
            scale={-0.044}
          />
          <mesh
            name='Logo_Main001_cell066'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell066.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.099, -0.749, -0.978]}
            scale={0.038}
          />
          <mesh
            name='Logo_Main001_cell067'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell067.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.85, -0.228, 1.678]}
            scale={-0.078}
          />
          <mesh
            name='Logo_Main001_cell068'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell068.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.45, 0.377, -1.646]}
            scale={0.062}
          />
          <mesh
            name='Logo_Main001_cell069'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell069.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.987, -0.255, 2.307]}
            scale={0.119}
          />
          <mesh
            name='Logo_Main001_cell070'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell070.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.31, 0.378, -3.13]}
            scale={0.12}
          />
          <mesh
            name='Logo_Main001_cell071'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell071.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.488, 0.866, -1.199]}
            scale={0.025}
          />
          <mesh
            name='Logo_Main001_cell072'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell072.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.848, 0.099, 2.188]}
            scale={-0.037}
          />
          <mesh
            name='Logo_Main001_cell073'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell073.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.397, -0.002, 2.681]}
            scale={-0.1}
          />
          <mesh
            name='Logo_Main001_cell074'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell074.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.145, -0.8, -0.953]}
            scale={0.007}
          />
          <mesh
            name='Logo_Main001_cell075'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell075.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.916, -0.135, 1.721]}
            scale={-0.047}
          />
          <mesh
            name='Logo_Main001_cell076'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell076.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.869, -0.249, -2.026]}
            scale={-0.061}
          />
          <mesh
            name='Logo_Main001_cell077'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell077.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.83, 0.747, 2.277]}
            scale={-0.028}
          />
          <mesh
            name='Logo_Main001_cell078'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell078.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.533, 1.131, -2.428]}
            scale={0}
          />
          <mesh
            name='Logo_Main001_cell079'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell079.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.155, 0.378, -0.315]}
            scale={-0.101}
          />
          <mesh
            name='Logo_Main001_cell080'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell080.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.934, 0.567, 1.025]}
            scale={0.055}
          />
          <mesh
            name='Logo_Main001_cell082'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell082.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.494, 1.082, 0.618]}
            scale={-0.024}
          />
          <mesh
            name='Logo_Main001_cell083'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell083.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.465, -0.977, -2.443]}
            scale={-0.025}
          />
          <mesh
            name='Logo_Main001_cell084'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell084.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.087, -0.383, 0.903]}
            scale={0.125}
          />
          <mesh
            name='Logo_Main001_cell085'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell085.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.024, -0.268, 0.926]}
            scale={-0.031}
          />
          <mesh
            name='Logo_Main001_cell086'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell086.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.004, -1.396, 2.311]}
            scale={-0.031}
          />
          <mesh
            name='Logo_Main001_cell087'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell087.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.474, -0.633, -0.505]}
            scale={0.028}
          />
          <mesh
            name='Logo_Main001_cell088'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell088.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.21, 0.52, -2.482]}
            scale={0.109}
          />
          <mesh
            name='Logo_Main001_cell089'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell089.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.488, -0.538, 1.287]}
            scale={-0.097}
          />
          <mesh
            name='Logo_Main001_cell090'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell090.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.347, 0.013, -1.442]}
            scale={0.037}
          />
          <mesh
            name='Logo_Main001_cell091'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell091.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.86, 0.332, -1.738]}
            scale={0.104}
          />
          <mesh
            name='Logo_Main001_cell092'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell092.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.087, -0.542, 2.612]}
            scale={0.102}
          />
          <mesh
            name='Logo_Main001_cell093'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell093.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.539, 1.261, 2.905]}
            scale={0.015}
          />
          <mesh
            name='Logo_Main001_cell094'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell094.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-3.023, 0.432, -1.957]}
            scale={0.104}
          />
          <mesh
            name='Logo_Main001_cell095'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell095.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.058, 0.892, -1.31]}
            scale={-0.057}
          />
          <mesh
            name='Logo_Main001_cell096'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell096.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.122, -1.443, -1.661]}
            scale={-0.049}
          />
          <mesh
            name='Logo_Main001_cell097'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell097.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.326, 1.034, 2.473]}
            scale={0.052}
          />
          <mesh
            name='Logo_Main001_cell098'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell098.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.737, -0.001, -2.295]}
            scale={-0.018}
          />
          <mesh
            name='Logo_Main001_cell099'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell099.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.611, -1.002, -2.423]}
            scale={-0.05}
          />
          <mesh
            name='Logo_Main001_cell100'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell100.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.222, 1.168, -1.839]}
            scale={0.122}
          />
          <mesh
            name='Logo_Main001_cell101'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell101.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.03, 0.186, -0.405]}
            scale={0.011}
          />
          <mesh
            name='Logo_Main001_cell102'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell102.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.144, 0.367, 0.542]}
            scale={-0.005}
          />
          <mesh
            name='Logo_Main001_cell103'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell103.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-3.03, 0.798, -2.494]}
            scale={-0.101}
          />
          <mesh
            name='Logo_Main001_cell104'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell104.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.541, 0.443, 1.162]}
            scale={0.058}
          />
          <mesh
            name='Logo_Main001_cell105'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell105.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.381, -0.863, -2.406]}
            scale={-0.046}
          />
          <mesh
            name='Logo_Main001_cell106'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell106.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.127, 0.788, 1.158]}
            scale={0.02}
          />
          <mesh
            name='Logo_Main001_cell107'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell107.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.83, 0.012, -2.89]}
            scale={-0.092}
          />
          <mesh
            name='Logo_Main001_cell108'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell108.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.24, 0.505, -1.423]}
            scale={0.039}
          />
          <mesh
            name='Logo_Main001_cell109'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell109.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.929, -0.503, 1.337]}
            scale={-0.07}
          />
          <mesh
            name='Logo_Main001_cell110'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell110.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.173, 1.103, 3.07]}
            scale={0.004}
          />
          <mesh
            name='Logo_Main001_cell111'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell111.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.284, -0.731, 0.606]}
            scale={0.026}
          />
          <mesh
            name='Logo_Main001_cell112'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell112.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.484, 0.787, -2.61]}
            scale={0.111}
          />
          <mesh
            name='Logo_Main001_cell113'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell113.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.254, 0.634, 2.824]}
            scale={0.129}
          />
          <mesh
            name='Logo_Main001_cell114'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell114.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.927, -0.066, -3.041]}
            scale={0.014}
          />
          <group
            name='Logo_Main001_cell115'
            position={[0.47, -0.029, -0.781]}
            rotation={[3.022, 0.026, -1.876]}
            scale={-0.04}
          />
          <mesh
            name='Logo_Main001_cell116'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell116.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.174, -0.681, 0.835]}
            scale={0.023}
          />
          <mesh
            name='Logo_Main001_cell117'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell117.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.678, 0.842, 2.563]}
            scale={-0.037}
          />
          <mesh
            name='Logo_Main001_cell118'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell118.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.03, -0.876, 1.953]}
            scale={-0.027}
          />
          <mesh
            name='Logo_Main001_cell119'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell119.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.629, -0.169, -0.59]}
            scale={-0.035}
          />
          <mesh
            name='Logo_Main001_cell120'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell120.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.514, 1.278, -0.906]}
            scale={-0.077}
          />
          <mesh
            name='Logo_Main001_cell121'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell121.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.266, 0.05, -0.431]}
            scale={-0.005}
          />
          <mesh
            name='Logo_Main001_cell122'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell122.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.419, -0.507, 0.482]}
            scale={-0.038}
          />
          <mesh
            name='Logo_Main001_cell123'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell123.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.958, -1.38, 0.244]}
            scale={-0.102}
          />
          <mesh
            name='Logo_Main001_cell124'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell124.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.751, 0.315, -2.243]}
            scale={-0.017}
          />
          <mesh
            name='Logo_Main001_cell125'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell125.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.707, -0.666, 2.244]}
            scale={0.052}
          />
          <mesh
            name='Logo_Main001_cell126'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell126.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.778, -1.209, -0.659]}
            scale={-0.007}
          />
          <mesh
            name='Logo_Main001_cell127'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell127.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.965, -0.459, -1.889]}
            scale={0.086}
          />
          <mesh
            name='Logo_Main001_cell128'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell128.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.083, -0.021, -3.089]}
            scale={0.019}
          />
          <mesh
            name='Logo_Main001_cell129'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell129.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.449, 0.45, 2.596]}
            scale={0.007}
          />
          <mesh
            name='Logo_Main001_cell130'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell130.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.649, 0.147, -2.586]}
            scale={-0.016}
          />
          <mesh
            name='Logo_Main001_cell131'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell131.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.225, 0.909, -1.069]}
            scale={-0.067}
          />
          <mesh
            name='Logo_Main001_cell132'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell132.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.669, -0.196, 2.734]}
            scale={0.026}
          />
          <mesh
            name='Logo_Main001_cell133'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell133.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.475, -0.425, -2.016]}
            scale={0.062}
          />
          <mesh
            name='Logo_Main001_cell134'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell134.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.64, 0.744, 2.345]}
            scale={0.096}
          />
          <mesh
            name='Logo_Main001_cell135'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell135.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.459, -0.697, 2.884]}
            scale={0.121}
          />
          <mesh
            name='Logo_Main001_cell136'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell136.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.621, 0.528, 2.45]}
            scale={-0.057}
          />
          <mesh
            name='Logo_Main001_cell137'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell137.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.382, -0.421, -2.843]}
            scale={0.125}
          />
          <mesh
            name='Logo_Main001_cell138'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell138.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.26, 0.35, -2.357]}
            scale={-0.045}
          />
          <mesh
            name='Logo_Main001_cell139'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell139.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.278, -0.137, 2.257]}
            scale={0.021}
          />
          <mesh
            name='Logo_Main001_cell140'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell140.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.857, -0.658, 0.953]}
            scale={0.122}
          />
          <mesh
            name='Logo_Main001_cell141'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell141.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.365, -1.007, 0.662]}
            scale={-0.068}
          />
          <mesh
            name='Logo_Main001_cell142'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell142.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-3.007, -0.215, -2.717]}
            scale={0.008}
          />
          <mesh
            name='Logo_Main001_cell143'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell143.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[3.074, -0.007, 2.911]}
            scale={0.119}
          />
          <mesh
            name='Logo_Main001_cell144'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell144.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.772, 0.121, 2.154]}
            scale={0.047}
          />
          <mesh
            name='Logo_Main001_cell145'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell145.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-3.019, -0.703, 2.071]}
            scale={-0.044}
          />
          <mesh
            name='Logo_Main001_cell146'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell146.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.929, -0.335, -2.443]}
            scale={-0.049}
          />
          <mesh
            name='Logo_Main001_cell147'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell147.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.129, 1.02, -0.979]}
            scale={0.034}
          />
          <mesh
            name='Logo_Main001_cell148'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell148.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.552, 1.216, -0.825]}
            scale={-0.066}
          />
          <mesh
            name='Logo_Main001_cell149'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell149.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.406, 0.344, 1.089]}
            scale={0.119}
          />
          <mesh
            name='Logo_Main001_cell150'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell150.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.76, 1.318, -0.016]}
            scale={-0.058}
          />
          <mesh
            name='Logo_Main001_cell151'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell151.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.274, -0.158, 2.841]}
            scale={0.071}
          />
          <mesh
            name='Logo_Main001_cell152'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell152.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.609, -0.642, -0.683]}
            scale={-0.082}
          />
          <mesh
            name='Logo_Main001_cell153'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell153.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.384, -1.277, 0.005]}
            scale={0.038}
          />
          <mesh
            name='Logo_Main001_cell154'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell154.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.044, -0.492, 0.287]}
            scale={-0.056}
          />
          <mesh
            name='Logo_Main001_cell155'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell155.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.01, -0.747, 2.01]}
            scale={0.13}
          />
          <mesh
            name='Logo_Main001_cell156'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell156.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.234, -0.509, -0.019]}
            scale={0.133}
          />
          <mesh
            name='Logo_Main001_cell157'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell157.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.735, -0.417, -2.227]}
            scale={0.049}
          />
          <mesh
            name='Logo_Main001_cell158'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell158.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.334, 0.828, -0.206]}
            scale={0.114}
          />
          <mesh
            name='Logo_Main001_cell159'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell159.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.563, -0.848, -1.883]}
            scale={-0.054}
          />
          <mesh
            name='Logo_Main001_cell160'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell160.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.053, 0.434, 1.374]}
            scale={-0.021}
          />
          <mesh
            name='Logo_Main001_cell161'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell161.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.998, -0.957, -2.07]}
            scale={0.062}
          />
          <mesh
            name='Logo_Main001_cell162'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell162.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.944, -0.41, 2.191]}
            scale={-0.067}
          />
          <mesh
            name='Logo_Main001_cell163'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell163.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.848, 0.004, -2.874]}
            scale={-0.005}
          />
          <mesh
            name='Logo_Main001_cell164'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell164.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.795, 1.249, -1.075]}
            scale={-0.024}
          />
          <mesh
            name='Logo_Main001_cell165'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell165.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.986, -0.836, 2.148]}
            scale={-0.018}
          />
          <mesh
            name='Logo_Main001_cell166'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell166.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-3.042, 0.961, -1.965]}
            scale={-0.007}
          />
          <mesh
            name='Logo_Main001_cell167'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell167.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.992, -0.987, -1.791]}
            scale={0.002}
          />
          <mesh
            name='Logo_Main001_cell168'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell168.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.826, 0.656, 2.656]}
            scale={-0.104}
          />
          <mesh
            name='Logo_Main001_cell169'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell169.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.667, -0.193, 2.712]}
            scale={-0.017}
          />
          <mesh
            name='Logo_Main001_cell170'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell170.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.374, 1.013, 2.641]}
            scale={0.101}
          />
          <mesh
            name='Logo_Main001_cell171'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell171.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.823, -0.407, 2.983]}
            scale={0.003}
          />
          <mesh
            name='Logo_Main001_cell172'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell172.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.71, -0.712, 2.171]}
            scale={-0.097}
          />
          <mesh
            name='Logo_Main001_cell173'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell173.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.874, -0.141, 1.77]}
            scale={-0.094}
          />
          <mesh
            name='Logo_Main001_cell174'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell174.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.877, -0.97, 1.569]}
            scale={0.078}
          />
          <mesh
            name='Logo_Main001_cell175'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell175.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[2.28, -0.268, -2.395]}
            scale={0.113}
          />
          <mesh
            name='Logo_Main001_cell176'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell176.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.678, -1.155, -0.446]}
            scale={-0.078}
          />
          <mesh
            name='Logo_Main001_cell177'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell177.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-2.755, -0.997, -2.117]}
            scale={0.038}
          />
          <mesh
            name='Logo_Main001_cell178'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell178.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.994, 0.314, 0.644]}
            scale={-0.106}
          />
          <mesh
            name='Logo_Main001_cell179'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell179.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-0.727, -0.509, 0.796]}
            scale={0.039}
          />
          <mesh
            name='Logo_Main001_cell180'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell180.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[0.437, 0.171, 0.375]}
            scale={0.071}
          />
          <mesh
            name='Logo_Main001_cell181'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell181.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[-1.169, -1.033, -1.597]}
            scale={-0.101}
          />
          <mesh
            name='Logo_Main001_cell182'
            castShadow
            receiveShadow
            geometry={nodes.Logo_Main001_cell182.geometry}
            material={materials['Frosted Glass 01']}
            position={[0.47, -0.029, -0.781]}
            rotation={[1.731, 0.721, -2.302]}
            scale={0.065}
          />
        </group>
      </group>
    </group>
  );
}
