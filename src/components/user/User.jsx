import React from 'react'

import './User.scss'
import { Link } from 'react-router-dom'
export const User = () => {
   return (
      <div className="profile__actions">
         <span className='profile__logo'>A</span>
         <ul className="profile__drop">
            <li><Link to='auth' className='profile__btn'>SignIn</Link></li>
         </ul>

      </div>
   )
}
