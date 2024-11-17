import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/Firebase';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const auth = getAuth(app);
    // sign up user
    const newUser=(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)

    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, (user) => {
            // console.log(user.email);
            setUser(user.email)
        })
        return ()=>unsubscribe()
    },[])
    const info={
        newUser,
        setUser,
        user
    }
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;