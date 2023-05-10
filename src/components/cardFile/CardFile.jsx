import React from 'react'

import './CardFile.scss'
import img from '../../assets/img/149527715_825761161623758_1601928517377840782_n.jpg'
export const CardFile = () => {
  return (
    <div className='card__col'>
      <img className='card__img' src={img} alt="" />
      <span className='card__name'>149527715_ 825761161623758_ 160192851 7377840782_n.jpg</span>
    </div> 
  )
}
