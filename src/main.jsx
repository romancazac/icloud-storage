import React from 'react'
import ReactDOM from 'react-dom/client'
import './firebase'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { AuthContextProvider } from './contexts/AuthContext'
import { SelectedFilesProvider } from './contexts/SelectedFiles'



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthContextProvider>
      <SelectedFilesProvider>
        <RouterProvider router={router} />
      </SelectedFilesProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
