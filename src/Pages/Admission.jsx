/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Time from "./Time";
import { AuthContext } from "../Authprovider/Authprovider";


const Admission = () => {
    const { user } = useContext(AuthContext);
    const [admissionDate, setAdmissiondate] = useState(new Date());
    const [Dateofbirth, setDateofbirth] = useState(new Date());
    // const [postdate, setPostdate] = useState(new Date());
    const [value, onChange] = useState('10:00');
    // const [ampm, setAmPm] = useState('AM');
    const handleAdmission = (e) => {
        e.preventDefault();
        const Pname = e.target.Pname.value;
        const Page = e.target.Page.value;
        const Pgender = e.target.Pgender.value;
        const address = e.target.address.value;
        const number = e.target.number.value;
        const Enumber = e.target.Enumber.value;
        const Pstatus = e.target.Pstatus.value;
        const Pemail = e.target.Pemail.value;
        const marital_status = e.target.marital.value;
        const disease = e.target.disease.value;
        const allergy = e.target.allergy.value;
        const referredby = e.target.referredby.value;
        const medical_history = e.target.medical_history.value;
        const admissionD = admissionDate.toISOString().split('T')[0];
        const dob = Dateofbirth.toISOString().split('T')[0];
        const patient_add_detail = {
            Pname,
            Page,
            Pgender,
            address,
            Enumber,
            disease,
            allergy,
            referredby,
            medical_history,
            marital_status,
            number,
            Pstatus,
            Pemail,
            admissionD,
            status: "pending"
        }
        console.log(patient_add_detail);

        fetch('http://localhost:3000/admission', {

            method: "POST",
            headers: {
                "content-type": 'application/json'
            }
            ,
            body: JSON.stringify(patient_add_detail)
        })
            .then(res => res.json())
            .then(data => {

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: ' successfully applied',
                    showConfirmButton: false,
                    timer: 1500
                })
                e.target.reset();
            })

    }


    return (
        <div>
            {/* <Helmet>
                <title>SkillSafari | Add a Job</title>
            </Helmet> */}

            <div className="min-h-screen p-6 flex items-center justify-center font-poppins">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h1 className=" text-green-800  md:text-6xl text-3xl lg:text-6xl text-center font-oxanium font-bold" >Admission </h1>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div>
                                    <h1 className=" text-5xl font-extrabold text-[#355221]"> Hp</h1>
                                </div>

                                <div className="lg:col-span-2">
                                    <form onSubmit={handleAdmission}>
                                        <h1 className=" text-xl mb-4">Patients General Information:</h1>
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                                            <div className="md:col-span-2 ">
                                                <label htmlFor="Pname" className=" text-sm font-bold">Patient Name:</label>
                                                <input type="text" name="Pname" id="Pname" placeholder=" post Your name... " defaultValue={user?.displayName} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>
                                            <div className="md:col-span-3 ">
                                                <div className=" flex gap-1">
                                                    <div>
                                                        <label htmlFor="Page" className=" text-sm font-bold">Age:</label>
                                                        <input type="text" name="Page" id="Page" placeholder=" Age..." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Pgender" className=" text-sm font-bold">Gender:</label>
                                                        <input type="text" name="Pgender" id="Pgender" placeholder=" gender..." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />

                                                    </div>
                                                </div>

                                            </div>

                                            <div className="md:col-span-5 ">
                                                <label htmlFor="address" className="text-sm font-bold">Address:</label>
                                                <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=" Enter your Address..." />
                                            </div>

                                            <div className=" md:col-span-5 flex justify-evenly items-center">
                                                <div className="">
                                                    <label htmlFor="dob" className="text-sm font-bold">Date of birth:</label> <br />
                                                    <DatePicker
                                                        className='w-[70%]'
                                                        dateFormat="yyyy/MM/dd"
                                                        showIcon
                                                        selected={Dateofbirth}
                                                        onChange={(date) => setDateofbirth(date)}
                                                    />
                                                </div>

                                                <div className="">
                                                    <label htmlFor="date" className="text-sm flex flex-col font-bold">Today's of Date:</label>
                                                    <DatePicker className='w-[70%]'
                                                        dateFormat="yyyy/MM/dd"
                                                        showIcon
                                                        selected={admissionDate}
                                                        onChange={(date) => setAdmissiondate(date)}
                                                    />
                                                </div>

                                            </div>



                                            <div className="md:col-span-5 ">
                                                <div className=" flex gap-2">
                                                    <div>
                                                        <label htmlFor="number" className=" text-sm font-bold">Contact Number :</label>
                                                        <input type="number" name="number" id="number" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Phone Number.." />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Enumber" className=" text-sm font-bold">Emergency Contact Number :</label>
                                                        <input type="number" name="Enumber" id="Enumber" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Phone Number.." />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Pemail" className=" text-sm font-bold">Patient Email:</label>
                                                        <input type="Pemail" defaultValue={user?.email} name="Pemail" id="Pemail" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Enter Your Email.." />


                                                    </div>

                                                </div>
                                            </div>
                                            <div className=" md:col-span-5 ">
                                                <div className=" flex gap-3">
                                                    <div>
                                                        <label className=" text-sm font-bold" htmlFor="marital">Marital Status:</label>
                                                        {/* <input name="Dname" type="text" placeholder=" Enter doctor name ...." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" /> */}
                                                        <select name="marital" id="marital" className=" bg-gray-50 h-10 border mt-1 rounded px-4 w-full">
                                                            <option >married</option>
                                                            <option >Unmarried</option>


                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Pstatus" className=" text-sm font-bold">Emergency Status:</label> <br />
                                                        <select name="Pstatus" id="Pstatus" className=" bg-gray-50 h-10 border mt-1 rounded px-4 w-full">
                                                            <option >Yes</option>
                                                            <option >No </option>
                                                        </select>



                                                    </div>
                                                </div>
                                            </div>

                                            <div className="md:col-span-2 ">

                                            </div>
                                            <h1 className=" md:col-span-5 text-xl">Patients Medical Information:</h1>

                                            <div className="md:col-span-5">

                                                <div className="">
                                                    <label htmlFor="disease" className=" text-sm font-bold">Patients Disease information:</label> <br />
                                                    <textarea name="disease" id='disease' placeholder=" Enter Your disease information.." className=" outline outline-slate-400 rounded-md px-3 w-full" cols="20" rows="2"></textarea>
                                                </div>

                                            </div>

                                            <div className=" md:col-span-2">
                                                <label htmlFor="allergy" className=" text-sm font-bold">Allergy:</label> <br />
                                                <select name="allergy" id="allergy" className=" bg-gray-50 h-10 border mt-1 rounded px-4 w-full">
                                                    <option >Yes</option>
                                                    <option >No </option>
                                                </select>

                                            </div>
                                            <div className="md:col-span-3">
                                                <label htmlFor="referredby" className=" text-sm font-bold">Referred By:</label> <br />
                                                <input type="text" name="referredby" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=" referred by any hospital or doctor?" />
                                            </div>
                                            <div className=" md:col-span-5">
                                                <label htmlFor="medical_history" className=" text-sm font-bold">Medical History:</label> <br />
                                                <textarea name="medical_history" id="medical_history" cols="30" placeholder=" any previous medical complication history?.." className=" px-2 w-full outline-1 outline outline-gray-400" rows="5"></textarea>

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
            </div >
        </div >
    );
};

export default Admission;
