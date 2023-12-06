import { useEffect, useState } from "react";
import Maincontent from "./Maincontent";
import Sideanel from "./Sidepanel";
import io from 'socket.io-client';
import Sidepanel from "./Sidepanel";
const socket = io('http://localhost:3000', {
    transports: ['websocket', 'polling'],
});

const PharmacyDashboard = () => {
    const [msg, setmsg] = useState('')
    const [msg1, setmsg1] = useState('')
    const [msg2, setmsg2] = useState('')
    // const [d, setd] = useState('')
    useEffect(() => {
        socket.on('notification', (data) => {

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

        });

    }, []);
    return (
        <div>
            <div className=' flex max-h-screen'>
                <Sidepanel></Sidepanel>
                <Maincontent msg={msg} msg1={msg1} msg2={msg2}></Maincontent>
            </div>
        </div>
    );
};

export default PharmacyDashboard;