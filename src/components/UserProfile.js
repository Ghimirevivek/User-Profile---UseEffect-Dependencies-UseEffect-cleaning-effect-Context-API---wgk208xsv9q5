import { useContext } from 'react'
import React from 'react'
import { UserContext } from './App'

export const UserProfile = () => {
  const user = useContext(UserContext)
  return (
    <>
      <h1 id="name">Name:- {user.name}</h1>
      <h1 id="age">Age:- {user.age}</h1>
    </>
  )
}
