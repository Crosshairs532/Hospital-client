import { BiSolidAmbulance } from "react-icons/bi"
import { MdBloodtype, MdWifiCalling3 } from 'react-icons/md'
import { FaHeartbeat, FaStethoscope } from 'react-icons/fa'
import { TbDentalBroken } from 'react-icons/tb'
const Services = () => {
    return (
        <div className=" my-28  min-h-screen container mx-auto">
            <h1 className=" text-5xl text-center font-bold ">Our Services</h1>
            <div className="  grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1">
                <div className=" flex items-center gap-3">
                    <div className=" text-5xl">
                        <BiSolidAmbulance></BiSolidAmbulance>
                    </div>
                    <div>
                        <h1 className=" text-2xl font-bold text-center">Emergency care</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia ratione veniam aperiam blanditiis a itaque corrupti. Pariatur, tempora praesentium?</p>
                    </div>
                </div>
                <div className=" flex items-center gap-3">
                    <div className=" text-5xl text-blue-400">
                        <FaStethoscope></FaStethoscope>
                    </div>
                    <div>
                        <h1 className=" text-2xl font-bold text-center">Outdoor check up</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia ratione veniam aperiam blanditiis a itaque corrupti. Pariatur, tempora praesentium?</p>
                    </div>
                </div>
                <div className=" flex items-center gap-3">
                    <div className=" text-5xl text-red-400">
                        <MdWifiCalling3></MdWifiCalling3>
                    </div>
                    <div>
                        <h1 className=" text-2xl font-bold text-center">Call center 24/7</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia ratione veniam aperiam blanditiis a itaque corrupti. Pariatur, tempora praesentium?</p>
                    </div>
                </div>
                <div className=" flex items-center gap-3">
                    <div className=" text-5xl text-red-600">
                        <MdBloodtype></MdBloodtype>
                    </div>
                    <div>
                        <h1 className=" text-2xl font-bold">Blood Test</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia ratione veniam aperiam blanditiis a itaque corrupti. Pariatur, tempora praesentium?</p>
                    </div>
                </div>
                <div className=" flex items-center gap-3">
                    <div className=" text-5xl text-orange-400">
                        <FaHeartbeat></FaHeartbeat>
                    </div>
                    <div>
                        <h1 className=" text-2xl font-bold ">Cardiac</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia ratione veniam aperiam blanditiis a itaque corrupti. Pariatur, tempora praesentium?</p>
                    </div>
                </div>
                <div className=" flex items-center gap-3">
                    <div className=" text-5xl text-slate-400">
                        <TbDentalBroken></TbDentalBroken>
                    </div>
                    <div>
                        <h1 className=" text-2xl font-bold ">Dental Care</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia ratione veniam aperiam blanditiis a itaque corrupti. Pariatur, tempora praesentium?</p>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Services;