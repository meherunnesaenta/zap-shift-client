import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { auth } from '../../firebase/firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
export const AuthProvider = ({ children }) => {

    const [user , setUser] = useState(null);
    const [loading, setloading]=useState(true);

    const registerUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const forgetPassword = (email) => {
        setloading(true);
        return sendPasswordResetEmail(auth, email);
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setloading(true);
        return signOut(auth);
    }
    const updatePhoto =(profile)=>{
      setloading(true);
      return updateProfile(auth.currentUser,profile)
    }

    useEffect(()=>{
     const unSubcribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setloading(false);
     })
     return unSubcribe;
    },[])

    const authInfo = {
        registerUser,
        loginUser,
        forgetPassword,
        signInWithGoogle,
        user,
        loading,
        logOut,
        updatePhoto
    }

  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  )
}
