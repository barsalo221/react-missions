import React from 'react';
import { useNavigate} from 'react-router-dom';
import logo from '../images/Logo.png'
import ImageGif from '../images/logoGif.gif';


const HomePage = () => {
  const navigate  = useNavigate();
  return (
    <div className='rounded-bl-lg py-5 bg-cyan-100 h-screen shadow container' 
    style={{
      backgroundImage: "url(" + ImageGif + ")",
      backgroundSize: "cover",
      backgroundPosition: 'center',
      height: "100vh"
    }}
    >
      
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-emerald-400 md:text-5xl lg:text-6xl"><span className="text-transparent font-sans bg-clip-text bg-gradient-to-r to-lime-300 from-teal-300">Welcome To</span> <span className="text-transparent font-sans bg-clip-text bg-gradient-to-r to-yellow-300 from-red-300">Pred Sport</span> <></></h1>
      
      <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row container p-3 mb-10 mt-10">
        <img className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src= {logo} alt="" />
        <div className="flex flex-col justify-start p-6">
          <p className="mb-4 text-lg text-neutral-600 dark:text-neutral-200">Here at Pred-Sport we focus on NBA players, statistics and predict the future statistics of players<br/> come in to try and be impressed.</p>
        </div>
      </div>
      <div className='mt-40'>

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
