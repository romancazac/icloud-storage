import  { createContext, useEffect, useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export const AuthContext = createContext()

export const  AuthContextProvider = ({children}) => {
    
const [user, setUser] = useState('');
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {

    
    const unSub = onAuthStateChanged(auth, (user) => {
      setIsLoading(false)
        setUser(user);
        setIsLoading(false)
     });
     return () => {
        unSub();
     }
},[])
    return (
       <AuthContext.Provider value={{user,isLoading}}>
             {children}
       </AuthContext.Provider>
    );
}

