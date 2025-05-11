
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Mesh, Float32BufferAttribute, BufferGeometry, LineBasicMaterial, Vector3 } from 'three';

const EmergencyGlobe = () => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  // Create line geometries for drone flight paths
  const createLineGeometry = (points: number[][]) => {
    const geometry = new BufferGeometry();
    const vertices = new Float32Array([
      ...points[0],
      ...points[1]
    ]);
    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
    return geometry;
  };

  return (
    <>
      {/* Earth sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial 
          color="#1a365d"
          metalness={0.5}
          roughness={0.7}
        />
        
        {/* Emergency Response Points */}
        <group>
          {[
            [0.5, 1.8, 0.8], // North America
            [1.8, 0.7, 0.2], // Europe
            [-1.5, 0.9, 1.2], // Asia
            [0.3, -1.7, 0.9], // South America
            [1.2, -1.2, 1.1], // Africa
            [-1.0, -1.5, 0.7], // Australia
          ].map((position, index) => (
            <mesh key={index} position={position as [number, number, number]}>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} />
            </mesh>
          ))}
        </group>
        
        {/* Drone flight paths represented as lines */}
        <group>
          {[
            [[0.5, 1.8, 0.8], [1.8, 0.7, 0.2]],
            [[1.8, 0.7, 0.2], [-1.5, 0.9, 1.2]],
            [[-1.5, 0.9, 1.2], [0.3, -1.7, 0.9]],
            [[0.3, -1.7, 0.9], [1.2, -1.2, 1.1]],
          ].map((points, index) => (
            <line key={index}>
              <primitive object={createLineGeometry(points)} attach="geometry" />
              <lineBasicMaterial attach="material" color="#38b2ac" />
            </line>
          ))}
        </group>
      </mesh>
    </>
  );
};

const DisasterResponseModel = () => {
  return (
    <div className="w-full h-64 mb-6 bg-gradient-to-r from-primary to-primary/60 rounded-lg overflow-hidden">
      <Canvas>
        {/* Fixed PerspectiveCamera props to match the expected interface */}
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <EmergencyGlobe />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default DisasterResponseModel;
