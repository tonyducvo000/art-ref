import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { GEOMETRIES } from '../geometry/geometries'

export default function Shape({ geometryType, viewMode, autoRotate, rotationSpeed }) {
  const groupRef = useRef()
  const Geometry = GEOMETRIES[geometryType].component

  // 🔑 keep latest autoRotate value for useFrame
  const autoRotateRef = useRef(autoRotate)

  useEffect(() => {
    autoRotateRef.current = autoRotate
  }, [autoRotate])

  useFrame((_, delta) => {
    if (!autoRotate || !groupRef.current) return
    // if (!autoRotateRef.current) return // HARD STOP

    groupRef.current.rotation.y += delta * rotationSpeed 
    groupRef.current.rotation.x += delta * 0.5 * rotationSpeed
  })

  return (
    <group ref={groupRef}>
      <mesh scale={1.6}>
        <Geometry />
        <meshStandardMaterial
          color="#d9d9d9"
          roughness={0.6}
          wireframe={viewMode === 'wireframe'}
        />
      </mesh>
    </group>
  )
}
