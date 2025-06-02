import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.init";

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const profile = (profileData) =>{
    console.log(profileData)
    return updateProfile(auth.currentUser, profileData)
  }

  const signOutUser = () =>{
    setLoading(true)
    return signOut(auth)
  } 

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false)
        console.log('user in the auth state change', currentUser)
    });
    return () =>{
        unSubscribe()
    }
  }, []);
  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    SignInUser,
    signInWithGoogle,
    profile,
    signOutUser
  };
  return (
    <div>
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
