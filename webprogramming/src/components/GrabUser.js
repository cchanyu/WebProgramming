import React, { useEffect, useState } from 'react'
import '../css/GrabUser.css';

const GrabUser = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [ipv4, setIpv4] = useState();

    // (blocked by adblocker)
    // https://geolocation-db.com/json/

    useEffect(() => {
        // fetch("https://geolocation-db.com/json/")
        // .then(res => res.json())
        // .then((res) => {
        //     setIsLoaded(true);
        //     setItems(res);
        //     setIpv4(res.IPv4);
        // },
        // (error) => {
        //     setIsLoaded(true);
        //     setError(error);
        // })
    })

    return (
        <div className='grabuser'>
            <h1 className='m-3 text-light'>Your IP Address is:</h1>
            <span className='text-light'>{ipv4 ? ipv4 : 'Please disable Adblock'}</span>
        </div>
    )
}

export default GrabUser