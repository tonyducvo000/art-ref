// src/App.jsx

import { useState } from 'react'
import Scene from './scene/Scene'
import Toolbar from './ui/Toolbar'

export default function App() {
  const [geometryType, setGeometryType] = useState('box')
  const [viewMode, setViewMode] = useState('solid')
  const [autoRotate, setAutoRotate] = useState(false)


  return (
    <div style={{ width: '100vw', height: '100vh' }}>
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
      
      <Toolbar
        geometryType={geometryType}
        setGeometryType={setGeometryType}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <Scene geometryType={geometryType} 
      viewMode={viewMode} 
      autoRotate={autoRotate} 
      rotationSpeed={rotationSpeed} 
      />

    </div>
  )
}
