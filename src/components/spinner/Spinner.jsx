import React from 'react'
import  gif from '../../assets/img/spener.gif';

import './Spinner.scss'

export const Spinner = () => {
  return (
    <div className='spinner'>
        <img src={gif} alt="spinner" className="spinner__gif" /> 
    </div>
  )
}
