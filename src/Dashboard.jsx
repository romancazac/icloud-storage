import { useContext, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { Aside } from "./components/aside/Aside"
import { TopActions } from "./components/topActions/TopActions"
import AuthContext from "./contexts/AuthContext"





function Dashboard() {
  
const {user} = useContext(AuthContext)


  return (
 

      <main className='wrapper__main'>
        <Aside />
        <div className="wrapper__body">
          <TopActions />
          <div className='wrapper__row card'>
            <Outlet/>
          </div>

        </div>
      </main>
   


  )
}

export default Dashboard
