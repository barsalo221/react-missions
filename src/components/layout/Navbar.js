import React from 'react'
import { Link } from 'react-router-dom' 
import logo from '../images/Logo.png'

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navnat-dark bg-black">
        <div className="container-fluid ">
          <img class="object-fill h-20 w-20 bg-white " src = {logo}  alt="logo"/>
          <h1 className='text-white text-base'>Pred-Sport</h1> 
            
            {/* <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button> */}
            
            <Link className='btn btn-outline-light' to='/home'> home</Link>
        </div> 
    </nav>



    </div>

  )
}
