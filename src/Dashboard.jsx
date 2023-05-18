import { useContext, useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Aside } from "./components/aside/Aside"
import { TopActions } from "./components/topActions/TopActions"





function Dashboard() {
  const navigate = useLocation()



  return (
 

      <main className='wrapper__main'>
        <Aside />
        <div className="wrapper__body">
          { navigate.pathname !== '/dashboard/basket' &&  <TopActions />  }
      
          <div className='wrapper__row card'>
            <Outlet/>
          </div>

        </div>
      </main>
   


  )
}

export default Dashboard
