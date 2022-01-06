import React from 'react'
// import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


function Dashboard(props) {
    // const navigate = useNavigate();
    // navigate('/login', { replace: true })
    // const location = useLocation();
    // const { id } = useParams();
    // const query =new URLSearchParams(useLocation().search);
    // console.log(query.get("name"));
    
    return (
        <div>
            <h1>Dashboard</h1>
            {/* {location.pathname}
            {id} */}
           {/* {<Navigate to={'/login'} />} */}

        </div >
    )
}

export default Dashboard;