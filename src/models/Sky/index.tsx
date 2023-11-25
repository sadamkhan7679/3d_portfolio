import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// @ts-ignore
import skyScene from "../../assets/3d/sky.glb";

interface SkyProps {
  isRotating: boolean;
}

const Sky: React.FC<SkyProps> = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef<THREE.Mesh | null>(null);

  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // It ensures smooth animations by making the rotation frame rate-independent.
  // 'delta' represents the time in seconds since the last frame.
  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={skyRef}>
      {/* // use the primitive element when you want to directly embed a complex 3D
      model or scene */}
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
