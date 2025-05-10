
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Text, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Gavel 3D model
const Gavel = () => {
  const headRef = useRef<THREE.Mesh>(null!);
  const handleRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (headRef.current && handleRef.current) {
      headRef.current.rotation.y = Math.sin(t / 4) * 0.3;
      handleRef.current.rotation.y = Math.sin(t / 4) * 0.3;
    }
  });

  return (
    <group position={[0, 0, 0]} rotation={[0.2, 0, 0]}>
      {/* Gavel head */}
      <mesh ref={headRef} position={[0, 0.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.6, 0.6, 1.2, 16]} />
        <meshStandardMaterial color="#6f4e37" roughness={0.7} metalness={0.1} />
      </mesh>
      
      {/* Gavel handle */}
      <mesh ref={handleRef} position={[0, -1.2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.25, 0.25, 2.5, 16]} />
        <meshStandardMaterial color="#3a2a1d" roughness={0.8} />
      </mesh>
    </group>
  );
};

// Legal text block component representing Indian legal texts
const LegalText = () => {
  const textRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(t / 5) * 0.2;
      if (hovered) {
        textRef.current.scale.setScalar(1 + Math.sin(t * 10) * 0.01);
      }
    }
  });

  return (
    <group position={[-2, -0.5, 0]}>
      <mesh 
        ref={textRef} 
        castShadow 
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1.5, 2, 0.4]} />
        <meshStandardMaterial 
          color="#d4af37" 
          roughness={0.6} 
          metalness={0.4} 
          emissive={hovered ? "#fff5b5" : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>
      <Text
        position={[0, 0, 0.21]}
        rotation={[0, 0, 0]}
        fontSize={0.2}
        color="#3a2a1d"
        font="/fonts/PlayfairDisplay-Bold.ttf"
        anchorX="center"
        anchorY="middle"
      >
        Constitution
      </Text>
    </group>
  );
};

// Scales of Justice
const ScalesOfJustice = () => {
  const baseRef = useRef<THREE.Mesh>(null!);
  const leftScaleRef = useRef<THREE.Mesh>(null!);
  const rightScaleRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (baseRef.current) {
      baseRef.current.rotation.y = Math.sin(t / 6) * 0.2;
    }
    if (leftScaleRef.current && rightScaleRef.current) {
      // Simulate scales balancing
      leftScaleRef.current.rotation.z = Math.sin(t) * 0.1;
      rightScaleRef.current.rotation.z = -Math.sin(t) * 0.1;
    }
  });

  return (
    <group position={[2, -0.5, 0]} rotation={[0.1, 0, 0]}>
      {/* Base */}
      <mesh ref={baseRef} position={[0, -1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.1, 0.3, 2, 8]} />
        <meshStandardMaterial color="#d4af37" roughness={0.4} metalness={0.6} />
      </mesh>
      
      {/* Crossbar */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 0.1, 0.1]} />
        <meshStandardMaterial color="#d4af37" roughness={0.4} metalness={0.6} />
      </mesh>
      
      {/* Left scale */}
      <group position={[-1.2, 0, 0]}>
        <mesh ref={leftScaleRef} position={[0, -0.3, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.5, 0.5, 0.05, 32]} />
          <meshStandardMaterial color="#d4af37" roughness={0.4} metalness={0.6} />
        </mesh>
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.6, 8]} />
          <meshStandardMaterial color="#d4af37" roughness={0.4} metalness={0.6} />
        </mesh>
      </group>
      
      {/* Right scale */}
      <group position={[1.2, 0, 0]}>
        <mesh ref={rightScaleRef} position={[0, -0.3, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.5, 0.5, 0.05, 32]} />
          <meshStandardMaterial color="#d4af37" roughness={0.4} metalness={0.6} />
        </mesh>
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.6, 8]} />
          <meshStandardMaterial color="#d4af37" roughness={0.4} metalness={0.6} />
        </mesh>
      </group>
    </group>
  );
};

// Ashoka Pillar
const AshokaPillar = () => {
  const pillarRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pillarRef.current) {
      pillarRef.current.rotation.y = Math.sin(t / 7) * 0.3;
    }
  });

  return (
    <group position={[0, -3, -2]} scale={[0.7, 0.7, 0.7]}>
      <mesh ref={pillarRef} castShadow receiveShadow>
        <cylinderGeometry args={[0.4, 0.5, 3, 16]} />
        <meshStandardMaterial color="#e6d2b5" roughness={0.7} metalness={0.2} />
      </mesh>
      
      {/* Lions on top (simplified) */}
      <group position={[0, 1.7, 0]}>
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color="#d4af37" roughness={0.5} metalness={0.5} />
        </mesh>
      </group>
      
      {/* Base of pillar */}
      <mesh position={[0, -1.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.7, 0.8, 0.4, 16]} />
        <meshStandardMaterial color="#e6d2b5" roughness={0.7} metalness={0.2} />
      </mesh>
      
      <Text
        position={[0, 0, 0.6]}
        rotation={[0, 0, 0]}
        fontSize={0.3}
        color="#3a2a1d"
        font="/fonts/PlayfairDisplay-Bold.ttf"
        anchorX="center"
        anchorY="middle"
      >
        सत्यमेव जयते
      </Text>
    </group>
  );
};

// Environment setup
const Environment = () => {
  const { scene } = useThree();
  
  useEffect(() => {
    scene.background = new THREE.Color("#f5f1e8");
    scene.fog = new THREE.Fog("#f5f1e8", 5, 20);
  }, [scene]);
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
    </>
  );
};

const ThreeDGavel: React.FC = () => {
  return (
    <div className="h-64 md:h-80 lg:h-96 w-full">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 10], fov: 45 }}
      >
        <Environment />
        <Gavel />
        <LegalText />
        <ScalesOfJustice />
        <AshokaPillar />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDGavel;
