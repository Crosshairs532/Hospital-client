import Allorders from "./Allorders";
import Expired from "./Expired";
import { FaOpencart } from "react-icons/fa6";
import { SiMoneygram } from "react-icons/si";
import { MdPendingActions } from "react-icons/md";
const Dashboard = () => {
    return (
        <div className=" relative ">
            <h1 className=" text-6xl font-bold opacity-25 absolute -top-16">DASHBOARD</h1>
            <div>
                <div className="stats shadow border-2">

                    <div className="stat bg-white">
                        <div className="stat-figure text-grey">
                            <FaOpencart size={40} className=" text-green-400"></FaOpencart>
                        </div>
                        <div className="stat-title text-black font-bold text-xl">Total Sales</div>
                        <div className="stat-value">31K</div>

                    </div>

                    <div className="stat bg-white">
                        <div className="stat-figure text-grey">
                            <SiMoneygram size={40} className=" text-yellow-500" />
                        </div>
                        <div className="stat-title text-black font-bold text-xl">Total revenue</div>
                        <div className="stat-value">4,200</div>

                    </div>

                    <div className="stat bg-white">
                        <div className="stat-figure text-grey">
                            <MdPendingActions size={40} className=" text-red-500" />
                        </div>
                        <div className="stat-title text-black font-bold text-xl">Pending Requests</div>
                        <div className="stat-value">1,200</div>

                    </div>

                </div>
                <div className=" flex justify-between ">
                    <Expired></Expired>
                    <Allorders></Allorders>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;