import React from 'react'

import './Profile.scss'
export const Profile = () => {
   return (
      <div className="profile__actions">
         <span className='profile__logo'>A</span>
         <ul className="profile__drop">
            <li><button className='profile__btn'>SignIn</button></li>
         </ul>

      </div>
   )
}
