'use client';

import { useEffect, useRef } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Aerius3DModel(props: any) {
  const { nodes, materials }: any = useGLTF('/models/LogoBreak3.glb');

  const group = useRef<THREE.Group>();

  useEffect(() => {
    const groupWorldPosition = new THREE.Vector3();
    group.current!.getWorldPosition(groupWorldPosition);

    group.current!.children.forEach((mesh: any) => {
      mesh.originalPosition = mesh.position.clone();
      const meshWorldPosition = new THREE.Vector3();
      mesh.getWorldPosition(meshWorldPosition);

      mesh.directionVector = meshWorldPosition
        .clone()
        .sub(groupWorldPosition)
        .normalize();
      mesh.targetPosition = mesh.originalPosition
        .clone()
        .add(mesh.directionVector.clone().multiplyScalar(3));
    });
  }, []);

  const scrollData = useScroll();

  useFrame(() => {
    group.current!.children.forEach((mesh: any) => {
      if (scrollData.offset < 0.0001) {
        if (mesh.name === 'Logo Main') {
          mesh.visible = true;
        } else {
          mesh.visible = false;
        }
      } else {
        if (mesh.name === 'Logo Main') {
          mesh.visible = false;
        } else {
          mesh.visible = true;
        }
      }

      mesh.position.x = THREE.MathUtils.lerp(
        mesh.originalPosition.x,
        mesh.targetPosition.x,
        scrollData.offset // 0 at the beginning and 1 after scroll
      );
      mesh.position.y = THREE.MathUtils.lerp(
        mesh.originalPosition.y,
        mesh.targetPosition.y,
        scrollData.offset // 0 at the beginning and 1 after scroll
      );
      mesh.position.z = THREE.MathUtils.lerp(
        mesh.originalPosition.z,
        mesh.targetPosition.z,
        scrollData.offset // 0 at the beginning and 1 after scroll
      );
    });
  });

  return (
    <group {...props} dispose={null} ref={group}>
      <mesh
        name='Logo Main'
        castShadow
        receiveShadow
        geometry={nodes.Logo_Main.geometry}
        material={materials['Frosted Glass 01']}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell001.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.515, 0.48, 0.131]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell002.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.348, 0.687, 0.084]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell003.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.811, -0.1, -0.014]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell004.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.511, 0.088, 0.128]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell005.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.272, 0.863, -0.116]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell006.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.157, -0.54, -0.158]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell007.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.363, 0.896, 0.129]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell008.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.279, 0.565, 0.097]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell009.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.608, 0.255, -0.195]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell010.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.146, 0.655, 0.119]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell011.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.121, 0.887, -0.139]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell012.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.323, 0.476, 0.12]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell013.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.899, 0.155, -0.119]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell014.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.789, -0.213, -0.1]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell015.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.49, 0.229, 0.091]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell016.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.653, 0.056, -0.317]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell017.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.437, 0.516, 0.133]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell018.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.418, 0.471, -0.249]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell019.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.68, 0.582, 0.204]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell020.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.186, 0.435, 0.12]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell021.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.453, -0.438, -0.056]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell022.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.104, 0.383, 0.133]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell023.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.008, -0.34, 0.123]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell024.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.083, 1.086, 0.171]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell025.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.302, 0.609, -0.068]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell026.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.439, 0.556, 0.234]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell027.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.579, -0.196, 0.197]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell028.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.075, 1.013, -0.122]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell029.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.024, 1.135, 0.093]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell030.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.006, 1.103, -0.127]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell031.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.013, 1.121, -0.064]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell032.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.488, 0.818, 0.114]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell033.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.737, -0.084, -0.037]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell034.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.27, 0.953, 0.197]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell035.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.031, 1.087, 0.018]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell036.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.724, 0.609, -0.09]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell037.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.705, -0.253, -0.074]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell038.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.371, -0.004, 0.074]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell039.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.023, 0.28, 0.155]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell040.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.743, 0.282, -0.078]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell041.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.282, -0.515, 0.168]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell042.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.026, 0.698, 0.072]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell043.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.409, 0.297, 0.047]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell044.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.116, 0.994, 0.182]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell045.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.018, 1.126, -0.019]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell046.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.201, 0.755, 0.117]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell047.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.685, 0.225, -0.2]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell048.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.085, 0.951, -0.01]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell049.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.043, 1.041, 0.015]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell050.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.089, 0.726, -0.142]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell051.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.078, 0.82, 0.153]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell052.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.071, 0.985, 0.01]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell053.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.489, 0.372, 0.137]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell054.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.639, 0.394, 0.047]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell055.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.013, 0.939, 0.16]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell056.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.266, 0.528, 0.1]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell057.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.026, -0.605, -0.19]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell058.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.154, 0.62, 0.112]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell059.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.917, 0.173, 0.036]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell060.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.053, 1.056, 0.224]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell061.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.294, -0.397, -0.169]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell062.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.353, 0.555, -0.157]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell063.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.21, 0.633, -0.177]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell064.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.348, -0.455, 0.001]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell065.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.436, -0.486, -0.159]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell066.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.419, 0.179, 0.054]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell067.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.582, 0.433, 0.125]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell068.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.543, 0.696, 0.25]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell069.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.22, 0.701, 0.066]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell070.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.112, 1.018, 0.093]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell071.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.014, 0.835, 0.157]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell072.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.175, 0.827, 0.165]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell073.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.05, 1.025, 0.05]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell074.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.033, 0.908, -0.154]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell075.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.194, 1.017, 0.255]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell076.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.91, -0.132, -0.051]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell077.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.044, 0.991, -0.037]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell078.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.361, 0.569, -0.068]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell079.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.736, 0.098, -0.216]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell080.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.631, 0.244, -0.091]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell081.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.795, 0.278, 0.068]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell082.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.078, 0.752, -0.163]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell083.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.567, 0.081, 0.053]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell084.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.845, 0.032, -0.321]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell085.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.358, 0.864, 0.258]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell086.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.12, -0.403, 0.176]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell087.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.467, 0.064, -0.237]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell088.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.091, 0.263, -0.158]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell089.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.42, 0.499, -0.026]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell090.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.038, 0.715, -0.215]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell091.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.119, -0.575, 0.095]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell092.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.049, 0.93, -0.208]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell093.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.305, 0.641, 0.195]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell094.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.516, 0.824, 0.275]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell095.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.007, 1.101, 0.123]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell096.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.895, 0.26, -0.112]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell097.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.641, -0.081, -0.322]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell098.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.679, 0.22, -0.317]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell099.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.42, 0.641, 0.127]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell100.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.403, 0.568, 0.131]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell101.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.29, 0.577, -0.241]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell102.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.333, 0.649, -0.25]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell103.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.7, 0.752, 0.136]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell104.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.23, 0.311, 0.141]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell105.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.087, 0.457, 0.141]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell106.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.031, 0.454, 0.141]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell107.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.152, -0.267, 0.134]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell108.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.065, -0.349, 0.124]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell109.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.003, -0.222, 0.137]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell110.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.017, 1.104, 0.196]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell111.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.323, 0.808, -0.024]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell112.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.385, 0.574, 0.182]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell113.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.378, -0.079, 0.064]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell114.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.009, 1.122, 0.045]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell115.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.054, 1.112, -0.158]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell116.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.019, 1.12, -0.027]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell117.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.617, -0.194, -0.027]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell118.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.058, 0.37, 0.137]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell119.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.087, 0.333, 0.15]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell120.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.006, 0.364, 0.141]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell121.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.799, 0.161, -0.064]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell122.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.458, -0.408, 0.058]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell123.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.348, -0.41, 0.067]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell124.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.083, 0.766, 0.122]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell125.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.03, 0.694, 0.072]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell126.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.303, 0.259, 0.059]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell127.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.01, 1.137, 0]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell128.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.102, 0.742, 0.112]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell129.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.598, 0.069, -0.208]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell130.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.048, 0.777, 0.123]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell131.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.36, 0.384, 0.203]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell132.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.037, 0.938, 0.152]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell133.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.371, 0.574, 0.164]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell134.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.31, 0.457, 0.084]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell135.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.391, 0.507, 0.126]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell136.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.173, 0.714, 0.121]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell137.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.9, 0.256, 0.036]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell138.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.562, 0.588, -0.123]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell139.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.534, 0.686, -0.13]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell140.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.387, 0.499, -0.152]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell141.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.29, 0.792, -0.154]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell142.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.315, -0.513, -0.047]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell143.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.356, 0.104, 0.051]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell144.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.612, 0.681, 0.271]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell145.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.036, 0.855, 0.151]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell146.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.002, 0.793, 0.115]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell147.geometry}
        material={materials['Frosted Glass 01']}
        position={[0, 0.769, -0.128]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell148.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.022, 0.967, -0.121]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell150.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.876, -0.206, -0.15]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell151.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.003, 0.966, -0.043]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell152.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.528, 0.678, -0.002]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell153.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.569, 0.63, -0.009]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell154.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.396, 0.53, -0.078]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell155.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.652, -0.082, -0.294]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell156.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.815, 0.245, -0.22]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell157.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.816, 0.172, 0.008]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell158.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.681, 0.031, 0.037]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell159.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.555, -0.026, 0.059]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell160.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.737, -0.141, -0.328]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell161.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.863, 0.257, -0.31]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell162.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.228, -0.223, 0.111]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell163.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.383, -0.255, 0.203]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell164.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.063, -0.184, -0.157]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell165.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.325, -0.186, -0.218]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell166.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.071, -0.375, -0.211]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell167.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.546, 0.015, -0.262]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell168.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.05, -0.319, -0.187]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell169.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.173, 0.305, -0.196]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell170.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.064, 0.458, -0.192]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell171.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.075, 0.428, -0.178]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell172.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.345, 0.565, -0.073]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell173.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.379, 0.648, -0.075]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell174.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.173, 0.863, -0.245]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell175.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.051, 0.822, -0.218]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell176.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.052, 0.744, -0.21]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell177.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.025, -0.615, 0.184]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell178.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.223, -0.39, 0.08]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell179.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.005, 1.013, -0.212]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell180.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.039, 0.783, -0.173]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell181.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.011, 0.782, -0.159]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell182.geometry}
        material={materials['Frosted Glass 01']}
        position={[0.282, 0.605, 0.158]}
        rotation={[0, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Logo_Broken_cell183.geometry}
        material={materials['Frosted Glass 01']}
        position={[-0.025, 1.079, 0.111]}
        rotation={[0, 0.005, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/LogoBreak3.glb');
