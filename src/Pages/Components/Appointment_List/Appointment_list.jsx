import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Authprovider/Authprovider";
import ApRow from "./ApRow";

const Appointment_list = () => {
    const { user } = useContext(AuthContext);
    const [appointments, setAppointment] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:3000/appointments?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAppointment(data)
            })
    }, [user?.email])
    console.log(appointments);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="sticky top-0 border-2 backdrop-blur-sm bg-[#3a6d1e98] font-Nunito text-slate-200  z-10">
                        <tr>
                            <th></th>
                            <th>Sl.No</th>
                            <th>Disease Name</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments && appointments.map((i, index) => <ApRow appointments={appointments} setAppointment={setAppointment} sl={index + 1} key={index} i={i}></ApRow>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Appointment_list;