/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios, { all } from "axios";
import { useState } from "react";
import Loading from "../../Hooks/useLoading";
import useLoading from "../../Hooks/useLoading";

const Expired = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 8;
    const Loading = useLoading();
    const { data: allExpired, isFetched: pageisFetched, refetch: pageRefetch } = useQuery({
        queryKey: ['myReviewsPagination',]
        ,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/pagination/allexpired`)
            return res.data;
        }
    })

    const { data, isFetched, error, refetch } = useQuery(
        {
            queryKey: ['expired', currentPage],
            queryFn: async () => {
                try {
                    const res = await axios.get(`http://localhost:3000/expired?page=${currentPage}&size=${itemsPerPage}`);

                    return (res.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                    throw error;
                }
            }
        }
    );
    if (!isFetched || !pageisFetched) {

        return Loading
    }

    const numberOfPages = Math.ceil((allExpired.count) / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()];
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
            console.log(currentPage);
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
            console.log(currentPage);
        }
    }
    console.log(currentPage);
    return (
        <div>
            <h1>Expired</h1>
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
            <div className=' flex items-center gap-2 justify-center pt-10'>
                <button onClick={handlePrevPage} className="join-item btn">«</button>
                <div>
                    {
                        pages.map(i => (
                            <button key={i} onClick={() => setCurrentPage(i)} className={`${currentPage == i ? ' bg-green-700' : ''} btn`}>{i + 1}</button>)
                        )
                    }
                </div>
                <button onClick={handleNextPage} className="join-item btn">»</button>
            </div>
        </div>
    );
};

export default Expired;