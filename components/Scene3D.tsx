"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function FloatingOrb({ position, color, speed, distort }: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 * speed;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
}

function ParticleField() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#F40009" transparent opacity={0.6} />
    </points>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} style={{ position: "absolute", inset: 0 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} color="#F40009" intensity={2} />
      <pointLight position={[-10, -10, -10]} color="#F5A623" intensity={1} />
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      <ParticleField />
      <FloatingOrb position={[-4, 2, -2]} color="#F40009" speed={1} distort={0.4} />
      <FloatingOrb position={[4, -1, -3]} color="#F5A623" speed={0.7} distort={0.3} />
      <FloatingOrb position={[0, -3, -1]} color="#cc0007" speed={1.2} distort={0.5} />
    </Canvas>
  );
}
