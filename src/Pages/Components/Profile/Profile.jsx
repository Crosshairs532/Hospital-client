import { useContext, useRef } from "react";
import { AuthContext } from "../../../Authprovider/Authprovider";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import {
    useQuery,
} from '@tanstack/react-query'
import { Triangle } from "react-loader-spinner";
import { deleteUser, updatePassword } from "firebase/auth";
import auth from "../../../../firebase/firebase.config";
import useLoading from "../../../Hooks/useLoading";

const Profile = () => {
    const goTo = useNavigate();
    const Loading = useLoading();
    const passref = useRef(null);
    const { user } = useContext(AuthContext);
    console.log(user?.email);
    const { data, isLoading, isFetching, isFetched } =
        useQuery({
            queryKey: ['profile'],
            queryFn: async () => {
                const data = await fetch(`http://localhost:3000/user/profile?email=${user?.email}`);
                return await data.json();
            }
        })
    console.log(data, user, isLoading, isFetching, "emaasfjha");

    if (!isFetched) {
        return Loading
    }
    // if (!isLoading && data) {
    const { _id, name, email, photo } = data[0];
    console.log(_id);
    const updatePass = () => {
        const Curr = auth.currentUser;
        console.log(passref.current.value);
        if (passref.current.value <= 0) {
            return alert('Enter password')
        }
        updatePassword(Curr, passref.current.value)
            .then(() => {
                alert('password updated')
            })
            .catch((error) => {
                alert("Error updating password" + error.message)
            })
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(e.target.email.value)
        const email = e.target.email.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const updatedUser = { email, name, photo, _id }
        axios.put(`http://localhost:3000/user/profile?email=${user?.email}`, updatedUser)
            .then((res) => {
                console.log(res.data, "data")


                if (res.data.result.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Profile Updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(er => {
                console.log(er)
            })
    }

    const HandleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(auth.currentUser)
                    .then(() => {
                        // alert('deleted')
                        axios.delete(`http://localhost:3000/user/${_id}`)
                            .then(res => {
                                if (res.data.deletedCount > 0) {
                                    Swal.fire(
                                        'Deleted!',
                                        'Your file has been deleted.',
                                        'success'
                                    )
                                    goTo('/')
                                    console.log(res.data)
                                }
                            })
                        // .catch(er => console.log(er))
                        // goTo('/login')
                    })
                    .catch(er => console.log(er))
            }
        })
    }
    return (
        <>
            <div className=" ">
                <div className="min-h-screen p-6 flex items-center justify-center">
                    <div className="container max-w-screen-lg mx-auto">
                        <div>
                            <h1 className=" text-white  md:text-6xl text-3xl lg:text-6xl text-center font-oxanium font-bold" >Register Now</h1>

                            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                    <div className=" lg:grid-cols-1">
                                        <img src={data[0]?.photo} alt="" />
                                        <div className="md:col-span-3 font-oxanium">
                                            <button htmlFor="password" className=" font-oxanium btn outline-1 outline-red-700" onClick={updatePass} >Update Password</button>

                                            <input type="password" name="password" ref={passref} id="pass" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=" Enter Your password" required />
                                        </div>
                                    </div>

                                    <div className="lg:col-span-2">
                                        <form onSubmit={handleUpdate} >
                                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                                <div className="md:col-span-2 font-oxanium">
                                                    <label htmlFor="Cname" className=" font-oxanium">Your Name:</label>
                                                    <input type="text" defaultValue={data[0]?.name} name="name" id="name" required placeholder=" car name..." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                                </div>
                                                <div className="md:col-span-3 font-oxanium">
                                                    <label htmlFor="Cphoto" className=" font-oxanium"> photo url:</label>
                                                    <input type="text" defaultValue={data[0]?.photo} name="photo" required id="photo" placeholder=" photo url..." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                                </div>

                                                <div className="md:col-span-3 font-oxanium">
                                                    <label htmlFor="email" className=" font-oxanium">Email</label>
                                                    <input type="email" name="email" defaultValue={data[0]?.email} id="Email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=" Enter Your Email" required />
                                                </div>
                                                <div className="md:col-span-5 text-right font-oxanium">
                                                    <div className="inline-flex items-end">
                                                        <input type="submit" className="bg-[coral] hover:bg-[#a14828] text-center text-white font-bold py-2 px-4 rounded" value="Update Profile" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <button className=" font-oxanium outline-1 btn btn-outline outline-red-700" onClick={HandleDelete} >Delete Profile</button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
    // }
};

export default Profile;
