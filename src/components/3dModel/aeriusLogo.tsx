import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Logo_Main: THREE.Mesh;
    Logo_Main001_cell: THREE.Mesh;
    Logo_Main001_cell001: THREE.Mesh;
    Logo_Main001_cell002: THREE.Mesh;
    Logo_Main001_cell003: THREE.Mesh;
    Logo_Main001_cell004: THREE.Mesh;
    Logo_Main001_cell005: THREE.Mesh;
    Logo_Main001_cell006: THREE.Mesh;
    Logo_Main001_cell007: THREE.Mesh;
    Logo_Main001_cell008: THREE.Mesh;
    Logo_Main001_cell009: THREE.Mesh;
    Logo_Main001_cell010: THREE.Mesh;
    Logo_Main001_cell011: THREE.Mesh;
    Logo_Main001_cell012: THREE.Mesh;
    Logo_Main001_cell013: THREE.Mesh;
    Logo_Main001_cell014: THREE.Mesh;
    Logo_Main001_cell015: THREE.Mesh;
    Logo_Main001_cell016: THREE.Mesh;
    Logo_Main001_cell017: THREE.Mesh;
    Logo_Main001_cell018: THREE.Mesh;
    Logo_Main001_cell019: THREE.Mesh;
    Logo_Main001_cell021: THREE.Mesh;
    Logo_Main001_cell022: THREE.Mesh;
    Logo_Main001_cell023: THREE.Mesh;
    Logo_Main001_cell024: THREE.Mesh;
    Logo_Main001_cell025: THREE.Mesh;
    Logo_Main001_cell026: THREE.Mesh;
    Logo_Main001_cell027: THREE.Mesh;
    Logo_Main001_cell028: THREE.Mesh;
    Logo_Main001_cell029: THREE.Mesh;
    Logo_Main001_cell030: THREE.Mesh;
    Logo_Main001_cell031: THREE.Mesh;
    Logo_Main001_cell032: THREE.Mesh;
    Logo_Main001_cell033: THREE.Mesh;
    Logo_Main001_cell034: THREE.Mesh;
    Logo_Main001_cell035: THREE.Mesh;
    Logo_Main001_cell036: THREE.Mesh;
    Logo_Main001_cell037: THREE.Mesh;
    Logo_Main001_cell038: THREE.Mesh;
    Logo_Main001_cell039: THREE.Mesh;
    Logo_Main001_cell040: THREE.Mesh;
    Logo_Main001_cell041: THREE.Mesh;
    Logo_Main001_cell042: THREE.Mesh;
    Logo_Main001_cell043: THREE.Mesh;
    Logo_Main001_cell044: THREE.Mesh;
    Logo_Main001_cell045: THREE.Mesh;
    Logo_Main001_cell046: THREE.Mesh;
    Logo_Main001_cell047: THREE.Mesh;
    Logo_Main001_cell048: THREE.Mesh;
    Logo_Main001_cell049: THREE.Mesh;
    Logo_Main001_cell050: THREE.Mesh;
    Logo_Main001_cell051: THREE.Mesh;
    Logo_Main001_cell052: THREE.Mesh;
    Logo_Main001_cell053: THREE.Mesh;
    Logo_Main001_cell054: THREE.Mesh;
    Logo_Main001_cell055: THREE.Mesh;
    Logo_Main001_cell056: THREE.Mesh;
    Logo_Main001_cell057: THREE.Mesh;
    Logo_Main001_cell058: THREE.Mesh;
    Logo_Main001_cell059: THREE.Mesh;
    Logo_Main001_cell060: THREE.Mesh;
    Logo_Main001_cell061: THREE.Mesh;
    Logo_Main001_cell062: THREE.Mesh;
    Logo_Main001_cell063: THREE.Mesh;
    Logo_Main001_cell064: THREE.Mesh;
    Logo_Main001_cell065: THREE.Mesh;
    Logo_Main001_cell067: THREE.Mesh;
    Logo_Main001_cell068: THREE.Mesh;
    Logo_Main001_cell069: THREE.Mesh;
    Logo_Main001_cell070: THREE.Mesh;
    Logo_Main001_cell071: THREE.Mesh;
    Logo_Main001_cell072: THREE.Mesh;
    Logo_Main001_cell073: THREE.Mesh;
    Logo_Main001_cell074: THREE.Mesh;
    Logo_Main001_cell075: THREE.Mesh;
    Logo_Main001_cell076: THREE.Mesh;
    Logo_Main001_cell077: THREE.Mesh;
    Logo_Main001_cell078: THREE.Mesh;
    Logo_Main001_cell079: THREE.Mesh;
    Logo_Main001_cell080: THREE.Mesh;
    Logo_Main001_cell081: THREE.Mesh;
    Logo_Main001_cell082: THREE.Mesh;
    Logo_Main001_cell083: THREE.Mesh;
    Logo_Main001_cell084: THREE.Mesh;
    Logo_Main001_cell085: THREE.Mesh;
    Logo_Main001_cell086: THREE.Mesh;
    Logo_Main001_cell087: THREE.Mesh;
    Logo_Main001_cell088: THREE.Mesh;
    Logo_Main001_cell089: THREE.Mesh;
    Logo_Main001_cell090: THREE.Mesh;
    Logo_Main001_cell091: THREE.Mesh;
    Logo_Main001_cell092: THREE.Mesh;
    Logo_Main001_cell093: THREE.Mesh;
    Logo_Main001_cell094: THREE.Mesh;
    Logo_Main001_cell095: THREE.Mesh;
    Logo_Main001_cell096: THREE.Mesh;
    Logo_Main001_cell097: THREE.Mesh;
    Logo_Main001_cell098: THREE.Mesh;
    Logo_Main001_cell020: THREE.Mesh;
    Logo_Main001_cell066: THREE.Mesh;
    Logo_Main001_cell099: THREE.Mesh;
    Logo_Main001_cell100: THREE.Mesh;
    Logo_Main001_cell101: THREE.Mesh;
    Logo_Main001_cell102: THREE.Mesh;
    Logo_Main001_cell103: THREE.Mesh;
    Logo_Main001_cell104: THREE.Mesh;
    Logo_Main001_cell105: THREE.Mesh;
    Logo_Main001_cell106: THREE.Mesh;
    Logo_Main001_cell107: THREE.Mesh;
    Logo_Main001_cell108: THREE.Mesh;
    Logo_Main001_cell109: THREE.Mesh;
    Logo_Main001_cell110: THREE.Mesh;
    Logo_Main001_cell111: THREE.Mesh;
    Logo_Main001_cell112: THREE.Mesh;
    Logo_Main001_cell113: THREE.Mesh;
    Logo_Main001_cell114: THREE.Mesh;
    Logo_Main001_cell116: THREE.Mesh;
    Logo_Main001_cell117: THREE.Mesh;
    Logo_Main001_cell118: THREE.Mesh;
    Logo_Main001_cell119: THREE.Mesh;
    Logo_Main001_cell120: THREE.Mesh;
    Logo_Main001_cell121: THREE.Mesh;
    Logo_Main001_cell122: THREE.Mesh;
    Logo_Main001_cell123: THREE.Mesh;
    Logo_Main001_cell124: THREE.Mesh;
    Logo_Main001_cell125: THREE.Mesh;
    Logo_Main001_cell126: THREE.Mesh;
    Logo_Main001_cell127: THREE.Mesh;
    Logo_Main001_cell128: THREE.Mesh;
    Logo_Main001_cell129: THREE.Mesh;
    Logo_Main001_cell130: THREE.Mesh;
    Logo_Main001_cell131: THREE.Mesh;
    Logo_Main001_cell132: THREE.Mesh;
    Logo_Main001_cell133: THREE.Mesh;
    Logo_Main001_cell134: THREE.Mesh;
    Logo_Main001_cell135: THREE.Mesh;
    Logo_Main001_cell136: THREE.Mesh;
    Logo_Main001_cell137: THREE.Mesh;
    Logo_Main001_cell138: THREE.Mesh;
    Logo_Main001_cell139: THREE.Mesh;
    Logo_Main001_cell140: THREE.Mesh;
    Logo_Main001_cell141: THREE.Mesh;
    Logo_Main001_cell142: THREE.Mesh;
    Logo_Main001_cell143: THREE.Mesh;
    Logo_Main001_cell144: THREE.Mesh;
    Logo_Main001_cell145: THREE.Mesh;
    Logo_Main001_cell146: THREE.Mesh;
    Logo_Main001_cell147: THREE.Mesh;
    Logo_Main001_cell148: THREE.Mesh;
    Logo_Main001_cell149: THREE.Mesh;
    Logo_Main001_cell150: THREE.Mesh;
    Logo_Main001_cell151: THREE.Mesh;
    Logo_Main001_cell152: THREE.Mesh;
    Logo_Main001_cell153: THREE.Mesh;
    Logo_Main001_cell154: THREE.Mesh;
    Logo_Main001_cell155: THREE.Mesh;
    Logo_Main001_cell156: THREE.Mesh;
    Logo_Main001_cell157: THREE.Mesh;
    Logo_Main001_cell158: THREE.Mesh;
    Logo_Main001_cell159: THREE.Mesh;
    Logo_Main001_cell160: THREE.Mesh;
    Logo_Main001_cell161: THREE.Mesh;
    Logo_Main001_cell162: THREE.Mesh;
    Logo_Main001_cell163: THREE.Mesh;
    Logo_Main001_cell164: THREE.Mesh;
    Logo_Main001_cell165: THREE.Mesh;
    Logo_Main001_cell166: THREE.Mesh;
    Logo_Main001_cell167: THREE.Mesh;
    Logo_Main001_cell168: THREE.Mesh;
    Logo_Main001_cell169: THREE.Mesh;
    Logo_Main001_cell170: THREE.Mesh;
    Logo_Main001_cell171: THREE.Mesh;
    Logo_Main001_cell172: THREE.Mesh;
    Logo_Main001_cell173: THREE.Mesh;
    Logo_Main001_cell174: THREE.Mesh;
    Logo_Main001_cell175: THREE.Mesh;
    Logo_Main001_cell176: THREE.Mesh;
    Logo_Main001_cell177: THREE.Mesh;
    Logo_Main001_cell178: THREE.Mesh;
    Logo_Main001_cell179: THREE.Mesh;
    Logo_Main001_cell180: THREE.Mesh;
    Logo_Main001_cell181: THREE.Mesh;
    Logo_Main001_cell182: THREE.Mesh;
  };
  materials: {
    ['Frosted Glass 01']: THREE.MeshStandardMaterial;
  };
};

