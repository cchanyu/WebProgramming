import React from 'react'
import { useState, useRef } from 'react';
import '../css/Raffle.css';

const Raffle = () => {
    
    const [draw, setDraw] = useState(0);
    var input = 1000;
    var drawloop = useRef(null);

    function drawTheNumber() {
        drawloop.current = setInterval(drawing, 70)
    }

    function stopTheNumber() {
        clearInterval(drawloop.current);
    }

    function drawing() {
        setDraw(Math.floor(Math.random() * input));
    }

    return (
        <div className='raffle'>
            <h1 className='m-3 text-light'>Number being drawn:</h1>
            <div className='h3 text-light'>{draw}</div>
            <button className='m-3 btn btn-secondary' onClick={() => drawTheNumber()}>Draw</button>
            <button className='m-3 btn btn-secondary' onClick={() => stopTheNumber()}>Stop</button>
        </div>
    )
}

export default Raffle