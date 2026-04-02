import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Shape from './components/Shape'

export default function App() {
  const [autoRotate, setAutoRotate] = useState(false)
  const [geometryType, setGeometryType] = useState('box')
  const [viewMode, setViewMode] = useState('solid')

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {/* UI */}
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          zIndex: 10,
          background: '#222',
          padding: '10px',
          borderRadius: 6,
        }}
      >
        <button
          onClick={() => setAutoRotate(v => !v)}
          style={{
            background: '#444',
            color: '#fff',
            border: '1px solid #666',
            padding: '6px 10px',
            cursor: 'pointer',
          }}
        >
          {autoRotate ? 'Stop Rotation' : 'Start Rotation'}
        </button>
      </div>

      {/* 3D Scene */}
      <Canvas camera={{ position: [2.5, 2.5, 2.5], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        <Shape
          geometryType={geometryType}
          viewMode={viewMode}
          autoRotate={autoRotate}
        />

        <OrbitControls />
      </Canvas>
    </div>
  )
}