type ActionName =
  | 'Layer_001Action.001'
  | 'Logo Main.001_cellAction.001'
  | 'Logo Main.001_cell.001Action'
  | 'Logo Main.001_cell.002Action'
  | 'Logo Main.001_cell.003Action'
  | 'Logo Main.001_cell.004Action'
  | 'Logo Main.001_cell.005Action'
  | 'Logo Main.001_cell.006Action'
  | 'Logo Main.001_cell.007Action'
  | 'Logo Main.001_cell.008Action'
  | 'Logo Main.001_cell.009Action'
  | 'Logo Main.001_cell.010Action'
  | 'Logo Main.001_cell.011Action'
  | 'Logo Main.001_cell.012Action'
  | 'Logo Main.001_cell.013Action'
  | 'Logo Main.001_cell.014Action'
  | 'Logo Main.001_cell.015Action'
  | 'Logo Main.001_cell.016Action'
  | 'Logo Main.001_cell.017Action'
  | 'Logo Main.001_cell.018Action'
  | 'Logo Main.001_cell.019Action'
  | 'Logo Main.001_cell.021Action'
  | 'Logo Main.001_cell.022Action'
  | 'Logo Main.001_cell.023Action'
  | 'Logo Main.001_cell.024Action'
  | 'Logo Main.001_cell.025Action'
  | 'Logo Main.001_cell.026Action'
  | 'Logo Main.001_cell.027Action'
  | 'Logo Main.001_cell.028Action'
  | 'Logo Main.001_cell.029Action'
  | 'Logo Main.001_cell.030Action'
  | 'Logo Main.001_cell.031Action'
  | 'Logo Main.001_cell.032Action'
  | 'Logo Main.001_cell.033Action'
  | 'Logo Main.001_cell.034Action'
  | 'Logo Main.001_cell.035Action'
  | 'Logo Main.001_cell.036Action'
  | 'Logo Main.001_cell.037Action'
  | 'Logo Main.001_cell.038Action'
  | 'Logo Main.001_cell.039Action'
  | 'Logo Main.001_cell.040Action'
  | 'Logo Main.001_cell.041Action'
  | 'Logo Main.001_cell.042Action'
  | 'Logo Main.001_cell.043Action'
  | 'Logo Main.001_cell.044Action'
  | 'Logo Main.001_cell.045Action'
  | 'Logo Main.001_cell.046Action'
  | 'Logo Main.001_cell.047Action'
  | 'Logo Main.001_cell.048Action'
  | 'Logo Main.001_cell.049Action'
  | 'Logo Main.001_cell.050Action'
  | 'Logo Main.001_cell.051Action'
  | 'Logo Main.001_cell.052Action'
  | 'Logo Main.001_cell.053Action'
  | 'Logo Main.001_cell.054Action'
  | 'Logo Main.001_cell.055Action'
  | 'Logo Main.001_cell.056Action'
  | 'Logo Main.001_cell.057Action'
  | 'Logo Main.001_cell.058Action'
  | 'Logo Main.001_cell.059Action'
  | 'Logo Main.001_cell.060Action'
  | 'Logo Main.001_cell.061Action'
  | 'Logo Main.001_cell.062Action'
  | 'Logo Main.001_cell.063Action'
  | 'Logo Main.001_cell.064Action'
  | 'Logo Main.001_cell.065Action'
  | 'Logo Main.001_cell.067Action'
  | 'Logo Main.001_cell.068Action'
  | 'Logo Main.001_cell.069Action'
  | 'Logo Main.001_cell.070Action'
  | 'Logo Main.001_cell.071Action'
  | 'Logo Main.001_cell.072Action'
  | 'Logo Main.001_cell.073Action'
  | 'Logo Main.001_cell.074Action'
  | 'Logo Main.001_cell.075Action'
  | 'Logo Main.001_cell.076Action'
  | 'Logo Main.001_cell.077Action'
  | 'Logo Main.001_cell.078Action'
  | 'Logo Main.001_cell.079Action'
  | 'Logo Main.001_cell.080Action'
  | 'Logo Main.001_cell.081Action'
  | 'Logo Main.001_cell.082Action'
  | 'Logo Main.001_cell.083Action'
  | 'Logo Main.001_cell.084Action'
  | 'Logo Main.001_cell.085Action'
  | 'Logo Main.001_cell.086Action'
  | 'Logo Main.001_cell.087Action'
  | 'Logo Main.001_cell.088Action'
  | 'Logo Main.001_cell.089Action'
  | 'Logo Main.001_cell.090Action'
  | 'Logo Main.001_cell.091Action'
  | 'Logo Main.001_cell.092Action'
  | 'Logo Main.001_cell.093Action'
  | 'Logo Main.001_cell.094Action'
  | 'Logo Main.001_cell.095Action'
  | 'Logo Main.001_cell.096Action'
  | 'Logo Main.001_cell.097Action'
  | 'Logo Main.001_cell.098Action'
  | 'Logo Main.001_cell.020Action'
  | 'Logo Main.001_cell.066Action'
  | 'Logo Main.001_cell.099Action'
  | 'Logo Main.001_cell.100Action'
  | 'Logo Main.001_cell.101Action'
  | 'Logo Main.001_cell.102Action'
  | 'Logo Main.001_cell.103Action'
  | 'Logo Main.001_cell.104Action'
  | 'Logo Main.001_cell.105Action'
  | 'Logo Main.001_cell.106Action'
  | 'Logo Main.001_cell.107Action'
  | 'Logo Main.001_cell.108Action'
  | 'Logo Main.001_cell.109Action'
  | 'Logo Main.001_cell.110Action'
  | 'Logo Main.001_cell.111Action'
  | 'Logo Main.001_cell.112Action'
  | 'Logo Main.001_cell.113Action'
  | 'Logo Main.001_cell.114Action'
  | 'Logo Main.001_cell.115Action'
  | 'Logo Main.001_cell.116Action'
  | 'Logo Main.001_cell.117Action'
  | 'Logo Main.001_cell.118Action'
  | 'Logo Main.001_cell.119Action'
  | 'Logo Main.001_cell.120Action'
  | 'Logo Main.001_cell.121Action'
  | 'Logo Main.001_cell.122Action'
  | 'Logo Main.001_cell.123Action'
  | 'Logo Main.001_cell.124Action'
  | 'Logo Main.001_cell.125Action'
  | 'Logo Main.001_cell.126Action'
  | 'Logo Main.001_cell.127Action'
  | 'Logo Main.001_cell.128Action'
  | 'Logo Main.001_cell.129Action'
  | 'Logo Main.001_cell.130Action'
  | 'Logo Main.001_cell.131Action'
  | 'Logo Main.001_cell.132Action'
  | 'Logo Main.001_cell.133Action'
  | 'Logo Main.001_cell.134Action'
  | 'Logo Main.001_cell.135Action'
  | 'Logo Main.001_cell.136Action'
  | 'Logo Main.001_cell.137Action'
  | 'Logo Main.001_cell.138Action'
  | 'Logo Main.001_cell.139Action'
  | 'Logo Main.001_cell.140Action'
  | 'Logo Main.001_cell.141Action'
  | 'Logo Main.001_cell.142Action'
  | 'Logo Main.001_cell.143Action'
  | 'Logo Main.001_cell.144Action'
  | 'Logo Main.001_cell.145Action'
  | 'Logo Main.001_cell.146Action'
  | 'Logo Main.001_cell.147Action'
  | 'Logo Main.001_cell.148Action'
  | 'Logo Main.001_cell.149Action'
  | 'Logo Main.001_cell.150Action'
  | 'Logo Main.001_cell.151Action'
  | 'Logo Main.001_cell.152Action'
  | 'Logo Main.001_cell.153Action'
  | 'Logo Main.001_cell.154Action'
  | 'Logo Main.001_cell.155Action'
  | 'Logo Main.001_cell.156Action'
  | 'Logo Main.001_cell.157Action'
  | 'Logo Main.001_cell.158Action'
  | 'Logo Main.001_cell.159Action'
  | 'Logo Main.001_cell.160Action'
  | 'Logo Main.001_cell.161Action'
  | 'Logo Main.001_cell.162Action'
  | 'Logo Main.001_cell.163Action'
  | 'Logo Main.001_cell.164Action'
  | 'Logo Main.001_cell.165Action'
  | 'Logo Main.001_cell.166Action'
  | 'Logo Main.001_cell.167Action'
  | 'Logo Main.001_cell.168Action'
  | 'Logo Main.001_cell.169Action'
  | 'Logo Main.001_cell.170Action'
  | 'Logo Main.001_cell.171Action'
  | 'Logo Main.001_cell.172Action'
  | 'Logo Main.001_cell.173Action'
  | 'Logo Main.001_cell.174Action'
  | 'Logo Main.001_cell.175Action'
  | 'Logo Main.001_cell.176Action'
  | 'Logo Main.001_cell.177Action'
  | 'Logo Main.001_cell.178Action'
  | 'Logo Main.001_cell.179Action'
  | 'Logo Main.001_cell.180Action'
  | 'Logo Main.001_cell.181Action'
  | 'Logo Main.001_cell.182Action';
