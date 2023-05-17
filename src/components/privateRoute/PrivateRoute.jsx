import React, { useContext, useEffect,useState } from 'react';
import { Navigate } from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';
import { Spinner } from '../spinner/Spinner';

export const PrivateRoute = ({children}) => {
    const {user,isLoading} = useContext(AuthContext);


    if (isLoading) {
        return <Spinner/>
    }

  
    if (!user) {
      return <Navigate to="/auth" />;
    }
   
    return children
}

