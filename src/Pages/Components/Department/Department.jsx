import { BsFillLungsFill } from 'react-icons/bs'
const Department = () => {
    return (
        <div className=' my-[100px]'>
            <h1 className=' text-6xl text-center py-5'>Our department </h1>
            <div className=' grid grid-cols-3 gap-4 '>
                <div className=' flex justify-between gap-3'>
                    <h1 className="text-7xl"><BsFillLungsFill></BsFillLungsFill></h1>
                    <p className=' text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illum doloribus hic eaque officiis corporis provident reprehenderit eligendi molestias a.</p>
                </div>
                <div className=' flex justify-between gap-3'>
                    <h1 className="text-7xl"><BsFillLungsFill></BsFillLungsFill></h1>
                    <p className=' text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illum doloribus hic eaque officiis corporis provident reprehenderit eligendi molestias a.</p>
                </div>
                <div className=' flex justify-between gap-3'>
                    <h1 className="text-7xl"><BsFillLungsFill></BsFillLungsFill></h1>
                    <p className=' text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illum doloribus hic eaque officiis corporis provident reprehenderit eligendi molestias a.</p>
                </div>
            </div>
        </div>
    );
};

export default Department;