type GLTFActions = Record<ActionName, THREE.AnimationClip>;

export default function AeriusLogoModel() {
  const group = useRef<THREE.Group | any>();
  const { nodes, materials, animations } = useGLTF(
    '/models/logobreak.glb'
  ) as GLTFResult;
  const { actions } = useAnimations<GLTFActions | any>(animations, group);
  return (
    <group ref={group} dispose={null}>
      <group name='Scene'>
        <mesh
          name='Logo_Main'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main.geometry}
          material={materials['Frosted Glass 01']}
          position={[0, -4.5, 0]}
          rotation={[0, -0.611, 0]}
        />
        <mesh
          name='Logo_Main001_cell'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.397, 0.771, -0.029]}
        />
        <mesh
          name='Logo_Main001_cell001'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell001.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.021, 1.036, 0.065]}
        />
        <mesh
          name='Logo_Main001_cell002'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell002.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.076, 0.616, 0.117]}
        />
        <mesh
          name='Logo_Main001_cell003'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell003.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.031, 1.086, 0.208]}
        />
        <mesh
          name='Logo_Main001_cell004'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell004.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.018, 1.131, -0.017]}
        />
        <mesh
          name='Logo_Main001_cell005'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell005.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.008, 1.113, -0.067]}
        />
        <mesh
          name='Logo_Main001_cell006'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell006.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.193, 0.967, -0.034]}
        />
        <mesh
          name='Logo_Main001_cell007'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell007.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.029, 1.074, 0.076]}
        />
        <mesh
          name='Logo_Main001_cell008'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell008.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.912, -0.131, -0.134]}
        />
        <mesh
          name='Logo_Main001_cell009'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell009.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.119, 1.028, 0.138]}
        />
        <mesh
          name='Logo_Main001_cell010'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell010.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.111, 1.037, 0.13]}
        />
        <mesh
          name='Logo_Main001_cell011'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell011.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.591, 0.56, 0.191]}
        />
        <mesh
          name='Logo_Main001_cell012'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell012.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.67, 0.022, -0.111]}
        />
        <mesh
          name='Logo_Main001_cell013'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell013.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.094, -0.431, 0.036]}
        />
        <mesh
          name='Logo_Main001_cell014'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell014.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.197, 0.93, -0.154]}
        />
        <mesh
          name='Logo_Main001_cell015'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell015.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.155, 0.3, -0.153]}
        />
        <mesh
          name='Logo_Main001_cell016'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell016.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.184, 1.011, 0.186]}
        />
        <mesh
          name='Logo_Main001_cell017'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell017.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.096, 0.437, 0.173]}
        />
        <mesh
          name='Logo_Main001_cell018'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell018.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.329, 0.782, -0.234]}
        />
        <mesh
          name='Logo_Main001_cell019'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell019.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.325, 0.578, 0.078]}
        />
        <mesh
          name='Logo_Main001_cell021'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell021.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.058, 1.054, 0.087]}
        />
        <mesh
          name='Logo_Main001_cell022'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell022.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.061, 0.843, 0.206]}
        />
        <mesh
          name='Logo_Main001_cell023'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell023.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.317, -0.49, -0.02]}
        />
        <mesh
          name='Logo_Main001_cell024'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell024.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.142, 0.784, 0.182]}
        />
        <mesh
          name='Logo_Main001_cell025'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell025.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.009, 1.14, 0]}
        />
        <mesh
          name='Logo_Main001_cell026'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell026.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.177, 0.97, 0.176]}
        />
        <mesh
          name='Logo_Main001_cell027'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell027.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.125, -0.263, 0.115]}
        />
        <mesh
          name='Logo_Main001_cell028'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell028.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.085, 1.053, 0.093]}
        />
        <mesh
          name='Logo_Main001_cell029'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell029.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.231, 0.914, -0.108]}
        />
        <mesh
          name='Logo_Main001_cell030'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell030.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.648, 0.351, -0.093]}
        />
        <mesh
          name='Logo_Main001_cell031'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell031.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.03, 1.089, -0.016]}
        />
        <mesh
          name='Logo_Main001_cell032'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell032.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.283, 0.519, 0.041]}
        />
        <mesh
          name='Logo_Main001_cell033'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell033.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.14, 0.417, 0.14]}
        />
        <mesh
          name='Logo_Main001_cell034'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell034.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.159, 0.935, -0.153]}
        />
        <mesh
          name='Logo_Main001_cell035'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell035.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.118, -0.186, -0.16]}
        />
        <mesh
          name='Logo_Main001_cell036'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell036.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.344, 0.558, 0.147]}
        />
        <mesh
          name='Logo_Main001_cell037'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell037.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.076, -0.371, 0.102]}
        />
        <mesh
          name='Logo_Main001_cell038'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell038.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.045, 1.055, 0.012]}
        />
        <mesh
          name='Logo_Main001_cell039'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell039.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.824, -0.102, -0.102]}
        />
        <mesh
          name='Logo_Main001_cell040'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell040.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.043, 1.129, -0.109]}
        />
        <mesh
          name='Logo_Main001_cell041'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell041.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.479, 0.66, -0.122]}
        />
        <mesh
          name='Logo_Main001_cell042'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell042.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.283, -0.55, -0.088]}
        />
        <mesh
          name='Logo_Main001_cell043'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell043.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.016, 1.107, 0.014]}
        />
        <mesh
          name='Logo_Main001_cell044'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell044.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.088, 0.961, 0.213]}
        />
        <mesh
          name='Logo_Main001_cell045'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell045.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.55, 0.396, -0.057]}
        />
        <mesh
          name='Logo_Main001_cell046'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell046.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.533, -0.335, 0.223]}
        />
        <mesh
          name='Logo_Main001_cell047'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell047.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.633, -0.184, -0.084]}
        />
        <mesh
          name='Logo_Main001_cell048'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell048.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.617, 0.747, 0.078]}
        />
        <mesh
          name='Logo_Main001_cell049'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell049.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.113, 0.766, -0.023]}
        />
        <mesh
          name='Logo_Main001_cell050'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell050.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.218, 0.902, -0.159]}
        />
        <mesh
          name='Logo_Main001_cell051'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell051.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.102, 1.05, 0.068]}
        />
        <mesh
          name='Logo_Main001_cell052'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell052.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.455, -0.046, 0.22]}
        />
        <mesh
          name='Logo_Main001_cell053'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell053.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.057, 0.947, -0.208]}
        />
        <mesh
          name='Logo_Main001_cell054'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell054.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.406, 0.526, 0.047]}
        />
        <mesh
          name='Logo_Main001_cell055'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell055.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.12, 1.009, -0.136]}
        />
        <mesh
          name='Logo_Main001_cell056'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell056.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.097, 1.034, 0.114]}
        />
        <mesh
          name='Logo_Main001_cell057'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell057.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.814, 0.257, -0.131]}
        />
        <mesh
          name='Logo_Main001_cell058'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell058.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.018, 0.999, 0.175]}
        />
        <mesh
          name='Logo_Main001_cell059'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell059.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.488, 0.472, -0.03]}
        />
        <mesh
          name='Logo_Main001_cell060'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell060.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.371, 0.907, 0.089]}
        />
        <mesh
          name='Logo_Main001_cell061'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell061.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.076, -0.666, 0.111]}
        />
        <mesh
          name='Logo_Main001_cell062'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell062.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.016, 1.117, 0.178]}
        />
        <mesh
          name='Logo_Main001_cell063'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell063.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.01, 0.833, 0.216]}
        />
        <mesh
          name='Logo_Main001_cell064'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell064.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.033, 1.117, 0.076]}
        />
        <mesh
          name='Logo_Main001_cell065'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell065.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.079, -0.512, 0]}
        />
        <mesh
          name='Logo_Main001_cell067'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell067.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.042, 1.008, -0.085]}
        />
        <mesh
          name='Logo_Main001_cell068'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell068.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.2, 0.96, -0.007]}
        />
        <mesh
          name='Logo_Main001_cell069'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell069.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.654, 0.28, 0.235]}
        />
        <mesh
          name='Logo_Main001_cell070'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell070.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.08, 0.541, 0.209]}
        />
        <mesh
          name='Logo_Main001_cell071'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell071.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.082, 0.331, 0.195]}
        />
        <mesh
          name='Logo_Main001_cell072'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell072.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.167, 0.523, 0.164]}
        />
        <mesh
          name='Logo_Main001_cell073'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell073.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.665, 0.078, 0.266]}
        />
        <mesh
          name='Logo_Main001_cell074'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell074.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.036, 1.054, 0.077]}
        />
        <mesh
          name='Logo_Main001_cell075'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell075.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.248, 0.786, 0.14]}
        />
        <mesh
          name='Logo_Main001_cell076'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell076.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.005, 0.936, 0.196]}
        />
        <mesh
          name='Logo_Main001_cell077'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell077.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.186, 0.711, -0.082]}
        />
        <mesh
          name='Logo_Main001_cell078'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell078.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.007, 1.13, -0.041]}
        />
        <mesh
          name='Logo_Main001_cell079'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell079.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.085, 1.001, -0.069]}
        />
        <mesh
          name='Logo_Main001_cell080'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell080.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.189, 0.865, 0.221]}
        />
        <mesh
          name='Logo_Main001_cell081'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell081.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.065, 1.001, -0.083]}
        />
        <mesh
          name='Logo_Main001_cell082'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell082.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.081, 1.067, -0.14]}
        />
        <mesh
          name='Logo_Main001_cell083'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell083.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.006, 0.213, 0.034]}
        />
        <mesh
          name='Logo_Main001_cell084'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell084.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.049, 0.391, 0.15]}
        />
        <mesh
          name='Logo_Main001_cell085'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell085.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.272, 0.853, -0.093]}
        />
        <mesh
          name='Logo_Main001_cell086'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell086.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.045, 1.092, -0.165]}
        />
        <mesh
          name='Logo_Main001_cell087'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell087.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.019, -0.647, -0.195]}
        />
        <mesh
          name='Logo_Main001_cell088'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell088.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.036, 0.854, 0.01]}
        />
        <mesh
          name='Logo_Main001_cell089'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell089.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.217, 0.942, 0.009]}
        />
        <mesh
          name='Logo_Main001_cell090'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell090.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.247, 0.613, 0.166]}
        />
        <mesh
          name='Logo_Main001_cell091'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell091.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.332, 0.824, -0.029]}
        />
        <mesh
          name='Logo_Main001_cell092'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell092.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.438, 0.12, 0.171]}
        />
        <mesh
          name='Logo_Main001_cell093'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell093.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.559, 0.395, 0.095]}
        />
        <mesh
          name='Logo_Main001_cell094'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell094.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.243, 0.89, -0.116]}
        />
        <mesh
          name='Logo_Main001_cell095'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell095.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.127, -0.407, -0.225]}
        />
        <mesh
          name='Logo_Main001_cell096'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell096.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.036, 1.105, 0.035]}
        />
        <mesh
          name='Logo_Main001_cell097'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell097.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.053, 1.078, -0.066]}
        />
        <mesh
          name='Logo_Main001_cell098'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell098.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.089, 0.147, 0.178]}
        />
        <mesh
          name='Logo_Main001_cell020'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell020.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.336, 0.582, -0.154]}
        />
        <mesh
          name='Logo_Main001_cell066'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell066.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.012, 1.097, 0.079]}
        />
        <mesh
          name='Logo_Main001_cell099'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell099.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.05, 0.623, 0.145]}
        />
        <mesh
          name='Logo_Main001_cell100'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell100.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.027, 1.112, -0.113]}
        />
        <mesh
          name='Logo_Main001_cell101'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell101.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.019, 0.992, 0.065]}
        />
        <mesh
          name='Logo_Main001_cell102'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell102.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.895, -0.208, -0.104]}
        />
        <mesh
          name='Logo_Main001_cell103'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell103.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.544, -0.046, 0.031]}
        />
        <mesh
          name='Logo_Main001_cell104'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell104.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.547, 0.098, 0.004]}
        />
        <mesh
          name='Logo_Main001_cell105'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell105.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.121, -0.451, 0.12]}
        />
        <mesh
          name='Logo_Main001_cell106'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell106.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.066, 0.455, -0.196]}
        />
        <mesh
          name='Logo_Main001_cell107'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell107.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.11, 0.441, -0.172]}
        />
        <mesh
          name='Logo_Main001_cell108'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell108.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.116, 0.342, -0.207]}
        />
        <mesh
          name='Logo_Main001_cell109'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell109.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.156, 0.412, 0.155]}
        />
        <mesh
          name='Logo_Main001_cell110'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell110.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.291, 0.592, -0.252]}
        />
        <mesh
          name='Logo_Main001_cell111'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell111.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.391, 0.538, -0.272]}
        />
        <mesh
          name='Logo_Main001_cell112'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell112.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.379, 0.664, 0.086]}
        />
        <mesh
          name='Logo_Main001_cell113'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell113.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.32, 0.49, 0.132]}
        />
        <mesh
          name='Logo_Main001_cell114'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell114.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.052, 0.777, 0.214]}
        />
        <group name='Logo_Main001_cell115' position={[-0.024, 0.775, 0.221]} />
        <mesh
          name='Logo_Main001_cell116'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell116.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.391, -0.451, -0.045]}
        />
        <mesh
          name='Logo_Main001_cell117'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell117.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.143, 0.718, 0.192]}
        />
        <mesh
          name='Logo_Main001_cell118'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell118.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.015, 1.125, -0.017]}
        />
        <mesh
          name='Logo_Main001_cell119'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell119.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.039, -0.321, 0.077]}
        />
        <mesh
          name='Logo_Main001_cell120'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell120.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.056, -0.252, 0.139]}
        />
        <mesh
          name='Logo_Main001_cell121'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell121.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.025, -0.324, 0.097]}
        />
        <mesh
          name='Logo_Main001_cell122'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell122.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.331, 0.432, 0.076]}
        />
        <mesh
          name='Logo_Main001_cell123'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell123.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.406, 0.365, 0.042]}
        />
        <mesh
          name='Logo_Main001_cell124'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell124.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.206, 0.335, 0.16]}
        />
        <mesh
          name='Logo_Main001_cell125'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell125.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.003, -0.342, -0.202]}
        />
        <mesh
          name='Logo_Main001_cell126'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell126.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.075, -0.348, -0.193]}
        />
        <mesh
          name='Logo_Main001_cell127'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell127.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.038, -0.275, -0.205]}
        />
        <mesh
          name='Logo_Main001_cell128'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell128.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.438, 0.619, 0.213]}
        />
        <mesh
          name='Logo_Main001_cell129'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell129.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.48, 0.579, 0.176]}
        />
        <mesh
          name='Logo_Main001_cell130'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell130.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.373, 0.52, 0.07]}
        />
        <mesh
          name='Logo_Main001_cell131'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell131.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.073, -0.394, 0.109]}
        />
        <mesh
          name='Logo_Main001_cell132'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell132.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.184, -0.344, 0.102]}
        />
        <mesh
          name='Logo_Main001_cell133'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell133.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.212, -0.396, 0.169]}
        />
        <mesh
          name='Logo_Main001_cell134'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell134.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.741, -0.231, -0.108]}
        />
        <mesh
          name='Logo_Main001_cell135'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell135.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.385, 0.557, -0.142]}
        />
        <mesh
          name='Logo_Main001_cell136'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell136.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.458, 0.555, -0.141]}
        />
        <mesh
          name='Logo_Main001_cell137'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell137.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.406, 0.53, -0.158]}
        />
        <mesh
          name='Logo_Main001_cell138'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell138.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.013, 1.039, 0.03]}
        />
        <mesh
          name='Logo_Main001_cell139'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell139.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.332, -0.389, 0.18]}
        />
        <mesh
          name='Logo_Main001_cell140'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell140.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.324, -0.506, 0.213]}
        />
        <mesh
          name='Logo_Main001_cell141'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell141.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.399, -0.102, -0.142]}
        />
        <mesh
          name='Logo_Main001_cell142'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell142.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.661, 0.659, 0.007]}
        />
        <mesh
          name='Logo_Main001_cell143'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell143.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.114, 0.766, -0.013]}
        />
        <mesh
          name='Logo_Main001_cell144'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell144.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.033, 0.756, -0.019]}
        />
        <mesh
          name='Logo_Main001_cell145'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell145.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.038, 0.761, -0.004]}
        />
        <mesh
          name='Logo_Main001_cell146'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell146.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.321, -0.089, 0.168]}
        />
        <mesh
          name='Logo_Main001_cell147'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell147.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.037, 0.946, -0.21]}
        />
        <mesh
          name='Logo_Main001_cell148'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell148.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.01, 0.764, -0.223]}
        />
        <mesh
          name='Logo_Main001_cell149'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell149.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.05, 0.784, -0.214]}
        />
        <mesh
          name='Logo_Main001_cell150'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell150.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.379, 0.561, -0.015]}
        />
        <mesh
          name='Logo_Main001_cell151'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell151.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.4, 0.59, -0.043]}
        />
        <mesh
          name='Logo_Main001_cell152'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell152.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.872, 0.162, -0.122]}
        />
        <mesh
          name='Logo_Main001_cell153'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell153.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.061, 0.993, 0.175]}
        />
        <mesh
          name='Logo_Main001_cell154'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell154.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.023, -0.672, 0.165]}
        />
        <mesh
          name='Logo_Main001_cell155'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell155.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.075, 1.099, 0.183]}
        />
        <mesh
          name='Logo_Main001_cell156'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell156.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.007, 0.77, 0.225]}
        />
        <mesh
          name='Logo_Main001_cell157'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell157.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.004, 1.132, 0.065]}
        />
        <mesh
          name='Logo_Main001_cell158'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell158.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.125, -0.538, 0.188]}
        />
        <mesh
          name='Logo_Main001_cell159'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell159.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.298, 0.477, 0.112]}
        />
        <mesh
          name='Logo_Main001_cell160'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell160.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.212, 0.681, 0.161]}
        />
        <mesh
          name='Logo_Main001_cell161'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell161.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.051, 0.933, 0.191]}
        />
        <mesh
          name='Logo_Main001_cell162'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell162.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.175, 0.713, 0.031]}
        />
        <mesh
          name='Logo_Main001_cell163'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell163.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.072, 0.68, -0.095]}
        />
        <mesh
          name='Logo_Main001_cell164'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell164.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.107, 0.674, -0.055]}
        />
        <mesh
          name='Logo_Main001_cell165'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell165.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.218, 0.49, -0.136]}
        />
        <mesh
          name='Logo_Main001_cell166'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell166.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.295, 0.331, -0.113]}
        />
        <mesh
          name='Logo_Main001_cell167'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell167.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.001, 0.388, 0.157]}
        />
        <mesh
          name='Logo_Main001_cell168'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell168.geometry}
          material={materials['Frosted Glass 01']}
          position={[0, 0.308, 0.156]}
        />
        <mesh
          name='Logo_Main001_cell169'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell169.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.073, 0.325, 0.157]}
        />
        <mesh
          name='Logo_Main001_cell170'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell170.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.223, 0.677, -0.188]}
        />
        <mesh
          name='Logo_Main001_cell171'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell171.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.007, 1.097, -0.136]}
        />
        <mesh
          name='Logo_Main001_cell172'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell172.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.192, -0.569, -0.138]}
        />
        <mesh
          name='Logo_Main001_cell173'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell173.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.357, -0.436, -0.117]}
        />
        <mesh
          name='Logo_Main001_cell174'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell174.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.447, -0.459, -0.11]}
        />
        <mesh
          name='Logo_Main001_cell175'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell175.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.043, 0.851, 0.009]}
        />
        <mesh
          name='Logo_Main001_cell176'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell176.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.019, 0.795, -0.044]}
        />
        <mesh
          name='Logo_Main001_cell177'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell177.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.297, 0.686, 0.201]}
        />
        <mesh
          name='Logo_Main001_cell178'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell178.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.273, 0.631, -0.156]}
        />
        <mesh
          name='Logo_Main001_cell179'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell179.geometry}
          material={materials['Frosted Glass 01']}
          position={[0.348, 0.104, 0.123]}
        />
        <mesh
          name='Logo_Main001_cell180'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell180.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.381, -0.188, -0.235]}
        />
        <mesh
          name='Logo_Main001_cell181'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell181.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.548, 0.022, -0.285]}
        />
        <mesh
          name='Logo_Main001_cell182'
          castShadow
          receiveShadow
          geometry={nodes.Logo_Main001_cell182.geometry}
          material={materials['Frosted Glass 01']}
          position={[-0.475, 0.076, -0.25]}
        />
        <PerspectiveCamera
          name='Camera'
          makeDefault={true}
          far={1000}
          near={0.1}
          fov={32.269}
          position={[-0.078, 0.935, 11.351]}
        />
        <group
          name='Area'
          position={[19.732, 18.518, -14.928]}
          rotation={[-2.213, 0.666, 0.245]}
          scale={11.778}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/logobreak.glb');
