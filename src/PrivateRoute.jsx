/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./Authprovider/Authprovider";
import { Navigate } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import useLoading from "./Hooks/useLoading";


const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const Loading = useLoading();
    if (loading) {
        return Loading
    }
    if (user) {
        return children;
    }
    <Navigate to='/' replace></Navigate>
};

export default PrivateRoute;