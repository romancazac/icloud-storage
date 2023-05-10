import React from 'react'
import './Nav.scss'
import { NavLink } from 'react-router-dom'
export const Nav = () => {
  return (
    <nav className="header__nav nav">
      <ul className="nav__list">
         <li><NavLink to='dashboard' className="nav__link">Home</NavLink></li>
         <li><NavLink to='profile' className="nav__link">Profile</NavLink></li>
      </ul>
    </nav>
  )
}
