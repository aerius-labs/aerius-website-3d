'use client';
import { useThree, useFrame } from '@react-three/fiber';
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
    const handleResize = () => {
      if (camera instanceof PerspectiveCamera) {
        const aspect = window.innerWidth / window.innerHeight;
        camera.aspect = aspect;
        camera.fov = aspect > aspectRatio ? desktopFov : mobileFov; // Adjust FOV based on aspect ratio
        camera.updateProjectionMatrix();
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [camera]);

  useFrame(() => {
    if (camera instanceof PerspectiveCamera) {
      // Ensure the camera updates every frame if needed
      camera.updateProjectionMatrix();
    }
  });

  return null;
}
