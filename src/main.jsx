import React from 'react'
import ReactDOM from 'react-dom/client'
import './firebase'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { AuthContextProvider } from './contexts/AuthContext'
import { FilesProvider } from './contexts/Files'



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthContextProvider>
      <FilesProvider>
        <RouterProvider router={router} />
      </FilesProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
