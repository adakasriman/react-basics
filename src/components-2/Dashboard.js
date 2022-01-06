import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';


function Dashboard() {
    const [isLoggedIn, setisLoggedIn] = useState(localStorage.getItem("logedin"));
    // setisLoggedIn(1);
    return (
        <div>
            <h1>Dashboard</h1>
            {isLoggedIn === null && <Navigate to={'/login'} />}
        </div >
    )
}
               
export default Dashboard;