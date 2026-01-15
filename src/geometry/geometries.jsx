// src/geometry/geometries.jsx
import { Lathe, Polyhedron, Tetrahedron } from '@react-three/drei'
import * as THREE from 'three'


export const GEOMETRIES = {
  box: {
    label: 'Box',
    component: () => <boxGeometry args={[1, 1, 1]} />,
  },
 
  circle: {
    label: 'Circle',
    component: () => <circleGeometry args={[0.8, 32]} />,
  },

  edges: {
    label: 'Edges',
    component: () => <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />,
  },


  Lathe: {
    label: 'Lathe',
    component: () => {
      const points = [
        new THREE.Vector2(0.5, 0),
        new THREE.Vector2(0.3, 0.2),
        new THREE.Vector2(0.1, 0.4),
        new THREE.Vector2(0, 0.6),
        new THREE.Vector2(0.1, 0.8),
        new THREE.Vector2(0.3, 1),
        new THREE.Vector2(0.5, 1),
      ]

      return <latheGeometry args={[points, 32]} />
    },
  },

  sphere: {
    label: 'Sphere',
    component: () => <sphereGeometry args={[0.75, 32, 32]} />,
  },
  cylinder: {
    label: 'Cylinder',
    component: () => (
      <cylinderGeometry args={[0.5, 0.5, 1.2, 32]} />
    ),
  },
  cone: {
    label: 'Cone',
    component: () => (
      <coneGeometry args={[0.6, 1.2, 32]} />
    ),
  },
  capsule: {
    label: 'Capsule',
    component: () => (
      <capsuleGeometry args={[0.4, 1, 16, 32]} />
    ),
  },
  torus: {
    label: 'Torus',
    component: () => (
      <torusGeometry args={[0.6, 0.25, 16, 32]} />
    ),
  },
  torusKnot: {
  label: 'Torus Knot',
  component: () => (
    <torusKnotGeometry args={[0.6, 0.2, 128, 16]} />
  ),
}, 

tube: {
  label: 'Tube',
  component: () => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1, 0, 0),
      new THREE.Vector3(-0.5, 0.5, 0),
      new THREE.Vector3(0.5, -0.5, 0),
      new THREE.Vector3(1, 0, 0),
    ])

    return (
      <tubeGeometry args={[curve, 64, 0.2, 16, false]} />
    )
  },
},

dodecahedron: {
  label: 'Dodecahedron',
  component: () => (
    <dodecahedronGeometry args={[0.8]} />
  ),
},

icosahedron: {
  label: 'Icosahedron',
  component: () => (
    <icosahedronGeometry args={[0.8]} />
  ),
},

octahedron: {
  label: 'Octahedron',
  component: () => (
    <octahedronGeometry args={[0.8]} />
  ),
},

// Polyhedron: {
//   label: 'Polyhedron',
//   component: () => (
//     <polyhedronGeometry args={[20, 2, 20]} />
//   ),
// },

plane: {
  label: 'Plane',
  component: () => (
    <planeGeometry args={[1.5, 1.5, 1, 1]} />
  ),
},

ring: {
  label: 'Ring',
  component: () => (
    <ringGeometry args={[0.4, 0.8, 32]} />
  ),
},

// shape: {
//   label: 'Shape',
//   component: () => {      
//     const shape = new THREE.Shape()
//     shape.moveTo(0, 0)
//     shape.lineTo(1, 0)
//     shape.lineTo(1, 1)
//     shape.lineTo(0, 1)
//     shape.lineTo(0, 0)

//     return (
//       <shapeGeometry args={[shape]} />
//     )
//   },
// },

Tetrahedron: {
  label: 'Tetrahedron',
  component: () => (
    <tetrahedronGeometry args={[0.8]} />
  ),
},

extrude: {
  label: 'Extrude',
  component: () => {
    const shape = new THREE.Shape()
    shape.moveTo(0, 0)
    shape.lineTo(1, 0)
    shape.lineTo(1, 1)
    shape.lineTo(0, 1)
    shape.lineTo(0, 0)

    return (
      <extrudeGeometry
        args={[
          shape,
          {
            depth: 0.4,
            bevelEnabled: false,
          },
        ]}
      />
    )
  },
},

}
