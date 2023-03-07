import React, { useEffect, useState, useCallback } from 'react';
import '../css/LockPick.css';

const LockPick = () => {
    const [LockUnlock, setLockUnlock] = useState();

    const [Lock1Spinner, setLock1Spinner] = useState();
    const [Lock1Hint, setLock1Hint] = useState();
    let lock1Rotation = 5;
    let lock1Ans = Math.floor(Math.random() * 72) * 5;
    let lock1Pos = 0;

    const [Lock2Spinner, setLock2Spinner] = useState();
    const [Lock2Hint, setLock2Hint] = useState();
    let lock2Rotation = 5;
    let lock2Ans = Math.floor(Math.random() * 72) * 5;
    let lock2Pos = 0;
    
    const keyPress = useCallback((event) => {
        if (event.key === "d") {
            lock1Pos += lock1Rotation;
            setLock1Spinner({ transform: `rotate(${lock1Pos + lock1Rotation}deg)` });
            checkLock1Pick();
        } else if (event.key === "a") {
            lock1Pos -= lock1Rotation;
            setLock1Spinner({ transform: `rotate(${lock1Pos - lock1Rotation}deg)` });
            checkLock1Pick();
        } else if (event.key === "e") {
            lock2Pos += lock2Rotation;
            setLock2Spinner({ transform: `rotate(${lock2Pos + lock2Rotation}deg)` });
            checkLock2Pick();
        } else if (event.key === "q") {
            lock2Pos -= lock2Rotation;
            setLock2Spinner({ transform: `rotate(${lock2Pos - lock2Rotation}deg)` });
            checkLock2Pick();
        }
    }, []);
    
    // DidComponentMount, Dismount
    useEffect(() => {
        console.log("Lock Answers:", lock1Ans, lock2Ans);
        document.addEventListener("keydown", keyPress);
        return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);

    // Reset everything back
    const onClickReset = () => {
        console.log("inside: onClickReset")
        lock1Pos = 0;
        lock2Pos = 0;

        setLock1Spinner({ transform: `rotate(${lock1Pos}deg)` });
        setLock2Spinner({ transform: `rotate(${lock2Pos}deg)` });

        setLock1Hint({ background: "#fff" });
        setLock2Hint({ background: "#fff" });
        setLockUnlock({ background: "#fff" });

        lock1Ans = Math.floor(Math.random() * 72) * 5;
        lock2Ans = Math.floor(Math.random() * 72) * 5;

        console.log("Lock Answers:", lock1Ans, lock2Ans);
        console.log("position: ", lock1Pos, lock2Pos);
    }

    // Function ensures 0 - 360 degrees
    function normalizeAngle(angle) {
        return ((angle % 360) + 360) % 360;
    }

    // checks if lock position matches the answer
    function checkLock1Pick() {
        let abslock1Pos = Math.abs(normalizeAngle(lock1Pos));
        console.log("abs: ", abslock1Pos);

        // 1st check: position == answer
        if (abslock1Pos == lock1Ans) {
            // set it to green
            setLock1Hint({ background: "#ff0000" });
            setTimeout(function(){
                abslock1Pos = Math.abs(normalizeAngle(lock1Pos));
                if (abslock1Pos == lock1Ans) {
                    setLock1Hint({ background: "#00ff00" });
                }
            }, 1000);
        } else {
            setLock1Hint({ background: "#fff" });
        }
        checkBothPick();
    }

    function checkLock2Pick() {
        let abslock2Pos = Math.abs(normalizeAngle(lock2Pos));
        console.log("abs: ", abslock2Pos);

        if (abslock2Pos == lock2Ans) {
            setLock2Hint({ background: "#ff0000" });
            setTimeout(function(){
                abslock2Pos = Math.abs(normalizeAngle(lock2Pos));
                if (abslock2Pos == lock2Ans) {
                    setLock2Hint({ background: "#00ff00" });
                }
            }, 1000);
        } else {
            setLock2Hint({ background: "#fff" });
        }
        checkBothPick();
    }

    function checkBothPick() {
        let abslock1Pos = Math.abs(normalizeAngle(lock1Pos));
        let abslock2Pos = Math.abs(normalizeAngle(lock2Pos));

        if (abslock1Pos == lock1Ans && abslock2Pos == lock2Ans) {
            setLockUnlock({ background: "#ff0000" });
            setTimeout(function(){
                abslock1Pos = Math.abs(normalizeAngle(lock1Pos));
                abslock2Pos = Math.abs(normalizeAngle(lock2Pos));
                if (abslock1Pos == lock1Ans && abslock2Pos == lock2Ans) {
                    setLockUnlock({ background: "#00ff00" });
                }
            }, 5000);
        } else {
            setLockUnlock({ background: "#fff" });
        }
    }

    return (
        <div className='lock--container'>
            <div className='lock--spinner1' style={Lock1Spinner}></div>
            <div className='lock--spinner2' style={Lock2Spinner}></div>
            <div className='lock--hint1' style={Lock1Hint}></div>
            <div className='lock--hint2' style={Lock2Hint}></div>
            <div className='lock--unlock' style={LockUnlock}></div>
            <button className='lock--button' onClick={() => onClickReset()}>Reset</button>
        </div>
    )
}

export default LockPick;