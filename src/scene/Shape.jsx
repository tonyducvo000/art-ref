// src/scene/Shape.jsx

import { GEOMETRIES } from '../geometry/geometries'

export default function Shape({ geometryType, viewMode }) {
  const Geometry = GEOMETRIES[geometryType].component

  return (
    <mesh scale={1.5}>
      <Geometry />
      <meshStandardMaterial
        color="#d9d9d9"
        roughness={0.6}
        wireframe={viewMode === 'wireframe'}
      />
    </mesh>
  )
}
