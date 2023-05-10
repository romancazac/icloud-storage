import React, { useState } from 'react'

export const Upload = () => {

   const [file, setFile] = useState('')
   return (
      <div>
         <label htmlFor='asideLabel' className='aside__up btn-block'><span className='icon-cloud-upload'></span>Upload File</label>
         <input onChange={(e) =>setFile( e.target.files[0].name)} type="file"  id="asideLabel"  className='aside__inp'/>
          {file}  
      </div>

   )
}
