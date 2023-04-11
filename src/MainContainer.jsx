import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import AnimatedStars from './AnimatedStars'

const MainContainer = () => {
  return (
    <Canvas>
      <color attach='background' args={['black']} />
      <OrbitControls />
      <AnimatedStars />
    </Canvas>
  )
}

export default MainContainer
