import React from 'react'

import './Aside.scss'
import {  NavLink } from 'react-router-dom'
import { Upload } from '../upload/Upload'
export const Aside = () => {
  return (
   <aside className="wrapper__aside aside">
      <Upload/>
      <ul className="aside__items">
         <li><NavLink to='files' className="aside__link"><span className='icon-files-empty'></span>Files</NavLink></li>
         <li><NavLink to='photo'  className="aside__link"><span className=' icon-file-picture'></span>Photo</NavLink></li>
         <li><NavLink to='basket'  className="aside__link"><span className=' icon-bin'></span>Trash</NavLink></li>
      </ul>
   </aside>
  )
}


