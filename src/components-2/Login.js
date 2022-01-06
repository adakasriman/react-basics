import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLogedIn, setIsLogedIn] = useState(localStorage.getItem("logedin"));
    // const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        if (username === "sriman" && password === "sriman") {
            console.log("login sucessful");
            localStorage.setItem("logedin", 1);
            setIsLogedIn(0);
        } else {
            alert("wrong username/password");
        }
    }
    return (
        <div>
            <form className='w-25 m-auto' onSubmit={login}>
                <input className='form-control-lg m-3 border' type="text" placeholder='username' value={username} onChange={(e) => setUserName(e.target.value)} />
                <input className='form-control-lg m-3  border' type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='btn btn-primary m-3 w-50' type="submit">submit</button>
                {isLogedIn !== null && <Navigate to={'/dashbord'} />}
            </form>
        </div>
    )
}

export default Login;
