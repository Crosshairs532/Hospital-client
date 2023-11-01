/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";


export const AuthContext = createContext();
const Authprovider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, useLoading] = useState([])

    const Fbprovider = new FacebookAuthProvider();
    const Googleprovider = new GoogleAuthProvider();

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithfacebook = () => {
        return signInWithPopup(auth, Fbprovider)
    }

    const signInWithgoogle = () => {
        return signInWithPopup(auth, Googleprovider)
    }
    const logout = () => {
        return signOut(auth);
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, cUser => {
            setUser(cUser)
            console.log(cUser);
        })
        return () => unSubscriber()
    }, [])

    const authInfo = { signIn, signInWithfacebook, signInWithgoogle, logout, user, createUser }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;