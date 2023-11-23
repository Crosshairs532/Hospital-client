


import axios from 'axios';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';

const AddMedicine = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmit = async (data) => {
        console.log(data)

        const medicine = {
            name: data.name,
            price: parseFloat(data.price),
            quantity: data.quantity,
            expirationDate: data.Edate,
            productionDate: data.Pdate,
            usage: data.usage,
            stockStatus: 'In Stock',
            status: 'valid'


        }
        const medData = await axios.post('http://localhost:3000/medicine', medicine);
        console.log(medData.data.result, "medddeeee");
        if (medData.data.result.insertedId) {
            // reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Medicine is added.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        console.log(medicine)

    };

    return (
        <div>

            <div className=" p-11 bg-slate-50 rounded-2xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
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
                                type="number"
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
                                placeholder="Price"
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
                                    placeholder="production date"
                                    {...register('Pdate', { required: true })}
                                    className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Expired Date</span>
                                </label>
                                <input
                                    type="date"
                                    placeholder="expired date"
                                    {...register('Edate', { required: true })}
                                    className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Medicine Usage:</span>
                        </label>
                        <textarea name="usage" id="" cols="10" rows="5" className=' rounded-2xl bg-slate-100 p-4' placeholder=' Enter Medicine Usage Descrition.....'></textarea>

                    </div>
                    <button className="btn">
                        Add Medicine
                    </button>
                </form>
            </div>
        </div>
    );
};
export default AddMedicine;

