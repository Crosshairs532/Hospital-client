/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import Time from "../../Appointment/Time";
import { AuthContext } from "../../../Authprovider/Authprovider";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";

const Update = ({ appointments }) => {
    const {
        _id,
        Pname,
        ATime,
        Page,
        Pgender,
        address,
        Ddpt,
        number,
        Dname,
        Pstatus,
        Pemail,
        ampm, appointment } = appointments
    const [appointmentTime, setAppointmentTime] = useState(new Date());
    const [value, onChange] = useState(ATime);
    const { user } = useContext(AuthContext);
    const handleUpdate = (e) => {
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
        const ATime = value;
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
            ATime,
            appointment,
            status: "pending"
        }
        fetch(`http://localhost:3000/appointments/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(patient_app_detail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You have updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }

    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="btn btn-outline btn-xs text-cyan-600 outline-cyan-600">Update</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
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
                                            <form onSubmit={handleUpdate}>
                                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                                    <div className="md:col-span-2 ">
                                                        <label htmlFor="Pname" className=" text-xl font-bold">Patient Name:</label>
                                                        <input type="text" name="Pname" id="Pname" placeholder=" post Your name... " defaultValue={user?.displayName} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                                    </div>
                                                    <div className="md:col-span-3 ">
                                                        <div className=" flex gap-1">
                                                            <div>
                                                                <label htmlFor="Page" className=" text-xl font-bold">Age:</label>
                                                                <input type="text" defaultValue={Page} name="Page" id="Page" placeholder=" Age..." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="Pgender" className=" text-xl font-bold">Gender:</label>
                                                                <input type="text" name="Pgender" defaultValue={Pgender} id="Pgender" placeholder=" gender..." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />

                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="md:col-span-5 ">
                                                        <label htmlFor="address" className="text-xl font-bold">Address:</label>
                                                        <input type="text" defaultValue={address} name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=" type brand name" />
                                                    </div>

                                                    <div className="md:col-span-3 ">
                                                        <label htmlFor="Ddpt" className=" text-xl font-bold">Speciality:</label> <br />
                                                        <select defaultValue={Ddpt} name="Ddpt" id="Ddpt" className=" bg-gray-50 h-10 border mt-1 rounded px-4 w-full">
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
                                                                <input type="number" defaultValue={number} name="number" id="number" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Phone Number.." />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="Pemail" className=" text-xl font-bold">Patient Email:</label>
                                                                <input type="Pemail" defaultValue={Pemail} name="Pemail" id="Pemail" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Enter Your Email.." />


                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className=" md:col-span-5 ">
                                                        <div className=" flex gap-3">
                                                            <div>
                                                                <label className=" text-xl font-bold" htmlFor="description">Doctor Name:</label>
                                                                <input name="Dname" type="text" defaultValue={Dname} placeholder=" Enter doctor name ...." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />

                                                            </div>
                                                            <div>
                                                                <label htmlFor="Pstatus" className=" text-xl font-bold">Emergency Status:</label> <br />
                                                                <select name="Pstatus" id="Pstatus" defaultValue={Pstatus} className=" bg-gray-50 h-10 border mt-1 rounded px-4 w-full">
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
                                                            <select defaultValue={ampm} id="ampm" name='ampm'  >
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
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>

        </div>
    );
};

export default Update;