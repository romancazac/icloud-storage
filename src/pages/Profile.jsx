import React, { useContext } from 'react'
import {AuthContext} from '../contexts/AuthContext'

export const Profile = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <span>{user.email}</span>
    </div>
  )
}
