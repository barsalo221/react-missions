import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../images/Logo.png'

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const { username, password, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  function userFilledAllFields(){
    return username.trim() && password.trim() && email.trim();
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if(userFilledAllFields()){
      await axios.post("http://localhost:8080/user", user)
      .then((response) => {
        if(response){
          console.log(response)
          navigate("/login");
              }
      })
      .catch((error) => {
        if(error.response.data.message === "userExists"){
          alert("username exists, choose another username");
        }
      })
  }
  else{
    alert("Please fill all fields");
  }
  };

  return (
    <div className="bg-cyan-300 h-screen ">
      <img class="object-fill h-48 w-48 bg-transparent container" src = {logo}  alt="image description"/>

      <div className="flex items-center bg-white mx-auto md:h-24- lg:py-0 bg-transparent">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow bg-white ">
          <h2 className="text-center m-4 text-black">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)} className="">
            <div className="mb-3 ">
              <label htmlFor="username" className="form-label text-blue-500">
              USER-NAME
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3 text-blue-500">
              <label htmlFor="password" className="form-label">
                PASSWORD
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-blue-500">
                E-MAIL
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your email address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className=" flex-row border-collapse text-center">
              <button type="submit" className="btn btn-outline-primary mx-16">
                <Link to={'/'}/>submit
             </button>
              <Link className="btn btn-outline-danger mx-16" to="/">
                Cancel
             </Link>
              
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
}