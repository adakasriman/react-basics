// import userEvent from '@testing-library/user-event';
import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function LocalStroge() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = (e) => {
        e.preventDefault();
        const valuesStroage = JSON.parse(localStorage.getItem("values")) || [];
        const userDetails = {
            userName,
            email,
            password
        }
        // let userExit = false;
        const isUserExit = valuesStroage.find(user => user.userName === userDetails.userName);
        if (isUserExit) {
            alert("already login");
        } else {
            valuesStroage.push(userDetails);
            //  console.log(isUserExit);
        }
        localStorage.setItem("values", JSON.stringify(valuesStroage));
        setUserName("");
        setPassword("");
        setEmail("");
    }
    return (
        <div>
            <input type="text" placeholder='userName' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={login}>Login</button>
        </div>
    )
}
