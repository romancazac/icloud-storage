import React, { useContext, useState } from 'react'

import { AuthContext } from '../../contexts/AuthContext';
import { postFile } from '../../services/files';
import uuid from 'react-uuid';
import { Files } from '../../contexts/Files';
export const Upload = () => {
   // generate id from file
   const uid = uuid()

   const { user } = useContext(AuthContext)
   const { fetchFiles} = useContext(Files)

   const [file, setFile] = useState();
   const [progress, setProgress] = useState(0);
 

   const handleFileUpload = async (e) => {

      setFile(e.target.files[0]);
      await postFile(e.target.files[0], user, setProgress, uid);

      await  fetchFiles()

     setTimeout(() => {
      setFile('');
      setProgress(0)
     },1500)

   }


   return (
      <div>
         <label htmlFor='asideLabel' className='aside__up btn-block'><span className='icon-cloud-upload'></span>Upload File</label>
         <input onChange={handleFileUpload} type="file" id="asideLabel" className='aside__inp' />
         {file?.name}
         {progress > 0 &&
            <progress value={progress} max="100" className='aside__progress' />
         }
      </div>

   )
}
