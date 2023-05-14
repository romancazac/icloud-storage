import React from 'react'

import './CardFile.scss'
import img from '../../assets/img/149527715_825761161623758_1601928517377840782_n.jpg'
export const CardFile = ({url,filename}) => {
  return (
    <div className='card__col'>
      <img className='card__img' src={url} alt={filename} />
      <span className='card__name'>{filename}</span>
    </div> 
  )
}
