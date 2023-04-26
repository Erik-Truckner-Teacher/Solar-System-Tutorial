import { useHelper } from '@react-three/drei'
import AnimatedStars from './AnimatedStars'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'

import * as THREE from 'three'

import Earth from './scenes/earth/Earth'
import Sun from './scenes/sun/Sun'

const MainContainer = () => {
  const directionalLightRef = useRef()
  const directionalLightRefTwo = useRef()
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink')
  useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink')
  return (
    <>
      <Perf />
      <AnimatedStars />
      {/* <directionalLight
        castShadow
        ref={directionalLightRef}
        position={[0, 0, 10]}
        intensity={1}
        // color={0xff0000}
      />
      <directionalLight
        castShadow
        ref={directionalLightRefTwo}
        position={[0, 0, -10]}
      /> */}
      {/* <ambientLight /> */}

      <Sun />
      <Earth displacementScale={0.15} />
    </>
  )
}

export default MainContainer
