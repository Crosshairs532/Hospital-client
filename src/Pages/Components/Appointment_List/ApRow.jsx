/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import Update from "./Update";


const ApRow = ({ i, sl, setAppointment, appointments }) => {
    const { Ddpt, status, appointment, _id } = i;
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/appointments/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Deleted successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })

                            const remaining = appointments.filter(appointment => appointment._id != _id);
                            setAppointment(remaining);



                        }
                    })

            }
        });



    }
    return (

        <tr className="bg-base-200">
            <th><button onClick={() => handleDelete(_id)} className="btn btn-circle bg-cyan-600 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></th>
            <th>{sl}</th>
            <td>{Ddpt}</td>
            <td>{appointment}</td>
            <td>{status}</td>
            <td className=" mt-3 flex gap-2 items-center justify-center"><button className=" btn btn-outline btn-xs text-cyan-600 outline-cyan-600">View Details</button>
                <Update appointments={i}></Update>
            </td>

        </tr >


    );
};

export default ApRow;