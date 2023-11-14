/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import img3 from '../../assets/login.svg'
import './Login.css'
import { useContext, useRef } from "react";
import { AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsFillKeyFill } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from "../../Authprovider/Authprovider";
import { FacebookAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
import Swal from "sweetalert2";


const Login = () => {
    // const Fbprovider = new FacebookAuthProvider();
    // const Googleprovider = new GoogleAuthProvider();
    const { signIn, signInWithgoogle, signInWithfacebook } = useContext(AuthContext);
    const emailRef = useRef(null);

    const goTo = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const users = { email, password };
        // console.log(email, password);
        signIn(email, password)
            .then(res => {

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                goTo('/')
            })
            .catch(er => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: er.message,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })
    }

    // const signInWithgoogle = () => {
    //     // const provider = new GoogleAuthProvider();
    //     signInWithPopup(auth, Googleprovider)
    //         .then(res => {
    //             const acc = linkFacebookAccount();
    //             console.log(acc, "acccccccccccc");
    //         })
    //         .catch()
    //     return;
    // }

    // // Function to sign in with Facebook
    // const signInWithFacebook = () => {
    //     // const provider = new auth.FacebookAuthProvider();
    //     signInWithPopup(auth, Fbprovider)
    //         .then()
    //         .catch()
    //     return;
    // }



    const handlesignInwithpopup = (googleandfacebook) => {
        googleandfacebook()
            .then(res => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: "succesfully singed in",
                    showConfirmButton: false,
                    timer: 1500
                })
                const { displayName, photoURL, email } = res.user;
                const Cuser = { name: displayName, photo: photoURL, email }
                console.log(res.user, "loginnnnn")
                fetch('http://localhost:3000/user', {
                    method: 'POST',
                    headers: {
                        "content-type": 'application/json',
                    }
                    ,
                    body: JSON.stringify(Cuser)
                })
                    .then(res => res.json())
                    .then(data => console.log(data, "login"))
            })
            .catch(er => console.log(er))

    }







    const handleForget = () => {
        const email = emailRef.current.value;
        if (!emailRef.current.value) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Enter email before you proceed',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
        console.log(emailRef.current.value);
        sendPasswordResetEmail(auth, email)
    }


    return (
        <div>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={img3} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-control mt-2">

                                    <div className=" flex items-center gap-3">
                                        <AiOutlineMail className=" text-3xl"></AiOutlineMail><input type="email" ref={emailRef} name='email' placeholder="email" className="input input-bordered w-full" required />
                                    </div>
                                </div>
                                <div className="form-control my-6">

                                    <div className=" flex items-center gap-3">
                                        <BsFillKeyFill className=" text-3xl"></BsFillKeyFill>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered w-full" required />

                                    </div>
                                    <label className="label">
                                        <p onClick={handleForget} className="label-text-alt link link-hover">Forgot password?</p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='my-4 text-center'>New here?<Link className='text-orange-600 font-bold' to="/register">Sign Up</Link> </p>
                            <p>Login with </p>
                            <div className=" flex gap-4">
                                <h1 onClick={() => handlesignInwithpopup(signInWithgoogle)} className=" text-4xl text-sky-800"><FcGoogle /></h1>
                                <h1 onClick={() => handlesignInwithpopup(signInWithfacebook)} className=" text-4xl"><BsFacebook /></h1>
                                {/* <h1 onClick={signInWithgoogle} className=" text-4xl text-sky-800"><FcGoogle /></h1>
                                <h1 onClick={signInWithFacebook} className=" text-4xl"><BsFacebook /></h1> */}

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;