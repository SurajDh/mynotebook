import React, { useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";



const Navbar = () => {

  let location = useLocation();

  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  }

  const [username, setName] = useState('');

  const getName = async () => {
    const response = await fetch(`${process.env.REACT_APP_LOCALHOST}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "auth-token": localStorage.getItem('token'),
      }
    });

    const json = await response.json();
    setName(json.name);
  }
  getName();


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">MyNoteBook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="about">About</Link>
              </li>

            </ul>

            <form className="d-flex" role="search">

              {!localStorage.getItem('token') ? <div>
                <Link className="btn btn-primary mx-1" to="/login" role="button">LogIn</Link>
                <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
              </div> : <>
                 <span>
                <i className="fa-regular fa-user mx-2" > Welcome {username}</i>
                <button className="btn btn-primary mx-1" onClick={handleLogout} >Logout</button>
                  </span> 
              </>}
   
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
