import { Outlet } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Maincontent = ({ msg, msg1, msg2 }) => {
    return (
        <div className=" flex-1 bg-[#e7e7e7] px-8 py-[90px] ">
            <Marquee speed={200} gradientColor="white" gradientWidth={100} gradient={true}>
                <h1 className=" mr-7 right-0 text-right text-2xl text-red-600">{msg}</h1> <br />
                <h1 className=" right-0 text-right text-2xl text-red-600">{msg1}</h1>
                <h1 className=" right-0 text-right text-2xl text-red-600">{msg2}</h1>
            </Marquee>

            <Outlet></Outlet>
        </div>
    );
};

export default Maincontent;