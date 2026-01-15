import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Edges } from '@react-three/drei'
import { GEOMETRIES } from '../geometry/geometries'

export default function Shape({
  geometryType = 'box',
  viewMode = 'solid',  // 'solid' | 'overlay' | 'wireframe'
  autoRotate,
  rotationSpeed,
}) {
  const groupRef = useRef()
  const Geometry = GEOMETRIES[geometryType].component

  useFrame((_, delta) => {
    if (!autoRotate || !groupRef.current) return

    groupRef.current.rotation.y += delta * rotationSpeed
    groupRef.current.rotation.x += delta * rotationSpeed * 0.5
  })

  return (
    <group ref={groupRef}>
      {/* SOLID MODE */}
      {viewMode !== 'wireframe' && (
        <mesh scale={1.6}>
          <Geometry />
          <meshStandardMaterial
            color="#d9d9d9"
            roughness={0.6}
          />

          {/* Crease edges only in solid/overlay */}
          <Edges color="#444" threshold={15} />
        </mesh>
      )}

      {/* WIREFRAME OVERLAY */}
      {viewMode === 'overlay' && (
        <mesh scale={1.6}>
          <Geometry />
          <meshBasicMaterial
            color="#000"
            wireframe
            transparent
            opacity={0.35}
            depthTest={false}
          />
        </mesh>
      )}

      {/* PURE WIREFRAME */}
      {viewMode === 'wireframe' && (
        <mesh scale={1.6}>
          <Geometry />
          <meshBasicMaterial
            color="#000"
            wireframe
          />
        </mesh>
      )}
    </group>
  )
}
