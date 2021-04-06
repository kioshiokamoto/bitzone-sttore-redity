import React from 'react'
import useClients from '../../hooks/useClients'

export default function Clients () {
  const { name } = useClients()
  return (
    <div>
      Clients: nombre: {name}
    </div>
  )
}
