import React from 'react'

import './TopActions.scss'
export const TopActions = () => {
  return (
    <div className='warapper__actions actions'>
      <button disabled className="actions__btn btn-block">Share</button>
      <button disabled className="actions__btn btn-block">Delete</button>
    </div>
  )
}
