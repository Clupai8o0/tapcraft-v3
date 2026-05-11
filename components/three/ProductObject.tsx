'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, RoundedBox, ContactShadows } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import type { Group } from 'three';

type Variant = 'keychain' | 'card' | 'lanyard' | 'badge';

interface ProductObjectProps {
  variant: Variant;
  accent?: string;
}

function Body({ variant, accent = '#3b82f6' }: ProductObjectProps) {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.4) * 0.7;
    group.current.rotation.x = Math.sin(t * 0.6) * 0.12;
  });

  const dims: Record<Variant, [number, number, number, number]> = {
    keychain: [1.6, 1.0, 0.2, 0.14],
    card: [1.8, 1.15, 0.06, 0.08],
    lanyard: [1.2, 1.5, 0.18, 0.16],
    badge: [1.4, 1.4, 0.12, 0.18],
  };
  const [w, h, d, r] = dims[variant];

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.4}>
        <RoundedBox args={[w, h, d]} radius={r} smoothness={5} castShadow>
          <meshPhysicalMaterial
            color="#141418"
            metalness={0.35}
            roughness={0.38}
            clearcoat={0.5}
            clearcoatRoughness={0.4}
          />
        </RoundedBox>
        <mesh position={[-w / 2 + r + 0.1, h / 2 - r - 0.1, d / 2 + 0.005]}>
          <boxGeometry args={[0.26, 0.26, 0.02]} />
          <meshStandardMaterial
            color={accent}
            emissive={accent}
            emissiveIntensity={1.6}
            toneMapped={false}
          />
        </mesh>
        {variant === 'keychain' && (
          <mesh position={[-w / 2 - 0.18, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.16, 0.028, 16, 48]} />
            <meshStandardMaterial color="#9aa0a6" metalness={0.95} roughness={0.18} />
          </mesh>
        )}
      </Float>
    </group>
  );
}

export default function ProductObject({ variant, accent }: ProductObjectProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.1, 3.4], fov: 35 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 4]} intensity={1.2} castShadow />
        <directionalLight position={[-2, 1, -2]} intensity={0.4} color="#60a5fa" />
        <Body variant={variant} accent={accent} />
        <ContactShadows position={[0, -0.85, 0]} opacity={0.45} scale={4} blur={2.4} color="#000" />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
