import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { PerspectiveCamera } from 'three';

interface AdjustCameraProps {
  mobileFov: number;
  desktopFov: number;
  aspectRatio: number;
}

export default function AdjustCamera({
  mobileFov,
  desktopFov,
  aspectRatio,
}: AdjustCameraProps) {
  const { camera } = useThree();

  useEffect(() => {
    const handleModelResize = () => {
      if (camera instanceof PerspectiveCamera) {
        const aspect = window.innerWidth / window.innerHeight;
        camera.aspect = aspect;
        camera.fov = aspect > aspectRatio ? desktopFov : mobileFov; // Adjust FOV based on aspect ratio
        camera.updateProjectionMatrix();
      }
    };

    handleModelResize(); // Initial call
    window.addEventListener('resize', handleModelResize);

    return () => {
      window.removeEventListener('resize', handleModelResize);
    };
  }, [camera, mobileFov, desktopFov, aspectRatio]);

  return null;
}
