import {useEffect} from 'react';


const Checkout = ()=>{

    useEffect(()=>{
        console.log("useEffect")
    },[])

    return <div>
        <h3>Checkout</h3>
    </div>
}

export default Checkout;