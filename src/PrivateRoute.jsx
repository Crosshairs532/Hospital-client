/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./Authprovider/Authprovider";
import { Navigate } from "react-router-dom";
import { Triangle } from "react-loader-spinner";


const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    if (loading) {
        return <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    }
    if (user) {
        return children;
    }

    <Navigate to='/' replace></Navigate>
};

export default PrivateRoute;