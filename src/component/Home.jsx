import React from 'react'
import '../index.css'
import DropdownLink from './DropdownLink ';
import { Outlet } from 'react-router-dom';
// import One from './One';
// import Two from './Two';
// import Three from './Three';






function Home() {
  

  return (
    <div>
      <div className='containe main'>
        <div className='row'>
          <div className='col-12'>

            <div className="input-group mb-3">
              
              <DropdownLink></DropdownLink>
              
              <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
            </div>
          </div>
        </div>
      </div>
      
      <Outlet/>
      
    </div>
    
  )
}

export default Home
