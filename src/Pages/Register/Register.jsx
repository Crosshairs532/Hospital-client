import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
// import axios from 'axios';
const Register = () => {
    const goTo = useNavigate();
    const { createUser } = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e);
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        const name = e.target.name.value;
        console.log(email, password);
        const Ruser = { email, photo, name };

        createUser(email, password)
            .then(res => {
                if (res && res.user) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log("Email is verified.");
                    updateProfile(res.user, {
                        displayName: name,
                        photoURL: photo
                    })
                    // axios.post('http://localhost:3000/user', Ruser)
                    //     .then(res => {
                    //         console.log(res, "got responsed");
                    //     })
                    //     .catch(er => console.log(er))

                    fetch('http://localhost:3000/user', {
                        method: 'POST',
                        headers: {
                            "content-type": 'application/json',
                        }
                        ,
                        body: JSON.stringify(Ruser)
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))


                    return sendEmailVerification(res.user)
                        .then(() => {
                            console.log(res, "afafhajhfa");
                            return res.user;
                        });
                } else {
                    throw new Error('User object is undefined.');
                }
            })
            .then(user => {
                console.log(user, "omg this is user ");
                const checkVerificationInterval = setInterval(() => {
                    user.reload().then(() => {
                        if (user.emailVerified) {
                            clearInterval(checkVerificationInterval);

                            goTo('/')
                        }
                    });
                }, 2000);
            })
            .catch(er => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${er}`,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            });



    }
    return (

        <div>
            <div className="min-h-screen p-6 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h1 className=" text-white  md:text-6xl text-3xl lg:text-6xl text-center font-oxanium font-bold" >Register Now</h1>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div>
                                    <h1 className=" text-5xl font-oxanium font-extralight "> Hospital</h1>
                                </div>

                                <div className="lg:col-span-2">
                                    <form onSubmit={handleRegister}>
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-2 font-oxanium">
                                                <label htmlFor="Cname" className=" font-oxanium">Your Name:</label>
                                                <input type="text" name="name" id="name" required placeholder=" car name..." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>
                                            <div className="md:col-span-3 font-oxanium">
                                                <label htmlFor="Cphoto" className=" font-oxanium"> photo url:</label>
                                                <input type="text" name="photo" required id="photo" placeholder=" photo url..." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>

                                            <div className="md:col-span-3 font-oxanium">
                                                <label htmlFor="email" className=" font-oxanium">Email</label>
                                                <input type="email" name="email" id="Email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=" Enter Your Email" required />
                                            </div>
                                            <div className="md:col-span-3 font-oxanium">
                                                <label htmlFor="password" className=" font-oxanium">Password</label>
                                                <input type="password" name="password" id="pass" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=" Enter Your password" required />
                                            </div>

                                            <div className="md:col-span-5 text-right font-oxanium">
                                                <div className="inline-flex items-end">
                                                    <input type="submit" className="bg-[coral] hover:bg-[#a14828] text-center text-white font-bold py-2 px-4 rounded" value="Register Now" />
                                                </div>
                                            </div>
                                            <div className="md:col-span-3 text-left font-oxanium">
                                                <p className='my-4 text-center'>Already have an account?<Link className='text-orange-600 font-bold' to="/login">Log In</Link> </p>
                                            
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>


    );
};

export default Register;