// src/scene/Scene.jsx

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Shape from './Shape'

export default function Scene({ geometryType, viewMode }) {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 35 }}>
      <color attach="background" args={['#1e1e1e']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      <Shape geometryType={geometryType} viewMode={viewMode} />

      <OrbitControls target={[0,0,0]}enablePan={false} />
    </Canvas>
  )
}
