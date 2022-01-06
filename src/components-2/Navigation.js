import React from 'react'
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <nav className="navb">
                <ul className='navbar nav-items bg-dark w-100'>
                    <li className="nav-item">
                        <NavLink className="nav-link style-setup" to={"/"}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link style-setup" to={"/projects"} >Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link style-setup" to={"/dashbord"} >Dashbord</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link style-setup" to={"/content"} >Content</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link style-setup" to={"/about"} >About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link style-setup" to={"/logout"} onClick={()=>localStorage.clear()} >Logout</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link style-setup" to={"/login"} >login</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;
