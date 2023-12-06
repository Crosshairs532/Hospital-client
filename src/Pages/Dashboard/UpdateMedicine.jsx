/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';
import { Triangle } from "react-loader-spinner";
import useLoading from "../../Hooks/useLoading";
const UpdateMedicine = () => {
    const Loading = useLoading();
    const param = useParams();
    console.log(param);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { data: Product = [], isFetched, error, refetch } = useQuery(
        {
            queryKey: ['medicines_update', param.id,],
            queryFn: async () => {
                try {
                    const res = await axios.get(`http://localhost:3000/update/medicine?medicine_id=${param.id}`);
                    console.log(res.data);
                    return res.data;
                } catch (error) {
                    console.error('Error fetching data:', error);
                    throw error; // Rethrow the error to be caught by React Query
                }
            }
        }
    );
    if (!isFetched) {
        return Loading
    }
    const { name, quantity, price, expirationDate, productionDate, usage, stockStatus, status, _id } = Product[0];
    console.log(Product[0], "update dafnajfjaffa");
    const onSubmit = async (data) => {
        const medicine = {
            name: data.name,
            price: parseFloat(data.price),
            quantity: parseInt(data.quantity),
            expirationDate: data.Edate,
            productionDate: data.Pdate,
            usage: data.usage,
            stockStatus: data.stock,
            status: data.Estatus
        }
        console.log(medicine, "innnnnnn");
        const medUpdate = await axios.patch(`http://localhost:3000/medicine?medicine_id=${param.id}`, medicine);
        console.log(medUpdate, 'uppp');
        if (medUpdate.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `medicine is updated.`,
                showConfirmButton: false,
                timer: 1500
            });
            refetch()
        }

    }

    return (

        <div>
            <div>

                <div className=" p-11 bg-slate-50 rounded-2xl">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text" defaultValue={name}
                                placeholder=" Medicine name"
                                {...register('name', { required: true })}

                                className="input input-bordered w-full" />
                            {
                                errors.name && <p className=' text-red-400'>*Name is required</p>
                            }
                        </div>
                        <div className="flex gap-6">
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input
                                    type="number" defaultValue={quantity}
                                    placeholder="Quantity"
                                    {...register('quantity', { required: true })}
                                    className="input input-bordered w-full" />
                                {
                                    errors.quantity && <p className=' text-red-400'>*Quantity field is required</p>
                                }

                            </div>


                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Price*</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Price" defaultValue={price}
                                    {...register('price', { required: true })}
                                    className="input input-bordered w-full" />
                                {
                                    errors.price && <p className=' text-red-400'>*Price field is required</p>
                                }
                            </div>

                        </div>
                        <div className="form-control">
                            <div className="flex justify-between">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Production Date</span>
                                    </label>
                                    <input
                                        type="date"
                                        defaultValue={productionDate}
                                        placeholder="production date"
                                        {...register('Pdate', { required: true })}
                                        className="input input-bordered w-full" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Stock Status:</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={stockStatus}
                                        placeholder="stock status."
                                        {...register('stock', { required: true })}
                                        className="input input-bordered w-full" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Expiration Status:</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={status}
                                        placeholder="Expiration Status"
                                        {...register('Estatus', { required: true })}
                                        className="input input-bordered w-full" />
                                </div>


                                <div>
                                    <label className="label">
                                        <span className="label-text">Expired Date</span>
                                    </label>
                                    <input
                                        type="date"
                                        placeholder="expired date"
                                        defaultValue={expirationDate}
                                        {...register('Edate', { required: true })}
                                        className="input input-bordered w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Medicine Usage:</span>
                            </label>
                            <textarea defaultValue={usage} {...register('usage', { required: true })} id="" cols="10" rows="5" className=' rounded-2xl bg-slate-100 p-4' placeholder=' Enter Medicine Usage Descrition.....'></textarea>

                        </div>
                        <button className="btn">
                            Update Medicine
                        </button>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default UpdateMedicine;