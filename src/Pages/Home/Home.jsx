import Carousel from "../Components/Carousel/Carousel";
import Department from "../Components/Department/Department";
import Services from "../Components/Services/Services";


const Home = () => {
    return (
        <div>
            <div>
                <Carousel></Carousel>
                <Services></Services>
                <Department></Department>
            </div>
        </div >
    );
};

export default Home;