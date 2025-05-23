'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random'
import * as THREE from 'three'

function Stars() {
  const ref = useRef<THREE.Points>(null)
  const sphere = useMemo(() => {
    const temp = random.inSphere(new Float32Array(5000), { radius: 1.5 })
    // Filter out NaN values
    return Float32Array.from(temp).filter(n => !isNaN(n))
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00ff88"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function Background() {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  )
}

