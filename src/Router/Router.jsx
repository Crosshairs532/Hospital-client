import { createBrowserRouter } from "react-router-dom"
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import OrgLogin from "../Pages/Login/OrgLogin";
import DoctorLogin from '../Pages/Doctor/Login/DoctorLogin';
import DoctorHome from '../Pages/Doctor/Home/DoctorHome';
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Components/Profile/Profile";
import PrivateRoute from "../PrivateRoute";
import AdminLogin from "../Pages/Admin/Login/AdminLogin";
import AdminHome from "../Pages/Admin/Home/AdminHome";
import Admission from "../Pages/Admission";
import Test from "../Pages/Test/Test";
import Appointment_list from "../Pages/Components/Appointment_List/Appointment_list";
import Appointment from "../Pages/Appointment/Appointment";
import Doctor from "../Pages/Doctor";
import Checkout from "../Pages/Pharmacy/Checkout";



const router = createBrowserRouter([
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
            {
                path:'/orgLogin',
                element:<OrgLogin></OrgLogin>
            },
            ,
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
    
            {
                path: '/appointment',
                element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
            },
            {
                path: '/doctors',
                element: <Doctor></Doctor>
            },
            {
                path: '/admission',
                element: <PrivateRoute><Admission></Admission></PrivateRoute>
            },
            {
                path: '/test',
                element: <PrivateRoute><Test></Test></PrivateRoute>
            },
            {
                path: '/applist',
                element: <PrivateRoute><Appointment_list></Appointment_list></PrivateRoute>
            },
            {
                path:'/checkout',
                element:<Checkout></Checkout>
            }
        ]
    },

])
export default router;