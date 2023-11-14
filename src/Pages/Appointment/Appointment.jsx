/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import Swal from "sweetalert2";

// import Datepicker from '../pages/Datepicker'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Authprovider/Authprovider";
import Time from "./Time";


const Appointment = () => {
    const { user } = useContext(AuthContext);
    const [appointmentTime, setAppointmentTime] = useState(new Date());
    // const [postdate, setPostdate] = useState(new Date());
    const [value, onChange] = useState('10:00');
    // const [ampm, setAmPm] = useState('AM');
    const handleAppointment = (e) => {
        e.preventDefault();
        const Pname = e.target.Pname.value;
        const Page = e.target.Page.value;
        const Pgender = e.target.Pgender.value;
        const address = e.target.address.value;
        const Ddpt = e.target.Ddpt.value;
        const number = e.target.number.value;
        const Dname = e.target.Dname.value;
        const Pstatus = e.target.Pstatus.value;
        const Pemail = e.target.Pemail.value;
        const ampm = e.target.ampm.value;
        // const postdate1 = postdate.toISOString().split('T')[0];
        const appointment = appointmentTime.toISOString().split('T')[0];
        const patient_app_detail = {
            Pname,
            Page,
            Pgender,
            address,
            Ddpt,
            number,
            Dname,
            Pstatus,
            Pemail,
            ampm,
            appointment,
            status: "pending"
        }
        console.log(patient_app_detail);

        fetch('http://localhost:3000/appointments', {

            method: "POST",
            headers: {
                "content-type": 'application/json'
            }
            ,
            body: JSON.stringify(patient_app_detail)
        })
            .then(res => res.json())
            .then(data => {

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully appointment added',
                    showConfirmButton: false,
                    timer: 1500
                })
                e.target.reset();
            })

    }
    // const handleAmPmChange = (e) => {
    //     setAmPm(e.target.value);
    // };
    return (
        <div>
            {/* <Helmet>
                <title>SkillSafari | Add a Job</title>
            </Helmet> */}

            <div className="min-h-screen p-6 flex items-center justify-center font-poppins">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h1 className=" text-green-800  md:text-6xl text-3xl lg:text-6xl text-center font-oxanium font-bold" >Doctor Appointment</h1>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div>
                                    <h1 className=" text-5xl font-extrabold text-[#355221]"> Hp</h1>
                                </div>

                                <div className="lg:col-span-2">
                                    <form onSubmit={handleAppointment}>
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-2 ">
                                                <label htmlFor="Pname" className=" text-xl font-bold">Patient Name:</label>
                                                <input type="text" name="Pname" id="Pname" placeholder=" post Your name... " defaultValue={user?.displayName} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>
                                            <div className="md:col-span-3 ">
                                                <div className=" flex gap-1">
                                                    <div>
                                                        <label htmlFor="Page" className=" text-xl font-bold">Age:</label>
                                                        <input type="text" name="Page" id="Page" placeholder=" Age..." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Pgender" className=" text-xl font-bold">Gender:</label>
                                                        <input type="text" name="Pgender" id="Pgender" placeholder=" gender..." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />

                                                    </div>
                                                </div>

                                            </div>

                                            <div className="md:col-span-5 ">
                                                <label htmlFor="address" className="text-xl font-bold">Address:</label>
                                                <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=" type brand name" />
                                            </div>

                                            <div className="md:col-span-3 ">
                                                <label htmlFor="Ddpt" className=" text-xl font-bold">Speciality:</label> <br />
                                                <select name="Ddpt" id="Ddpt" className=" bg-gray-50 h-10 border mt-1 rounded px-4 w-full">
                                                    <option >Heart Deasease</option>
                                                    <option >Dental </option>
                                                    <option >Huntington's</option>
                                                    <option >Hepatology</option>
                                                    <option >Respiritory</option>
                                                    <option>Otology</option>

                                                </select>
                                            </div>
                                            <div className="md:col-span-2">
                                                <label htmlFor="date" className=" text-xl font-bold">Appointment Time</label>
                                                <DatePicker
                                                    dateFormat="yyyy/MM/dd"
                                                    showIcon
                                                    selected={appointmentTime}
                                                    onChange={(date) => setAppointmentTime(date)}
                                                />
                                            </div>

                                            <div className="md:col-span-5 ">
                                                <div className=" flex gap-2">
                                                    <div>
                                                        <label htmlFor="number" className=" text-xl font-bold">Phone Number:</label>
                                                        <input type="number" name="number" id="number" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Phone Number.." />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Pemail" className=" text-xl font-bold">Patient Email:</label>
                                                        <input type="Pemail" name="Pemail" id="Pemail" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Enter Your Email.." />


                                                    </div>

                                                </div>
                                            </div>
                                            <div className=" md:col-span-5 ">
                                                <div className=" flex gap-3">
                                                    <div>
                                                        <label className=" text-xl font-bold" htmlFor="description">Doctor Name:</label>
                                                        <input name="Dname" type="text" placeholder=" Enter doctor name ...." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />

                                                    </div>
                                                    <div>
                                                        <label htmlFor="Pstatus" className=" text-xl font-bold">Emergency Status:</label> <br />
                                                        <select name="Pstatus" id="Pstatus" className=" bg-gray-50 h-10 border mt-1 rounded px-4 w-full">
                                                            <option >Yes</option>
                                                            <option >No </option>


                                                        </select>



                                                    </div>
                                                </div>
                                            </div>

                                            <div className="md:col-span-2 ">
                                                <label htmlFor="ampm" className=" text-lg font-bold  text-gray-700">AM/PM</label>
                                                <div className=" flex gap-3">
                                                    <Time onChange={onChange} value={value}></Time>
                                                    <select id="ampm" name='ampm'  >
                                                        <option value="AM">AM</option>
                                                        <option value="PM">PM</option>
                                                    </select>
                                                </div>
                                            </div>


                                            <div className="md:col-span-5 text-right ">
                                                <div className="inline-flex items-end">
                                                    <button className=" bg-cyan-600 hover:bg-[#a14828] text-white font-bold py-2 px-4 rounded">Submit </button>
                                                </div>
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

export default Appointment;
