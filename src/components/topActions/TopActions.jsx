import React, { useContext } from 'react'

import './TopActions.scss'
import { Files } from '../../contexts/Files'
export const TopActions = () => {
  const { selects, onTrash, urlDownload } = useContext(Files);


  return (
    <div className='warapper__actions actions'>

      <button  disabled={!selects.length > 0 ? true : false}
        className="actions__btn btn-block"
        onClick={onTrash}
      >To trash</button>
      
      <a href={urlDownload}  
        className={`actions__btn btn-block ${!selects.length > 0 ? 'disabled' : false}`}
        target="_blank"
      >View</a>
    </div>
  )
}
