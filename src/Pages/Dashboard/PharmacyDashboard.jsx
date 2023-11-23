import { useEffect, useState } from "react";
import Maincontent from "./Maincontent";
import Sideanel from "./Sidepanel";
import io from 'socket.io-client';
const socket = io('http://localhost:3000', {
    transports: ['websocket', 'polling'],
});



const PharmacyDashboard = () => {
    const [msg, setmsg] = useState('')
    const [msg1, setmsg1] = useState('')
    const [msg2, setmsg2] = useState('')
    // const [d, setd] = useState('')
    useEffect(() => {
        // Listen for notifications from the server
        socket.on('notification', (data) => {
            // setd(data)
            console.log(data, "soooo");
            if (data.message) {
                setmsg(data.message)
            }
            else if (data.near) {
                setmsg1(data.near)
            }
            else if (data.stock) {
                setmsg2(data.stock)
            }


            // alert(data.message); // You can use a more sophisticated notification library
        });
        return () => {
            // Clean up the socket connection on component unmount
            socket.disconnect();
        };
    }, []);
    return (
        <div>
            <div className=' flex max-h-screen'>
                <Sideanel></Sideanel>
                <Maincontent msg={msg} msg1={msg1} msg2={msg2}></Maincontent>
            </div>
        </div>
    );
};

export default PharmacyDashboard;