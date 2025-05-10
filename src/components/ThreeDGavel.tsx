
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Gavel 3D model
const Gavel = () => {
  const headRef = useRef<THREE.Mesh>(null!);
  const handleRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (headRef.current && handleRef.current) {
      headRef.current.rotation.y += 0.004;
      handleRef.current.rotation.y += 0.004;
    }
  });

  return (
    <group position={[0, 0, 0]} rotation={[0.2, 0, 0]}>
      {/* Gavel head */}
      <mesh ref={headRef} position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 1.2, 12]} />
        <meshStandardMaterial color="#6f4e37" roughness={0.7} metalness={0.1} />
      </mesh>
      
      {/* Gavel handle */}
      <mesh ref={handleRef} position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 2.5, 12]} />
        <meshStandardMaterial color="#3a2a1d" roughness={0.8} />
      </mesh>
    </group>
  );
};

// Legal text block component representing Indian legal texts
const LegalText = () => {
  const textRef = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.004;
    }
  });

  return (
    <mesh ref={textRef} position={[-2, -0.5, 0]}>
      <boxGeometry args={[1.5, 2, 0.4]} />
      <meshStandardMaterial color="#d4af37" roughness={0.6} metalness={0.4} />
    </mesh>
  );
};

const ThreeDGavel: React.FC = () => {
  return (
    <div className="h-64 md:h-80 lg:h-96 w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Gavel />
        <LegalText />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default ThreeDGavel;
