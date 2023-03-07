import React, { useEffect, useState, useCallback } from 'react';
import '../css/LockPick.css';

const LockPick = () => {
    const [Lock1Spinner, setLock1Spinner] = useState();
    const [Lock1Hint, setLock1Hint] = useState();
    const [lock1Ans, setlock1Ans] = useState(Math.floor(Math.random() * 360));
    let lock1Rotation = 5;
    let lock1Pos = 0;

    const [Lock2Spinner, setLock2Spinner] = useState();
    const [Lock2Hint, setLock2Hint] = useState();
    const [lock2Ans, setlock2Ans] = useState(Math.floor(Math.random() * 360));
    let lock2Rotation = 5;
    let lock2Pos = 0;
    
    const keyPress = useCallback((event) => {
        if (event.key === "d") {
            lock1Pos += lock1Rotation;
            setLock1Spinner({ transform: `rotate(${lock1Pos + lock1Rotation}deg)` });
            console.log("rotate Pos", lock1Pos);
        } else if (event.key === "a") {
            lock1Pos -= lock1Rotation;
            setLock1Spinner({ transform: `rotate(${lock1Pos - lock1Rotation}deg)` });
            console.log("rotate Pos", lock1Pos);
        } else if (event.key === "e") {
            lock2Pos += lock2Rotation;
            setLock2Spinner({ transform: `rotate(${lock2Pos + lock2Rotation}deg)` });
            console.log("rotate Pos", lock2Pos);
        } else if (event.key === "q") {
            lock2Pos -= lock2Rotation;
            setLock2Spinner({ transform: `rotate(${lock2Pos - lock2Rotation}deg)` });
            console.log("rotate Pos", lock2Pos);
        }
    }, []);
    
    useEffect(() => {
        console.log("Lock Answers:", lock1Ans, lock2Ans);
        document.addEventListener("keydown", keyPress);
        return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);

    const onClickReset = () => {
        console.log("inside: onClickReset")
        lock1Pos = 0;
        lock2Pos = 0;

        setLock1Spinner({ transform: `rotate(${lock1Pos}deg)` });
        setLock2Spinner({ transform: `rotate(${lock2Pos}deg)` });

        setlock1Ans(Math.floor(Math.random() * 360));
        setlock2Ans(Math.floor(Math.random() * 360));

        console.log("Lock Answers:", lock1Ans, lock2Ans);
    }

    return (
        <div className='lock--container'>
            <div className='lock--spinner1' style={Lock1Spinner}></div>
            <div className='lock--spinner2' style={Lock2Spinner}></div>
            <div className='lock--hint1' style={Lock1Hint}></div>
            <div className='lock--hint2' style={Lock2Hint}></div>
            <button className='lock--button' onClick={() => onClickReset()}>Reset</button>
        </div>
    )
}

export default LockPick;