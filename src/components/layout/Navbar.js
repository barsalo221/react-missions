import React from 'react'
import { Link } from 'react-router-dom' 
import logo from '../images/Logo.png'

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navnat-dark bg-black">
        <div className="container flex-row">
          <img class="object-fill h-20 w-20 bg-white " src = {logo}  alt="logo" />
            <Link  className='btn btn-outline-light' to='/'>Pred Sport</Link>            
                      
            <Link className='btn btn-outline-light' to='/tableplayers'> table 2023</Link>

            <Link className='btn btn-outline-light' to='/tableplayers-22'> table 2022</Link>

            <Link className='btn btn-outline-light' to='/tableplayers-21'> table 2021</Link>

            <Link className='btn btn-outline-light' to='/home'> home</Link>
        </div> 
    </nav>



    </div>

  )
}
