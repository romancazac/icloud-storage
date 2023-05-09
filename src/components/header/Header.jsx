import React from 'react'
import { Nav } from '../nav/Nav'

import './Header.scss'
import { Profile } from '../profile/Profile'
export const Header = () => {
  return (
    <div className='header'>
      <div className="container">
         <div className="header__row">
            <div className="header__l">
               <a href="/" className="header__logo "><span className='icon-cloud-upload'></span> IcloudStorage </a>
               <Nav/>
            </div>
            <div className="header__r profile">
               <Profile/>
            </div>
         </div>
      </div>
    </div>
  )
}
