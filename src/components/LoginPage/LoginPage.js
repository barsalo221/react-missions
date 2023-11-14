import React from 'react'
import { useState } from 'react'
import logo from '../images/Logo.png'
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: "",
      });
    function onChange(event){
        const value = event.target.value;
        const field = event.target.getAttribute("data-input"); 
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser);
    }
    function userFilledAllFields(){
        return user.username.trim() && user.password.trim();
      }
    const onLoginPress = async (e)=>{
        e.preventDefault();
        if(userFilledAllFields()){
            await axios.post("http://localhost:8080/user/login", user,{
                body:JSON.stringify(user), 
                credentials:"omit",
                headers: {
                    "Content-Type": "application/json",
                  }})
            .then((response)=>{
                if(response.data === true){
                    document.cookie = `userName=${user.username}`;
                    document.cookie = `password=${user.password}`;
                    navigate("/home")
                    window.location.reload();
                    }else{
                        alert("User not found, check your password again");
                    }
                })
            .catch((error) => {
                if(error.response.data.errorMessage === "UserNotFound"){
                    alert("User not found, check your username or password again");
                }
                console.log(error);
                })
        }else{
            alert("Please fill all fields");
        }
      
    }

    return (
        <div className='bg-cyan-300'>
            <div className='container mb-8 p-4'>
                <h1>
                    <img class="mr-16 w-40 h-40 max-w-2xl container " src={logo} alt="logo"/>
                    Pred - Sport</h1> 
            </div>
            <section className="dark:bg-gray-900 pr-96 container h-screen">
                <div className="flex flex-col items-center mx-auto md:h-screen lg:py-0 bg-transparent mb-28 ">
                    
                    <div className=" w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ml-72 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className='container'>
                                Sign in 

                            </h1>   
                            
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                                <input type="username" name="username" placeholder="enter your username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                value={user.username} 
                                onChange={onChange} 
                                data-input="username"  
                                />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={user.password} 
                                onChange={onChange}
                                data-input="password"
                                />
                            </div>
                            {/* <Link className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                                to={'/home'}
                            >sign in</Link> */}
                           
                            <button type="button" 
                            className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            onClick={(e) => onLoginPress(e)}> Sign in </button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? 
                                <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500"><br/>Sign up</a>
                            </p>
                        </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
  )
}
