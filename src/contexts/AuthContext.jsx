import  { createContext, useEffect, useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export const AuthContext = createContext()

export const  AuthContextProvider = ({children}) => {
    
const [user, setUser] = useState('');

useEffect(() => {

    
    const unSub = onAuthStateChanged(auth, (user) => {
        setUser(user);

     });
     return () => {
        unSub();
     }
},[])
    return (
       <AuthContext.Provider value={{user}}>
             {children}
       </AuthContext.Provider>
    );
}

export default AuthContext;