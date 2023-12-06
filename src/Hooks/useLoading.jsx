
import { Triangle } from 'react-loader-spinner';

const useLoading = () => {
    return (
        <div className=" flex h-[100vh] justify-center items-center">
            <Triangle

                height="150"
                width="150"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default useLoading;