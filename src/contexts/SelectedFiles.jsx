import React, { createContext, useState } from 'react'

export const SelectedFiles = createContext();


export const SelectedFilesProvider = ({children}) => {
  const [ selects, setSelects ] = useState([]);
  const [ trash, setTrash ] = useState([]);

  const onTrash = () => {
   setTrash(prev => [...prev, selects]) 
  }

  return (
    <SelectedFiles.Provider value={{selects, setSelects, onTrash, trash}}>
      {children}
    </SelectedFiles.Provider>
  )
}
