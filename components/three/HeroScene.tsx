'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import {
  Environment,
  Float,
  ContactShadows,
  Text,
  RoundedBox,
} from '@react-three/drei';
import { Suspense, useRef } from 'react';
import type { Group, Mesh } from 'three';

function Keychain() {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.35) * 0.45;
    group.current.rotation.x = Math.sin(t * 0.5) * 0.08;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.5} floatingRange={[-0.08, 0.08]}>
      <group ref={group} position={[0, 0, 0]}>
        {/* keychain body */}
        <RoundedBox args={[2.2, 1.4, 0.28]} radius={0.18} smoothness={6} castShadow receiveShadow>
          <meshPhysicalMaterial
            color="#141418"
            metalness={0.4}
            roughness={0.32}
            clearcoat={0.6}
            clearcoatRoughness={0.4}
          />
        </RoundedBox>

        {/* subtle inner inset */}
        <mesh position={[0, 0, 0.145]}>
          <planeGeometry args={[2.0, 1.22]} />
          <meshStandardMaterial
            color="#0A0A0C"
            metalness={0.1}
            roughness={0.85}
          />
        </mesh>

        {/* NFC zone — glowing chip */}
        <mesh position={[-0.62, 0.0, 0.16]} castShadow>
          <boxGeometry args={[0.42, 0.42, 0.02]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={1.8}
            toneMapped={false}
          />
        </mesh>

        {/* glow underneath chip */}
        <mesh position={[-0.62, 0.0, 0.155]}>
          <ringGeometry args={[0.24, 0.36, 32]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.35} toneMapped={false} />
        </mesh>

        {/* brand text */}
        <Text
          position={[0.28, 0.18, 0.16]}
          fontSize={0.22}
          color="#F5F5F7"
          anchorX="left"
          anchorY="middle"
          letterSpacing={-0.02}
        >
          TapCraft
        </Text>
        <Text
          position={[0.28, -0.12, 0.16]}
          fontSize={0.085}
          color="#75757F"
          anchorX="left"
          anchorY="middle"
          letterSpacing={0.04}
        >
          NFC · NTAG215
        </Text>

        {/* ring/loop */}
        <group position={[-1.32, 0.0, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.22, 0.035, 16, 64]} />
            <meshStandardMaterial color="#9aa0a6" metalness={0.95} roughness={0.18} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

function PulseRings() {
  const rings = useRef<(Mesh | null)[]>([]);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    rings.current.forEach((m, i) => {
      if (!m) return;
      const phase = (t * 0.55 + i * 0.5) % 1.6;
      const scale = 0.4 + phase * 1.6;
      m.scale.set(scale, scale, scale);
      const mat = m.material as { opacity: number };
      mat.opacity = Math.max(0, 0.55 - phase * 0.4);
    });
  });

  return (
    <group position={[-1.36, 0, 0]}>
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => {
            rings.current[i] = el;
          }}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[0.5, 0.52, 64]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.5} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

function Particles() {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.04;
  });
  const dots = Array.from({ length: 60 }, (_, i) => {
    const a = (i / 60) * Math.PI * 2;
    const r = 2.6 + Math.random() * 1.2;
    const y = (Math.random() - 0.5) * 2.4;
    return [Math.cos(a) * r, y, Math.sin(a) * r] as const;
  });
  return (
    <group ref={ref}>
      {dots.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshBasicMaterial color="#F5F5F7" transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.3, 4.2], fov: 35 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.45} />
        <directionalLight
          position={[3, 4, 4]}
          intensity={1.4}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-3, 2, -2]} intensity={0.5} color="#60a5fa" />
        <spotLight position={[0, 5, 0]} intensity={0.6} angle={0.6} penumbra={1} castShadow />

        <PulseRings />
        <Keychain />
        <Particles />

        <ContactShadows
          position={[0, -1.0, 0]}
          opacity={0.55}
          scale={6}
          blur={2.6}
          far={2.4}
          color="#000"
        />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
