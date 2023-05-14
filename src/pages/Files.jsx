import { useContext, useState, useEffect } from 'react'

import { CardFile } from '../components/cardFile/CardFile'
import AuthContext from '../contexts/AuthContext';
import { getFiles } from '../services/getFiles';

export const Files = () => {
  const { user } = useContext(AuthContext);


  const [images, setImages] = useState([]);

  useEffect(() => {
    getFiles(user.uid).then((images) => setImages(images))
    
  }, []);

  return (
    <>

      {
        images.map((i,index) =>  <CardFile {...i} key={i.index}/>)
         
        
      }

    </>
  )
}
