import { Outlet } from "react-router-dom";
import Footer from "../Pages/Components/Footer/Footer";
import Headers from "../Pages/Components/Headers/Headers";
import Hosinfo from "../Pages/Components/Hosinfo/Hosinfo";
const Mainlayout = () => {
    return (
        <div>
            
            <Headers></Headers>
            <div className=" min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;