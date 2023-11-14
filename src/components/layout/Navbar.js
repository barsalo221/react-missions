import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import logo from '../images/Logo.png';

export default function Navbar() {
  const [cookies, setCookies, removeCookies] = useCookies(['username', 'password']);

  const handleLogout = () => {
    // Remove the cookies and redirect to the home page
    removeCookies('userName');
    removeCookies('password');
  };

  return (
    <nav className="bg-black p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl">
          <img className="md:cursor-pointer w-20 h-13 " src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link className='py-5 px-3 inline-block hover:bg-gray-700 text-white' to='/home'> home</Link>
          <div className="group relative">
            <button className="py-5 px-3 inline-block hover:bg-gray-700 text-white">Tables</button>
            <div className="hidden group-hover:block absolute mt-2 bg-black text-white w-32 shadow-lg rounded">
              <ul className="space-y-2 p-2">
                <li>
                  <Link className='hover:bg-gray-700 text-white' to='/tableplayers-21'> table 2021</Link>
                </li>
                <li>
                  <Link className='hover:bg-gray-700 text-white' to='/tableplayers-22'>table 2022</Link>
                </li>
                <li>
                  <Link className='hover:bg-gray-700 text-white' to='/tableplayers-23'> table 2023</Link>
                </li>
                <li>
                  <Link className='hover:bg-gray-700 text-white' to='/tableplayers-24'> table 2024</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Conditionally display the "Logout" button */}
          {cookies.userName && cookies.password && (
            <Link className="py-5 px-3 inline-block hover:bg-red-700 text-white" onClick={handleLogout} to='/'>
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}