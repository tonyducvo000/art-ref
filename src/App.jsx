// src/App.jsx

import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from './scene/Scene'

import Toolbar from './ui/Toolbar'

import Shape from './scene/Shape'


export default function App() {
  const [geometryType, setGeometryType] = useState('box')
  const [viewMode, setViewMode] = useState('solid')
  const [autoRotate, setAutoRotate] = useState(false)
  const [rotationSpeed, setRotationSpeed] = useState(1)



  return (
    <div style={{ width: '100vw', height: '100vh' }}>
         
         <div
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          zIndex: 10,
          background: '#222',
          padding: '10px',
          borderRadius: 6,
        }} ></div>
         
        <button
          onClick={() => setAutoRotate(prev => !prev)}
          style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          zIndex: 10,
          padding: '10px 14px',
          fontSize: '14px',
          cursor: 'pointer',
           }}
        >
          {autoRotate ? 'Stop Rotation' : 'Start Rotation'}
        </button>

          <label 
          style={{ fontSize: '18px',
                   position: 'absolute',
                   bottom: 20, 
                   right: 200,
                   zIndex: 10,
                   padding: '10px 14px',
                   color: '#D3D3D3',

                }}>
          Rotation Speed: {rotationSpeed.toFixed(2)}
        </label>

        <input

          type="range"
          min={0}
          max={3}
          step={0.01}
          value={rotationSpeed}
          onChange={e => setRotationSpeed(Number(e.target.value))}
          style={{ width: '15%',
                    position: 'absolute',
                    bottom: 10,
                    height: '38px',
                    right: 55,
                    zIndex: 10,
                    padding: '10px 14px' 
           }}
        />
      

      <Toolbar
        geometryType={geometryType}
        setGeometryType={setGeometryType}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />


    <Canvas camera={{ position: [5, 5, 5], fov: 35 }}   gl={{ antialias: true }}
>
        <color attach="background" args={['#1e1e1e']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        <Shape
          geometryType={geometryType}
          viewMode={viewMode}
          autoRotate={autoRotate}
          rotationSpeed={rotationSpeed}
        /> 
        <OrbitControls />
    </Canvas>
    
    </div>
  )
}
