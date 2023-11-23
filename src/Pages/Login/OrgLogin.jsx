/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import img3 from '../../assets/login.svg'
import './Login.css'
import { useContext, useEffect, useRef, useState } from "react";
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
        const role = e.target.role.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const users = { email, password };
        // console.log(email, password);
        signIn(email, password)
            .then(res => {
                console.log(res);
                goTo('/')
            })
            .catch(er => console.log(er))
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
    const [status, setStatus] = useState('valid');
    const [color, setColor] = useState('green-600')
    const [Expiration_date, setExpire] = useState(new Date(2023, 10, 29))
    useEffect(() => {
        const today = new Date(2023, 10, 29);

        const seven_days_before = new Date(Expiration_date.getTime() - 7 * 24 * 60 * 60 * 1000);
        const seven_days_after = new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000);
        console.log(`Today:${today.getDate()}  <>   Expiration: ${Expiration_date.getDate()}  <>  seven_days_after: ${seven_days_after.getDate()}  <>  seven_days_before: ${seven_days_before.getDate()}`)
        if ((Expiration_date.getDate() - today.getDate()) <= 0) {
            console.log(Expiration_date.getDate() - today.getDate(), "helo");
            setStatus("Expired")
            setColor('red-400')
        }
        else if ((0 < (Expiration_date.getDate() - today.getDate())) && (Expiration_date.getDate() - today.getDate()) <= 6) {
            console.log(typeof (Expiration_date.getDate() - today.getDate()), "helo");
            setStatus(' expiration is near')
            setColor('yellow-500')
        }
    }
        , [Expiration_date])



    const handlesignInwithpopup = (googleandfacebook) => {
        googleandfacebook()
            .then(res => {
                alert('sign in')
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

                    <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className={` text-${color}`}> {status} </h1>
                            <h1 className="text-3xl text-center font-bold">Organization Login</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-control mt-5 ">
                                    <div >
                                        <select name="role" id="role" className=" input input-bordered w-full items-center gap-3" required>
                                            <option>Select Role</option>
                                            <option value='admin'>Admin</option>
                                            <option value='doctor'>Doctor</option>
                                            <option value='pharmacist'>Pharmacist</option>
                                        </select>

                                    </div>

                                </div>
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


                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;