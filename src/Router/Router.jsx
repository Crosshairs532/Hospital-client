import { createBrowserRouter } from "react-router-dom"
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import OrgLogin from "../Pages/Login/OrgLogin";

import Register from "../Pages/Register/Register";
import Profile from "../Pages/Components/Profile/Profile";
import PrivateRoute from "../PrivateRoute";
import Admission from "../Pages/Admission";
import Test from "../Pages/Test/Test";
import Appointment_list from "../Pages/Components/Appointment_List/Appointment_list";
import Appointment from "../Pages/Appointment/Appointment";
import Doctor from "../Pages/Doctor";
import PharmacyDashboard from "../Pages/Dashboard/PharmacyDashboard";
import Dashboard from '../Pages/Dashboard/Dashboard';
import AddMedicine from '../Pages/Dashboard/AddMedicine';
import UpdateMedicine from '../Pages/Dashboard/UpdateMedicine';
import Expired from "../Pages/Dashboard/Expired";
import Allorders from "../Pages/Dashboard/Allorders";
import Medicinelist from "../Pages/Dashboard/Medicinelist";
// import PDF from "../Pages/PDF";
import Alltest from "../Pages/Components/Alltest/Alltest";
import Allreports from "../Pages/Components/ALLreports/Allreports";
// import Try from "../Pages/Components/ALLreports/Allreports";
import Stock from "../Pages/Dashboard/Stock";
import UserDashboard from "../Pages/UserDashboard/UserDashboard";

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
                path: 'orgLogin',
                element: <OrgLogin></OrgLogin>
            },

            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/doctors',
                element: <Doctor></Doctor>
            },

        ]
    },
    {
        path: '/userDashboard',
        element: <UserDashboard></UserDashboard>,
        children: [
            {
                path: '/userDashboard/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/userDashboard/allTest',
                element: <PrivateRoute><Alltest></Alltest></PrivateRoute>
            },
            {
                path: '/userDashboard/applist',
                element: <PrivateRoute><Appointment_list></Appointment_list></PrivateRoute>
            },
            {
                path: '/userDashboard/admission',
                element: <PrivateRoute><Admission></Admission></PrivateRoute>
            },
            {
                path: '/userDashboard/test',
                element: <PrivateRoute><Test></Test></PrivateRoute>
            },
            {
                path: '/userDashboard/appointment',
                element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
            },
            {
                path: '/userDashboard/allReports',
                element: <PrivateRoute><Allreports></Allreports></PrivateRoute>
            },

        ]
    },
    {
        path: '/pharmacy',
        element: <PharmacyDashboard></PharmacyDashboard>,
        children: [


            {
                path: 'dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: 'addmedicine',
                element: <AddMedicine></AddMedicine>
            }
            ,
            {
                path: '/pharmacy/updatemedicine/:id',
                element: <UpdateMedicine></UpdateMedicine>
            }
            ,
            {
                path: 'allexpired',
                element: <Expired></Expired>
            },
            {
                path: 'allorders',
                element: <Allorders></Allorders>
            },
            {
                path: 'allMedicine',
                element: <Medicinelist></Medicinelist>
            },
            {
                path: 'stock',
                element: <Stock></Stock>
            }
        ]
    }
])
export default router;