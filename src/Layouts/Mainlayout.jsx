import { Outlet } from "react-router-dom";
import Footer from "../Pages/Components/Footer/Footer";
import Headers from "../Pages/Components/Headers/headers";
import Hosinfo from "../Pages/Components/Hosinfo/Hosinfo";
import Marquee from "react-fast-marquee";
const Mainlayout = () => {
    return (
        <div>
            <Marquee gradient={true} speed={100}>
                <h1 className=" text-5xl text-red-500 mr-[100px]">
                    design is on process
                </h1> <br />
                <h1 className=" text-5xl text-red-500 mr-[100px]">
                    design is on process
                </h1>
                <br />
                <h1 className=" text-5xl text-red-500 mr-[100px]">
                    design is on process
                </h1>
                <br />
                <h1 className=" text-5xl text-red-500 mr-[100px]">
                    design is on process
                </h1>

            </Marquee>
            <Hosinfo></Hosinfo>
            <Headers></Headers>
            <div className=" container mx-auto">

                <div className=" min-h-screen">
                    <Outlet></Outlet>
                </div>


            </div>
            <Footer></Footer>

        </div>
    );
};

export default Mainlayout;