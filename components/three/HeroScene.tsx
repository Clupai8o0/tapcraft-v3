'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import {
  Environment,
  Float,
  ContactShadows,
  useGLTF,
} from '@react-three/drei';
import { Suspense, useRef, useEffect } from 'react';
import type { Group, Mesh } from 'three';
import { useThreeProfile, SAFE_GL } from '@/lib/three-safari';

const HERO_MODEL = '/models/hero-keychain-tc.glb';
useGLTF.preload(HERO_MODEL);

function Keychain() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(HERO_MODEL);

  useEffect(() => {
    scene.traverse((obj) => {
      const mesh = obj as Mesh;
      if (mesh.isMesh) {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.4;
    group.current.rotation.x = Math.sin(t * 0.5) * 0.08;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.5} floatingRange={[-0.08, 0.08]}>
      {/* GLB is in real-world metres (~40mm disc) — scale ~55x to fill the framing.
          GLB disc is flat (face up +Z); tip it upright so it faces the camera. */}
      <group ref={group} scale={55}>
        <primitive object={scene} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </Float>
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
  const { dpr, shadows, useHDR, prefersReducedMotion, isMobile } = useThreeProfile();

  return (
    <Canvas
      shadows={shadows}
      dpr={dpr}
      camera={{
        position: isMobile ? [0, 0.2, 5.0] : [0, 0.3, 4.2],
        fov: isMobile ? 42 : 35,
      }}
      gl={SAFE_GL}
      style={{ background: 'transparent', touchAction: 'pan-y' }}
      frameloop={prefersReducedMotion ? 'demand' : 'always'}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={useHDR ? 0.45 : 0.85} />
        <directionalLight
          position={[3, 4, 4]}
          intensity={1.4}
          castShadow={shadows}
          shadow-mapSize={shadows ? [1024, 1024] : undefined}
        />
        <directionalLight position={[-3, 2, -2]} intensity={0.5} color="#60a5fa" />
        <spotLight
          position={[0, 5, 0]}
          intensity={0.6}
          angle={0.6}
          penumbra={1}
          castShadow={shadows}
        />

        <Keychain />
        {!isMobile && !prefersReducedMotion && <Particles />}

        <ContactShadows
          position={[0, -1.0, 0]}
          opacity={0.55}
          scale={6}
          blur={2.6}
          far={2.4}
          color="#000"
        />
        {useHDR && <Environment preset="city" />}
      </Suspense>
    </Canvas>
  );
}
