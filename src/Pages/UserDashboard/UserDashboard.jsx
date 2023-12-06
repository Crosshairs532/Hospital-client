/* eslint-disable no-unused-vars */
// import { FaOpencart } from "react-icons/fa6";
// import { FaBook, FaHome, FaList, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
// import { MdRateReview } from "react-icons/md";

import { NavLink, Outlet } from "react-router-dom";

import { SiHomebridge } from "react-icons/si";
const UserDashboard = () => {

    return (
        <div className="drawer min-h-screen lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content py-4">
                <label htmlFor="my-drawer-2" className="btn bg-neutral-300 drawer-button lg:hidden"></label>
                <div className="flex-1 px-6">
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side bg-green-700">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full text-base-content">
                    <li className="  flex justify-center items-center pb-8 font-Nunito font-semibold"><NavLink to={'/'}><SiHomebridge size={50} /></NavLink></li>
                    <li className=" text-xl font-Nunito font-semibold"><NavLink to='/userDashboard/profile'>Profile</NavLink></li>
                    <li className=" text-xl font-Nunito font-semibold"><NavLink to='/userDashboard/appointment'>Appointment</NavLink></li>
                    <li className=" text-xl font-Nunito font-semibold"><NavLink to='/userDashboard/admission'>Admission Form</NavLink></li>
                    <li className=" text-xl font-Nunito font-semibold"><NavLink to='/userDashboard/test'>Schedule for Test</NavLink></li>
                    <li className=" text-xl font-Nunito font-semibold"><NavLink to='/userDashboard/allTest'>Tests Record</NavLink></li>
                    <li className=" text-xl font-Nunito font-semibold"><NavLink to='/userDashboard/allReports'>Attached Report</NavLink></li>
                    <li className=" text-xl font-Nunito font-semibold"><NavLink to='/userDashboard/applist'>Appointment List</NavLink></li>
                </ul>
            </div>
        </div >

    );
};

export default UserDashboard;