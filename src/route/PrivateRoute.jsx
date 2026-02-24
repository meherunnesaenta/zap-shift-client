import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router';


export const PrivateRoute = ({children}) => {
    const {user,loading} =useAuth();
    if(loading){
        return <div classname="h-100 text-center">loading....</div>
    }
    if(!user){
        return <Navigate to='/auth/login'></Navigate>
    }
  return children;
}
