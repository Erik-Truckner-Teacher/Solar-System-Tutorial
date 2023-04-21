import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Moon = () => {
  const moonRef = useRef()

  const [moonTexture] = useTexture(['/assets/moon_map.jpg'])
  const xAxis = 4
  useFrame(({ clock }) => {
    // Orbit Rotation
    moonRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.8) * xAxis
    moonRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.8) * xAxis
    // Axis Rotation
    moonRef.current.rotation.y += 0.002
  })

  return (
    <mesh castShadow ref={moonRef} position={[xAxis, 0, 0]}>
      {/* Radius , X-axis , Y-axis */}
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshPhongMaterial map={moonTexture} />
    </mesh>
  )
}

export default Moon
