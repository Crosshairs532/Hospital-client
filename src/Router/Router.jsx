import { createBrowserRouter } from "react-router-dom"
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import DoctorLogin from '../Pages/Doctor/Login/DoctorLogin';
import DoctorHome from '../Pages/Doctor/Home/DoctorHome';
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Components/Profile/Profile";
import PrivateRoute from "../PrivateRoute";
import AdminLogin from "../Pages/Admin/Login/AdminLogin";
import AdminHome from "../Pages/Admin/Home/AdminHome";

const router = createBrowserRouter([
    {
        path:'/admin/',

        children:[
            {
                path:'login',
                element:<AdminLogin></AdminLogin>
            },
            {
                path:'home',
                element:<AdminHome></AdminHome>
            }
        ]
    },
    {
        path:'/doctor/',
        children:[
            {
                path:'login',
                element:<DoctorLogin></DoctorLogin>
            },
            {
                path:'home',
                element:<DoctorHome></DoctorHome>
            }
        ]
    },

    {
        path: '/',
        element: <Mainlayout></Mainlayout>
        ,
        children: [

            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
            ,
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    },
    

])
export default router;