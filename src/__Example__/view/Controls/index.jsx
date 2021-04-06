import React from 'react'
import Clients from './Clients'
import Users from './Users'
import useControls from '../../hooks/useControls'

export default function Controls () {
  const { handleClick } = useControls()

  return (
    <div>
      <Clients />
      <Users />
      <button onClick={handleClick}>Dame click</button>
    </div>
  )
}
