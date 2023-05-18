import React, { createContext, useState, useEffect, useContext } from 'react'
import { getFiles } from '../services/files';
import { AuthContext } from './AuthContext';

export const Files = createContext();


export const FilesProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [images, setImages] = useState([]);

  const [load, setLoad] = useState(true);

  const [selects, setSelects] = useState([]);
  const [trash, setTrash] = useState([]);

  const [trashed, setTrashed] = useState([]);

  const [ urlDownload, setUrlDownload] = useState('')
 



  // function for get images from db
  const fetchFiles = () => {
    setLoad(true)
    getFiles(user?.uid).then((images) => {
      setImages(images)
      setLoad(false)
    })

  }
// url for view image
  useEffect(() => {
    const files =  images.filter((i) => selects.includes(i.id))
    setUrlDownload(files[0]?.url)
   
  },[selects])

  useEffect(() => {
    
    fetchFiles()

  }, [user]);
 
  // to trash
  useEffect(() => {

    const trashed = images.filter((obj) => selects.includes(obj.id));
    const files = images.filter((obj) => !selects.includes(obj.id)); 
    setImages(files);
    setTrashed(prev => [...prev, ...trashed])


  }, [trash]);
  const onTrash = async () => {
    await setTrash(prev => [...prev, ...selects])
    setSelects([])
  }

  return (
    <Files.Provider value={{urlDownload, selects, setSelects, onTrash, trash, images, load, trashed,fetchFiles,setImages}}>
      {children}
    </Files.Provider>
  )
}
