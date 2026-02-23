import React, { useState } from 'react'
import { AuthContext } from './AuthContext'
import { auth } from '../../firebase/firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
export const AuthProvider = ({ children }) => {

    const [user , setUser] = useState(null);

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const authInfo = {
        registerUser,
        loginUser,
        forgetPassword,
        signInWithGoogle,
        user
    }

  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  )
}
