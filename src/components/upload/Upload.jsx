import React, { useContext,  useState } from 'react'

import {AuthContext} from '../../contexts/AuthContext';
import { postFile } from '../../services/files';
import uuid from 'react-uuid';
export const Upload = () => {
   const { user } = useContext(AuthContext)
   const [file, setFile] = useState();
   const [progress, setProgress] = useState(0);
   const uid = uuid()
   
   const handleFileUpload = (e) => {
      
      setFile(e.target.files[0]);
      postFile(e.target.files[0], user, setProgress,uid );


   }


   return (
      <div>
         <label htmlFor='asideLabel' className='aside__up btn-block'><span className='icon-cloud-upload'></span>Upload File</label>
         <input onChange={handleFileUpload} type="file" id="asideLabel" className='aside__inp' />
         {file?.name}
         {progress > 0 && 
            <progress value={progress} max="100"  className='aside__progress'/>
         }
      </div>

   )
}
