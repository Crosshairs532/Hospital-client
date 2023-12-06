import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { Triangle } from "react-loader-spinner";
import { AuthContext } from "../../../Authprovider/Authprovider";

const Alltest = () => {
    const { user } = useContext(AuthContext);
    const { data, isPending, isFetched } = useQuery({
        queryKey: ['alltest'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/alltests?${user?.email}`);
            return res.data;

        }
    })
    if (!isFetched) {
        return <div className=" flex h-[100vh] justify-center items-center">
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
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className=" bg-green-700 font-Nunito text-slate-200">
                        <tr>
                            <th></th>
                            <th>Referred BY</th>
                            <th>Test Name</th>
                            <th>Test date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((test, idx) => (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{test.Referredby}</td>
                                    <td>{test.Tname}</td>
                                    <td>{test.testD}</td>
                                    <td>{test.status}</td>
                                </tr>
                            ))


                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alltest;