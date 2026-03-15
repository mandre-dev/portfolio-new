'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.12
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.08
  })
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
      <Sphere ref={meshRef} args={[1.4, 100, 200]} scale={1}>
        <MeshDistortMaterial
          color="#4f63e8"
          attach="material"
          distort={0.45}
          speed={1.8}
          roughness={0.1}
          metalness={0.6}
          emissive="#7c3aed"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  )
}

function ParticleField() {
  const count = 800
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [])
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#6366f1" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

// ── CSS fallback quando WebGL não está disponível ──────────────
function CSSFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <style>{`
        @keyframes orb-float {
          0%, 100% { transform: translateY(15px) scale(1); }
          50% { transform: translateY(-15px) scale(1.04); }
        }
        @keyframes orb-rotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes particle-drift {
          0%   { transform: translateY(0) translateX(0); opacity: 0.4; }
          50%  { transform: translateY(-40px) translateX(20px); opacity: 0.8; }
          100% { transform: translateY(0) translateX(0); opacity: 0.4; }
        }
        .orb-ring {
          position: absolute;
          border-radius: 50%;
          border: 3px solid rgba(99, 102, 241, 0.7);
          animation: orb-rotate linear infinite;
        }
        .avatar-wrap {
          position: absolute;
          border-radius: 50%;
          animation: orb-float ease-in-out infinite;
          overflow: hidden;
          border: 3px solid rgba(99, 102, 241, 0.4);
          background: #000;
        }
      `
      }</style>

      {/* Glow atrás da foto */}
     

      {/* Foto circular com animação */}
      <div
        className="avatar-wrap"
        style={{ width: 250, height: 250, animationDuration: '3.5s' }}
      >
        <img
          src="/mandre-circle.png"
          alt="Marcos André Mendonça"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Anéis orbitando */}
      {[480, 340, 410].map((size, i) =>   (
        <div
          key={size}
          className="orb-ring"
          style={{
            width: size,
            height: size,
            animationDuration: `${8 + i * 4}s`,
            animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
          }}
        />
      ))}

      {/* Partículas flutuando */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: 3 + (i % 3),
            height: 3 + (i % 3),
            borderRadius: '50%',
            background: i % 2 === 0 ? '#6366f1' : '#7c3aed',
            opacity: 0.5,
            left: `${15 + (i * 7) % 70}%`,
            top: `${10 + (i * 11) % 80}%`,
            animation: `particle-drift ${2.5 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  )
}

// ── WebGL detection ────────────────────────────────────────────
function checkWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    const ctx =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    return !!ctx
  } catch {
    return false
  }
}

export default function HeroCanvas() {
  const [webglAvailable, setWebglAvailable] = useState<boolean | null>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setWebglAvailable(checkWebGL())
  }, [])

  // Still checking
  if (webglAvailable === null) return null

  // No WebGL or runtime error → CSS fallback
  if (!webglAvailable || hasError) return <CSSFallback />

  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 60 }}
      style={{ width: '100%', height: '100%' }}
      dpr={[1, 2]}
      onCreated={() => setHasError(false)}
      // Catch WebGL context errors at Canvas level
      gl={{ failIfMajorPerformanceCaveat: false }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#7c3aed" />
      <pointLight position={[5, 5, 0]} intensity={0.4} color="#4f63e8" />
      <AnimatedSphere />
      <ParticleField />
      <Stars radius={80} depth={50} count={3000} factor={4} fade speed={0.6} />
    </Canvas>
  )
}