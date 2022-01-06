import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
// import {useRouteMatch} from 'react-router-dom'; 

export default function Projects() {
    const [isLoggedIn, setisLoggedIn] = useState(localStorage.getItem("logedin"));
    // let match = useRouteMatch();
    return (
        <div>
            <h2>Projects</h2>
            {isLoggedIn === null && <Navigate to={'/login'} />}
        </div>
    )
}
