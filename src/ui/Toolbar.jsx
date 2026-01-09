// src/ui/Toolbar.jsx

import { GEOMETRIES } from '../geometry/geometries'

export default function Toolbar({
  geometryType,
  setGeometryType,
  viewMode,
  setViewMode,
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
        background: '#222',
        padding: '8px',
        borderRadius: 4,
      }}
    >
      <label style={{ color: '#fff', marginRight: 6 }}>Shape:</label>
      <select
        value={geometryType}
        onChange={(e) => setGeometryType(e.target.value)}
        style={{
          background: '#333',
          color: '#fff',
          border: '1px solid #555',
          padding: '4px 6px',
          marginRight: 12,
        }}
      >
        {Object.entries(GEOMETRIES).map(([key, geo]) => (
          <option key={key} value={key}>
            {geo.label}
          </option>
        ))}
      </select>

      <label style={{ color: '#fff', marginRight: 6 }}>View:</label>
      <select
        value={viewMode}
        onChange={(e) => setViewMode(e.target.value)}
        style={{
          background: '#333',
          color: '#fff',
          border: '1px solid #555',
          padding: '4px 6px',
        }}
      >
        <option value="solid">Solid</option>
        <option value="wireframe">Wireframe</option>
      </select>
    </div>
  )
}
