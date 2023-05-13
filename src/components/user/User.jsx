import React, { useContext } from 'react'

import './User.scss'
import { Link } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
export const User = () => {
   const {user} = useContext(AuthContext);
   console.log(user)
   return (
      <div className="profile__actions">
         <span className='profile__logo'>A</span>
         <ul className="profile__drop">
            {
               !user ? 
               <li><Link to='auth' className='profile__btn'>Sign in</Link></li>
               :
               <li><button onClick={() => signOut(auth)} className='profile__btn'>Log out</button></li>
            }
            
         </ul>

      </div>
   )
}
