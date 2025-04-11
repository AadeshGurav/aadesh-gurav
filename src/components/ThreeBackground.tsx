
import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

// Generate random points in a sphere
const generatePoints = (count: number, radius: number) => {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    
    // Random position in a sphere
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    const r = radius * Math.cbrt(Math.random());
    
    positions[i3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = r * Math.cos(phi);
    
    // Random color with neon theme
    colors[i3] = 0.6 + Math.random() * 0.4; // R
    colors[i3 + 1] = 0.4 + Math.random() * 0.6; // G
    colors[i3 + 2] = 0.8 + Math.random() * 0.2; // B
  }
  
  return { positions, colors };
};

function PointCloud({ count = 4000, radius = 10, mousePosition }: { count: number; radius: number; mousePosition: { x: number; y: number } }) {
  const pointsRef = useRef<THREE.Points>(null);
  const { positions, colors } = generatePoints(count, radius);
  
  const { size } = useThree();
  
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // Rotate the points based on time
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    
    // Respond to mouse position
    const targetX = (mousePosition.x / size.width) * 2 - 1;
    const targetY = -(mousePosition.y / size.height) * 2 + 1;
    
    pointsRef.current.rotation.x += (targetY * 0.1 - pointsRef.current.rotation.x) * 0.02;
    pointsRef.current.rotation.y += (targetX * 0.1 - pointsRef.current.rotation.y) * 0.02;
  });
  
  return (
    <Points ref={pointsRef} limit={10000}>
      <PointMaterial
        transparent
        vertexColors
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
    </Points>
  );
}

const ThreeBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="absolute inset-0 z-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <PointCloud count={4000} radius={10} mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
