import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import logo from '../images/LogoWeb.png'

const HomePage = () => {
  const navigate  = useNavigate();
  return (
    <div className='container rounded-bl-lg mt-40 bg-transparent flex shadow' >
      {/* <img class="object-fill h-48 w-96 bg-transparent " src = {logo}  alt="image description"/> */}
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-emerald-400 md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-lime-300 from-teal-300">WELCOME TO</span> <span class="text-transparent bg-clip-text bg-gradient-to-r to-yellow-300 from-red-300">Pred-Sport</span> <></></h1>
      <p className="text-lg font-bold text-blue-400 lg:text-2xl dark:text-black">Here at Pred-Sport we focus on NBA players, statistics and predict the future statistics of players<br/> come in to try and be impressed.</p>

      <div className='flex shadow'>

        <button 
        className=' text-black bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-extrabold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  ' 
        onClick={ () => {
            navigate("/login")
        }}>
        Log In
        </button>
        <button 
        className='text-black bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-extrabold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
        onClick={ () => {
          navigate("/signup")
      }}>
        Sign Up</button>
      
      </div>
      </div>
  );
};

export default HomePage;
