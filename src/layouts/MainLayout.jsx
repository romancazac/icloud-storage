import { Header } from '../components/header/Header'
import {  Outlet } from 'react-router-dom'


import '../assets/scss/style.scss'


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


