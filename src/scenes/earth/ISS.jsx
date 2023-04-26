import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useMemo, useRef, useCallback } from 'react'
import * as THREE from 'three'

const ISS = React.memo(() => {
  const issRef = useRef()
  const clockRef = useRef(new THREE.Clock()) // Create a reference to the clock
  const memoizedISS = useMemo(() => {
    return useGLTF('/ISSModel/ISS_stationary.gltf')
  })
  const xAxis = 2
  const updateMoonPosition = useCallback(() => {
    // Orbit Rotation
    issRef.current.position.x =
      Math.sin(clockRef.current.getElapsedTime() * 0.6) * xAxis
    issRef.current.position.z =
      Math.cos(clockRef.current.getElapsedTime() * 0.6) * xAxis
  }, [])
  useFrame(() => {
    updateMoonPosition()
  })

  return (
    <mesh>
      <primitive
        ref={issRef}
        object={memoizedISS.scene}
        position={[xAxis, 0, 0]}
        scale={0.005}
      />
    </mesh>
  )
})

export default ISS
