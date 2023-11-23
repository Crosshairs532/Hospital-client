import { NavLink } from "react-router-dom"

const Sidepanel = () => {

    return (
        <div className=" w-64 bg-white shadow-2 min-h-screen px-4">
            <ul className="menu p-4">
                <li><NavLink to='dashboard'>Dashboard</NavLink></li>
                <li><NavLink to='addmedicine'>Add Medicine</NavLink></li>
                <li><NavLink to='allexpired'>Expiring List</NavLink></li>
                <li><NavLink to='allorders'>Ordered List</NavLink></li>
                <li><NavLink to='allmedicine'>Medicine List </NavLink></li>
                <div className="divider"></div>
                <li><NavLink to='/'>Home</NavLink></li>
            </ul>
        </div >
    );
};

export default Sidepanel;