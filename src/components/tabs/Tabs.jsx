import {useState} from 'react'

import './Tabs.scss'
export const Tabs = ({dataTabs}) => {
   const [open, setOpen] = useState(1);
 
   return (
      <div className='tab'>
         <nav className="tab__nav">
            {
               dataTabs.map((i) => 
               <button onClick={() => setOpen(i.id)} key={i.id} 
               className={`tab__btn ${open === i.id ? '_active' : ''}`}
               
               >{i.name}</button>)
            }

         </nav>

         {
            dataTabs.map((i) =>
               open === i.id &&
               <div className="tab__body" key={i.id}>
                  {i.form}
               </div>

            )
         }

      </div>
   )
}
