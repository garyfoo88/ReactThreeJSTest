import React from 'react'

const Lights = () => {
  return (
    <>
        <ambientLight intensity={0.4} />
        <directionalLight />
    </>
  )
}

export default Lights