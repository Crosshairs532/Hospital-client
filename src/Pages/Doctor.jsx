import { useEffect, useState } from "react";
import Row from "./Components/Row";


const Doctor = () => {
    const [allDoctors, setAlldoctors] = useState(null);
    useEffect(() => {

        fetch('http://localhost:3000/alldoctors')
            .then(res => res.json())
            .then(data => setAlldoctors(data))
    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Doctor Name</th>
                            <th>Speciality</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allDoctors?.map((doctor, idx) => <Row key={doctor._id} ind={idx} doctor={doctor}></Row>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Doctor;