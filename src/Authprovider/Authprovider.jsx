/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";


export const AuthContext = createContext();
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const Fbprovider = new FacebookAuthProvider();
    const Googleprovider = new GoogleAuthProvider();

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithfacebook = () => {
        setLoading(true)
        return signInWithPopup(auth, Fbprovider)
    }

    const signInWithgoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, Googleprovider)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, cUser => {
            setUser(cUser)
            setLoading(false)
            console.log(cUser);
        })
        return () => unSubscriber();
    }, [])
    const authInfo = { signIn, signInWithfacebook, signInWithgoogle, logout, user, createUser, loading, setLoading }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;