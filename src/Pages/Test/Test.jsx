

import { useContext, useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Authprovider/Authprovider";
// // import Time from "./Time";
// import { AuthContext } from "../Authprovider/Authprovider";


const Test = () => {
    const { user } = useContext(AuthContext);
    const [testDate, setTestdate] = useState(new Date());
    const [Dateofbirth, setDateofbirth] = useState(new Date());

    const handleTest = (e) => {
        e.preventDefault();
        const Pname = e.target.Pname.value;
        const Page = e.target.Page.value;
        const Pgender = e.target.Pgender.value;
        const address = e.target.address.value;
        const number = e.target.number.value;
        const Pemail = e.target.Pemail.value;
        const Referredby = e.target.referred.value;
        const Tname = e.target.Tname.value;
        const testD = testDate.toISOString().split('T')[0];
        const dob = Dateofbirth.toISOString().split('T')[0];
        const patient_test_detail = {
            Pname,
            Page,
            Pgender,
            address,
            dob,
            Pemail,
            number,
            testD,
            Tname,
            Referredby,
            status: "pending"
        }
        console.log(patient_test_detail);

        fetch('http://localhost:3000/tests', {

            method: "POST",
            headers: {
                "content-type": 'application/json'
            }
            ,
            body: JSON.stringify(patient_test_detail)
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


            <div className="min-h-screen p-6 flex items-center justify-center font-poppins">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h1 className=" text-green-800  md:text-6xl text-3xl lg:text-6xl text-center font-bold" > Schedule for Test</h1>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div>
                                    <h1 className=" text-5xl font-extrabold text-[#355221]"> Hp</h1>
                                </div>

                                <div className="lg:col-span-2">
                                    <form onSubmit={handleTest}>
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
                                                    <label htmlFor="date" className="text-sm flex flex-col font-bold">Test date:</label>
                                                    <DatePicker className='w-[70%]'
                                                        dateFormat="yyyy/MM/dd"
                                                        showIcon
                                                        selected={testDate}
                                                        onChange={(date) => setTestdate(date)}
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
                                                        <label htmlFor="Pemail" className=" text-sm font-bold">Patient Email:</label>
                                                        <input type="Pemail" name="Pemail" id="Pemail" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Enter Your Email.." />

                                                    </div>

                                                </div>
                                            </div>
                                            <div className=" md:col-span-5">
                                                <div>
                                                    <label htmlFor="referred" className=" text-sm font-bold">Referred By :</label>
                                                    <input type="referred" name="referred" id="referred" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Referred By.." />
                                                </div>
                                                <div>
                                                    <label htmlFor="Tname" className=" text-sm font-bold">Test Name :</label>
                                                    <input type="Tname" name="Tname" id="Tname" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="test name.." />
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
            </div >
        </div >
    );
};

export default Test;