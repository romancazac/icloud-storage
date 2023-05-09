import React from 'react'

import './Aside.scss'
export const Aside = () => {
  return (
   <aside className="wrapper__aside aside">
      <button className='aside__up btn-block'><span className='icon-cloud-upload'></span>Upload File</button>
      <ul className="aside__items">
         <li><a href="#" className="aside__link active"><span className='icon-files-empty'></span>Files</a></li>
         <li><a href="#" className="aside__link"><span className=' icon-file-picture'></span>Photo</a></li>
         <li><a href="#" className="aside__link"><span className=' icon-bin'></span>Trash</a></li>
      </ul>
   </aside>
  )
}


