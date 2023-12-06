import { Outlet } from "react-router-dom";
import Footer from "../Pages/Components/Footer/Footer";
import Headers from "../Pages/Components/Headers/Headers";
import Hosinfo from "../Pages/Components/Hosinfo/Hosinfo";
import Marquee from "react-fast-marquee";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Mainlayout = () => {
    return (
        <div>
            <div className=" container mx-auto pt-3 flex justify-between">
                <Marquee className=" flex-1" gradientColor=" white" gradient={true} speed={100}>
                    <h1 className=" text-xl text-green-600 mr-[100px]">
                        Government of Bangladesh recommended our diagnostic centre for testing #COVID-19 for the passengers who will travel abroad.
                    </h1> <br />
                    <h1 className=" text-xl text-green-600 mr-[100px]">
                        New Cardiac MRI Machine in Popular Dhanmondi Branch
                    </h1>
                    <br />
                    <h1 className=" text-xl text-green-600 mr-[100px]">
                        New Cardiac MRI Machine in Popular Dhanmondi Branch
                    </h1>

                </Marquee>
                <div className="  flex justify-between gap-6">
                    <FaFacebookF size={20} />
                    <FaLinkedinIn size={20} />
                    <FaYoutube size={20} />

                </div>
            </div>
            <Hosinfo></Hosinfo>
            <Headers></Headers>
            <div className=" min-h-screen">
                <Outlet></Outlet>
            </div>


            <Footer></Footer>

        </div>
    );
};

export default Mainlayout;