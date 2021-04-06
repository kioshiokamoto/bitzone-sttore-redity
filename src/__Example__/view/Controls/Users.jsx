import React from 'react'
import useUsers from '../../hooks/useUsers'

export default function Users () {
  const { name } = useUsers()
  return (
    <div>
      Users: nombre: {name}
    </div>
  )
}
