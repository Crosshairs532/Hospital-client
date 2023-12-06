/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

const Stock = () => {
    const { data, isLoading, error, refetch } = useQuery(
        {
            queryKey: ['stock',],
            queryFn: async () => {
                try {
                    const res = await axios.get('http://localhost:3000/stock');
                    return (res.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                    throw error; // Rethrow the error to be caught by React Query
                }
            }
        }
    );
    useEffect(() => {
        refetch();
    }, [])
    return (
        <div>
            <h1>Stock</h1>
            <div>
                <h1 className=" text-4xl font-bold"></h1>
                <div className="overflow-x-auto rounded-md  max-h-[calc(100vh-100px)] overflow-y-auto">
                    <table className="table table-zebra  ">
                        {/* head */}
                        <thead className=" sticky top-0 border-2 backdrop-blur-sm bg-[#d7d7d7a7]  z-10">
                            <tr className=" text-black text-lg rounded-md font-bold">
                                <th>#</th>
                                <th>Medicine Name</th>
                                <th>Quatity</th>
                                <th>Price</th>
                                <th>Expired Status</th>
                                <th>Stock Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((medicine, idx) =>
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>

                                        <td>{medicine.name}</td>
                                        <td>{medicine.quantity}</td>
                                        <td>{medicine.price}</td>
                                        <td>{medicine.status}</td>
                                        <td>{medicine.stockStatus}</td>

                                    </tr>)

                            }



                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    );
};

export default Stock;