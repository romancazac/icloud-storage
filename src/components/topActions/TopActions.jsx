import React, { useContext } from 'react'

import './TopActions.scss'
import { SelectedFiles } from '../../contexts/SelectedFiles'
export const TopActions = () => {
  const { selects, onTrash,trash } = useContext(SelectedFiles);
  console.log(trash )
  return (
    <div className='warapper__actions actions'>
      <button disabled={!selects.length > 0 ? true : false} className="actions__btn btn-block">Share</button>
      <button disabled={!selects.length > 0 ? true : false}
        className="actions__btn btn-block"
        onClick={onTrash}
      >Delete</button>
    </div>
  )
}
