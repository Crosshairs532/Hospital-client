import { IoLogoWhatsapp } from 'react-icons/io'
import { AiOutlineClockCircle, AiOutlineMail } from 'react-icons/ai'
// import lottie from "lottie-web";
import { useEffect, useRef } from 'react';


const Hosinfo = () => {
    // const container = useRef(null)
    // useEffect(() => {
    //     Lottie.loadAnimation(

    //         {
    //             container: container.current,
    //             renderer: 'svg',
    //             loop: true,
    //             autoplay: true,
    //             animationData: logo

    //         }
    //     )
    // }, [])

    return (
        <div className=" h-[100px]  ">
            <div className=" flex  p-7 justify-evenly items-center ">
                <div>
                    <h1 className=' text-bold text-5xl text-green-600 font-extrabold'>HP</h1>
                </div>
                <div className=' flex gap-4'>
                    <h1 className='text-4xl text-green-600'> <IoLogoWhatsapp></IoLogoWhatsapp></h1>
                    <div>
                        <h1 className=" text-green-600">Hotline (Dhanmondi)</h1>
                        <p>10636</p>
                    </div>
                </div>
                <div>
                    <div className=' flex gap-4'>
                        <h1 className=" text-4xl text-green-600"><AiOutlineClockCircle></AiOutlineClockCircle></h1>
                        <div>
                            <h1 className=" text-green-600">
                                Working Hour
                            </h1>
                            <p>We are open 24/7 <br /> (Only Dhanmondi)</p>
                        </div>


                    </div>
                </div>
                <div className=' flex gap-4'>
                    <h1 className=" text-4xl text-green-600"><AiOutlineMail></AiOutlineMail></h1>
                    <h1 className=" text-green-600">
                        Email Us <br />
                        info@hpdiagnostic.com
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hosinfo;