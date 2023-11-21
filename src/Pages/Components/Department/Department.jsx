import { BsFillLungsFill, BsFillEarFill } from 'react-icons/bs'
import { BiBrain } from 'react-icons/bi'
import { FaHeartbeat } from 'react-icons/fa'
import { TbDentalBroken } from 'react-icons/tb'
import { GiLiver } from 'react-icons/gi'

const Department = () => {
    return (
        <div className=' my-[100px]'>
            <h1 className=' text-6xl text-center py-5 mb-9'>Our department </h1>
            <div className=' grid grid-cols-3 gap-4 place-items-center'>
                <div className=' flex justify-between flex-col items-center gap-3 border-2 w-[50%]'>
                    <h1 className="text-7xl"><FaHeartbeat></FaHeartbeat> </h1>
                    <p className=' text-justify'>Heart Deasease</p>
                </div>
                <div className=' flex justify-between flex-col items-center gap-3 border-2 w-[50%]'>
                    <h1 className="text-7xl"><GiLiver></GiLiver> </h1>
                    <p className=' text-justify'>
                        Hepatology</p>
                </div>
                <div className=' flex justify-between flex-col items-center gap-3 border-2 w-[50%]'>
                    <h1 className="text-7xl"><BsFillLungsFill></BsFillLungsFill> </h1>
                    <p className=' text-justify'>Respiritory</p>
                </div>
                <div className=' flex justify-between flex-col items-center gap-3 border-2 w-[50%]'>
                    <h1 className="text-7xl"><TbDentalBroken></TbDentalBroken> </h1>
                    <p className=' text-justify'>Dental</p>
                </div>
                <div className=' flex justify-between flex-col items-center gap-3 border-2 w-[50%]'>
                    <h1 className="text-7xl"><BiBrain></BiBrain> </h1>
                    <p className=' text-justify'>
                        Huntington's</p>
                </div>
                <div className=' flex justify-between flex-col items-center gap-3 border-2 w-[50%]'>
                    <h1 className="text-7xl"><BsFillEarFill></BsFillEarFill> </h1>
                    <p className=' text-justify'>
                        Otology</p>
                </div>
            </div>
        </div>
    );
};

export default Department;