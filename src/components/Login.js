import React,{ useState } from 'react'
import { useNavigate } from "react-router-dom";


const Login = (props) => {

    const [creds,setCreds]=useState({"email":"","password":""});

    let navigate = useNavigate();
    
    const onChange = (e) => {
       setCreds({ ...creds, [e.target.name]: e.target.value });
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_LOCALHOST}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email:creds.email , password:creds.password }),

        });

        const json = await response.json();

        if (json.success){
            //Save auth token to local store and redirect
            localStorage.setItem("token",json.authtoken);
            props.showAlert("Logged In Successfully", "success");
            navigate("/");
        }
        else{
            props.showAlert("Invalid Credentials", "danger");
        }
    }

    return (
        <div>
            <h2>Login to your account</h2>
            <form onSubmit={handleSubmit} className='mt-4'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email'  value={creds.email} aria-describedby="emailHelp" onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={creds.password} id="password" onChange={onChange} />
                </div>
       
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
