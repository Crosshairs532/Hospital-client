/* eslint-disable no-unused-vars */
import Allorders from "./Allorders";
import Expired from "./Expired";
import { FaOpencart } from "react-icons/fa6";
import { SiMoneygram } from "react-icons/si";
import { MdPendingActions } from "react-icons/md";
import useStock from "../../Hooks/useStock";
import useTotalMedicine from "../../Hooks/useTotalMedicine";
import useExpire from "../../Hooks/useExpire";
import useLoading from "../../Hooks/useLoading";
const Dashboard = () => {
    const Loading = useLoading();
    const [data, isFetched] = useTotalMedicine();
    const [stock, stockisFetched] = useStock();
    const [expire, ExpireisFetched] = useExpire();
    if (!isFetched || !stockisFetched || !ExpireisFetched) {
        return Loading
    }
    return (
        <div className=" relative ">
            <h1 className=" text-6xl font-bold opacity-25 ">PHARMACY DASHBOARD</h1>
            <div>
                <div className="stats shadow border-2">

                    <div className="stat bg-white">
                        <div className="stat-figure text-grey">
                            <FaOpencart size={40} className=" text-green-400"></FaOpencart>
                        </div>
                        <div className="stat-title text-black font-bold text-xl">Total Medicine</div>
                        <div className="stat-value">{data?.length}</div>

                    </div>

                    <div className="stat bg-white">
                        <div className="stat-figure text-grey">
                            <SiMoneygram size={40} className=" text-yellow-500" />
                        </div>
                        <div className="stat-title text-black font-bold text-xl">Total Expired Medicine</div>
                        <div className="stat-value">{expire?.length}</div>

                    </div>

                    <div className="stat bg-white">
                        <div className="stat-figure text-grey">
                            <MdPendingActions size={40} className=" text-red-500" />
                        </div>
                        <div className="stat-title text-black font-bold text-xl">Total Stock Out Medicines</div>
                        <div className="stat-value">{stock?.length}</div>

                    </div>

                </div>
                <div className=" flex justify-between ">
                    <Expired></Expired>
                    {/* <Allorders></Allorders> */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;