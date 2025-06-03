import React, { use } from 'react';
import { AuthContext } from './Pages/Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext)
    const location = useLocation()
    // console.log(location.pathname)

    if(loading){
       return <div className='flex justify-center'><span className="loading loading-spinner loading-sm"></span></div>
    } 

    if(!user) {
       return <Navigate to="/signIn" state={location.pathname}></Navigate>
    }
    return children
};

export default PrivateRoute;