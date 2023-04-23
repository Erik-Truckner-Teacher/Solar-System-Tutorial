import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Sun = () => {
  const sunRef = useRef()

  const [sunTexture] = useTexture(['/assets/sun_map.jpg'])

  useFrame(() => {
    // Axis Rotation
    sunRef.current.rotation.y -= 0.002
  })

  return (
    <mesh ref={sunRef} position={[0, 0, 0]}>
      {/* Radius , X-axis , Y-axis */}
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshPhongMaterial
        map={sunTexture}
        emissiveMap={sunTexture}
        emissiveIntensity={0.6}
        emissive={0xffffff}
      />
      <pointLight castShadow />
    </mesh>
  )
}

export default Sun
