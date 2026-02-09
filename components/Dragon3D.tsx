'use client'
import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

// Component to load your 3D model
function Model() {
  const modelRef = useRef<THREE.Group>(null)

  // Load your model with animations
  const { scene, animations } = useGLTF('/models/SyraSysDragon.glb')
  const { actions } = useAnimations(animations, modelRef)

  // Play the first animation when the model loads
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      // Play all animations or just the first one
      const firstAction = Object.values(actions)[0]
      if (firstAction) {
        firstAction.timeScale = 0.1 // animation speed
        firstAction.play()
      }
    }
  }, [actions])

  // set an initial rotation so the model faces a side angle
  const initialRotation: [number, number, number] = [0, -Math.PI / 7, 0]
  // offset model to the right and slightly down
    const initialPosition: [number, number, number] = [-.4, -.8, -2.5]

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.09}
      position={initialPosition}
      rotation={initialRotation}
    />
  )
}

// Fallback while model is loading
function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#333" wireframe />
    </mesh>
  )
}

export default function Dragon3D() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{ position: [2, 0.5, 4], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-5, -5, -2]} intensity={0.5} />

        {/* Your 3D Model */}
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>

        {/* Controls - limited for background usage */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
        // autoRotate
        // autoRotateSpeed={0.5}
        // target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  )
}
