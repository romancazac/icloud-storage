import React from 'react'
import './Nav.scss'
export const Nav = () => {
  return (
    <nav className="header__nav nav">
      <ul className="nav__list">
         <li><a href="#" className="nav__link active">Home</a></li>
         <li><a href="#" className="nav__link">Profile</a></li>
      </ul>
    </nav>
  )
}
