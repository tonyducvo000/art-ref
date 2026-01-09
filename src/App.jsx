// src/App.jsx

import { useState } from 'react'
import Scene from './scene/Scene'
import Toolbar from './ui/Toolbar'

export default function App() {
  const [geometryType, setGeometryType] = useState('box')
  const [viewMode, setViewMode] = useState('solid')
  const [autoRotate, setAutoRotate] = useState(true)


  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Toolbar
        geometryType={geometryType}
        setGeometryType={setGeometryType}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <Scene geometryType={geometryType} viewMode={viewMode} />
    </div>
  )
}
