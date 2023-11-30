import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "./firebase.config";


export const AuthContext=createContext(null)
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const provider=new GoogleAuthProvider();
    const signUp=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }
    const updateUserProfile=(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            
            
        })
        
        return ()=>{
            return unSubscribe();
        }
        
        }
            
            
            
            )

    const userInfo={
        user,loading,signUp,signIn,logOut,updateUserProfile,googleSignIn
    }
    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;