import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Authprovider/Authprovider";
import Swal from "sweetalert2";

const Headers = () => {
    const { user, logout, loading } = useContext(AuthContext)
    const [CUser, setUser] = useState({});

    console.log(user);
    const goTo = useNavigate();
    console.log(user);
    useEffect(() => {
        fetch('http://localhost:3000/user')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const Cuser = data.filter(i => i.email == user?.email);
                setUser(Cuser)
            })
    }, [user?.email])
    // console.log(CUser[0]?.name, "headdddd");
    const handleLogout = () => {
        logout()
            .then(res => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sucessfully Logged Out',
                    showConfirmButton: false,
                    timer: 1500
                })
                goTo("/login");

            })
            .catch(er => console.log(er))

    }
    const nav_items =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/doctors'>Doctors</NavLink></li>
            <li><NavLink to='/appointment'>Appointment</NavLink></li>
            <li><NavLink to='/contact'>Contact Us</NavLink></li>



        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                nav_items
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">HP</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            nav_items
                        }
                    </ul>
                </div>
                {<div className="navbar-end">
                    {!user ? <><Link to='/login' className="btn btn-outline btn-error">Login </Link><Link to='/register' className="btn btn-outline btn-error">Register Now</Link></> :


                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={CUser[0]?.photo} />
                                        {/* <img src={CUser[0]?.photo} /> */}
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Name: {CUser[0]?.name}

                                        </a>
                                    </li>
                                    <li><Link to='/profile'>Profile</Link></li>
                                    <li>                    <button onClick={handleLogout} >Logout</button>
                                    </li>
                                    <li><Link>patient diagnosis report</Link></li>
                                </ul>
                            </div>
                        </>
                    }



                </div>}
            </div>

        </div>
    );
};

export default Headers;