import { useContext, useEffect, useState } from "react";
import Row from "./Components/Row";
import { AuthContext } from "../Authprovider/Authprovider";
import { Triangle } from "react-loader-spinner";


const Doctor = () => {
    const [allDoctors, setAlldoctors] = useState(null);
    const { loading, setLoading } = useContext(AuthContext)

    useEffect(() => {
        fetch('http://localhost:3000/alldoctors')
            .then(res =>
                res.json()
            )
            .then(data => setAlldoctors(data))
    }, [])

    console.log(allDoctors);
    if (loading) {
        return (<>
            <div className=" flex h-[100vh] justify-center items-center">
                <Triangle

                    height="150"
                    width="150"
                    color="#4fa94d"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        </>)
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Doctor Name</th>
                            <th>Doctor Id</th>
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