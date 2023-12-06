import img1 from '../../../assets/Banner1.jpeg'
import img2 from '../../../assets/Banner2.jpeg'
import img3 from '../../../assets/Banner3.jpeg'
import img4 from '../../../assets/Banner4.jpeg'
const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full h-[90vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className='absolute space-y-5 top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center text-white'>
                        <h1 className='text-6xl font-extrabold font-Nunito'>Optimized Accommodation</h1>
                        <p className='w-[40%] text-center'>Optimized and comfortable accommodation tailored to individual recovery needs.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">

                    <img src={img2} className="w-full" />
                    <div className='absolute space-y-5 top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center text-white'>
                        <h1 className='text-6xl font-extrabold font-Nunito'>Emergency Care</h1>
                        <p className='w-[40%] text-center'>Swift and adept Emergency Care services ensuring immediate and proficient medical intervention during critical situations.</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className='absolute space-y-5 top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center text-white'>
                        <h1 className='text-6xl  font-extrabold font-Nunito'>Night Shift Precision service</h1>
                        <p className='w-[40%] text-center'>Round-the-clock medical attention and support for an encompassing and responsive healthcare experience..</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div >

        </div >
    );
};

export default Carousel;