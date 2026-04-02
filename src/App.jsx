// src/App.jsx

import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
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
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          flexWrap: 'wrap',  
          position: 'absolute',
          bottom: 20,
          left: 20,
          zIndex: 10,
          background: '#222',
          padding: '10px',
          borderRadius: 6,          
        }} >
      </div>
         
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

      
      <div
        style={{
          position: 'absolute',
          bottom: 8,                 // small padding from edge
          left: '50%',               // move to center
          transform: 'translateX(-50%)', // true centering
          zIndex: 5,

          color: '#000000',
          fontSize: '12px',
          letterSpacing: '0.5px',

          pointerEvents: 'none',     // doesn't block canvas interaction
          userSelect: 'none',
        }}
      >
        Built by Tony Vo
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,          // ✅ bottom-right anchor
          zIndex: 10,
          padding: 12,
          borderRadius: 6,
          width: 'min(360px, calc(100vw - 40px))',
          boxSizing: 'border-box',          // ✅ allows wrapping instead of overlap
        }}
      >
          <label 
            style={{ 
                  fontSize: '20px', 
                  zIndex: 10,
                  padding: '10px 14px',
                  color: '#000000ff',
                  flex: '1 1 180px',        
                  minWidth: 0,             
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
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
            style={{ 
                    width: '15%',                                    
                    zIndex: 10,                      
                    flex: '0 0 15%',          
                    minWidth: 120,            
                    maxWidth: 220,            
                    cursor: 'pointer',                   
            }}
          />
      </div>

      <Toolbar
        geometryType={geometryType}
        setGeometryType={setGeometryType}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
         

      <Canvas camera={{ position: [5, 5, 5], fov: 35 }}   gl={{ antialias: true }}>
          <color attach="background" args={['#d8e7f2']} />
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
