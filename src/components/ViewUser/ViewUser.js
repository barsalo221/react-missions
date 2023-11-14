
import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    await axios.get(`http://localhost:8080/secured/user/${id}`,{ withCredentials: true } )
    .then(response => {
      setUser(response.data);
    })
    .catch(error =>
    console.log(error));

  };

  return (
    <div className="">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <b>password:</b>
                  {user.password}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/users"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}