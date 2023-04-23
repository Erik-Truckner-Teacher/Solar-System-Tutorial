import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import Moon from './Moon'
import ISS from './ISS'

import * as THREE from 'three'

const Earth = ({ displacementScale }) => {
  const earthRef = useRef()
  const earthPositionRef = useRef(new THREE.Vector3(8, 0, 0)) // Create a reference to the Earth's position vector

  const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap] =
    useTexture([
      '/assets/earth_day.jpg',
      '/assets/earth_normal.jpg',
      '/assets/earth_specular.jpg',
      '/assets/earth_displacement.jpg',
    ])

  useFrame(({ clock }) => {
    // Calculate the Earth's position based on its angle from the Sun
    const angle = clock.getElapsedTime() * 0.5
    const distance = 8
    const x = Math.sin(angle) * distance
    const z = Math.cos(angle) * distance
    earthRef.current.position.set(x, 0, z)
    earthRef.current.rotation.y += 0.002
    earthPositionRef.current = earthRef.current.position
  })

  return (
    <group ref={earthRef}>
      <mesh castShadow receiveShadow>
        {/* Radius , X-axis , Y-axis */}
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          map={earthTexture}
          normalMap={earthNormalMap}
          specularMap={earthSpecularMap}
          shininess={1000}
          displacementMap={earthDisplacementMap}
          displacementScale={displacementScale}
        />
      </mesh>
      <ISS />
      <Moon />
    </group>
  )
}

export default Earth
