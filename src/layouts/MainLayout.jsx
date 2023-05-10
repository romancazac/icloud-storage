import '../assets/scss/style.scss'
import { Aside } from '../components/aside/Aside'

import { Header } from '../components/header/Header'
import { TopActions } from '../components/topActions/TopActions'

import { Outlet } from 'react-router-dom'

export const MainLayout = () => {


   return (
      <div className="wrapper">
         <Header />
         <div className="container">
           <Outlet/>
         </div>

      </div>
   )
}


