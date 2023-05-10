import { Outlet } from "react-router-dom"
import { Aside } from "./components/aside/Aside"
import { TopActions } from "./components/topActions/TopActions"





function Dashboard() {


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
