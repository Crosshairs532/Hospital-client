import { useContext } from "react";
import { AuthContext } from "./Authprovider/Authprovider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    if (loading) {
        return <div>Loading...</div>
    }
    if (user) {
        return children;
    }

    <Navigate to='/' replace></Navigate>
};

export default PrivateRoute;