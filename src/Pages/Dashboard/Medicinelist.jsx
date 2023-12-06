/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useLoading from "../../Hooks/useLoading";

const Medicinelist = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 8;
    const Loading = useLoading();

    const { data: medicinesData, isError, isFetched: pageisFetched } = useQuery({
        queryKey: ['medicinesList',],
        queryFn: async () => {
            const result = await axios.get('http://localhost:3000/pagination/medicine');
            return result.data;
        }
    })
    const { data, isLoading, error, refetch, isFetched } = useQuery(
        {
            queryKey: ['medicines', currentPage],
            queryFn: async () => {
                try {
                    const res = await axios.get(`http://localhost:3000/medicine?page=${currentPage}&size=${itemsPerPage}`);
                    return res.data;
                } catch (error) {
                    console.error('Error fetching data:', error);
                    throw error; // Rethrow the error to be caught by React Query
                }
            }
        }
    );
    if (!isFetched || !pageisFetched) {
        return Loading
    }
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axios.delete(`http://localhost:3000/medicine/${id}`)
                console.log(res);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }

            }
        });
    }

    if (!isFetched || !medicinesData) {
        return Loading
    }
    const numberOfPages = Math.ceil((medicinesData.count) / itemsPerPage)
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

    return (
        <div>
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
                                        <th><button onClick={() => handleDelete(medicine._id)} className="btn btn-circle btn-outline btn-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button></th>
                                        <td>{medicine.name}</td>
                                        <td>{medicine.quantity}</td>
                                        <td>{medicine.price}</td>
                                        <td>{medicine.status}</td>
                                        <td>{medicine.stockStatus}</td>
                                        <td>
                                            <Link to={`/pharmacy/updatemedicine/${medicine._id}`}><button className="btn btn-sm">Update</button></Link>
                                        </td>
                                    </tr>)

                            }



                        </tbody>
                    </table>
                </div>
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
            </div >

        </div >
    );
};

export default Medicinelist;