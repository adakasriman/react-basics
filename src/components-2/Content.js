import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'

export default function Content() {
    const [isLoggedIn, setisLoggedIn] = useState(localStorage.getItem("logedin"));
    return (
        <div className='mt-5'>
            {/* {props.children} */}
           <h1> Content page.</h1>
           <Routes>
               <Route path="new-user" element={<p>this is new user</p>}></Route>
           </Routes>
           {isLoggedIn === null && <Navigate to={'/login'} />}
        </div>
    )
}
