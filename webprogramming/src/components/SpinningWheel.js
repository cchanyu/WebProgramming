import React, { useState, useRef } from 'react';
import '../css/SpinningWheel.css';

const SpinningWheel = () => {
    const wheelRef = useRef(null);
    const pointerRef = useRef(null);
    const [WheelSpinner, setWheelSpinner] = useState({
        transform: 0
    });

    const onClickSpin = () => {
        let wheel_value = (Math.random() * 8).toFixed(2);
        setWheelSpinner({ transform: `rotate(${wheel_value}turn)` });
        console.log("wheel val: ", wheel_value);

        const myWheelRef = wheelRef.current;
        const myPointerRef = pointerRef.current;
        console.log(myWheelRef);
        console.log(myPointerRef);

        let wheel_spinner = document.querySelectorAll([".wheel--spinner"]);
        let wheel_pointer = document.querySelectorAll([".wheel--pointer"]);
        let answer = areElementsTouching(myWheelRef, myPointerRef);
        console.log(answer);
    }

    function areElementsTouching(wheel_spinner, wheel_pointer) {
        const rect1 = wheel_spinner.getBoundingClientRect();
        const rect2 = wheel_pointer.getBoundingClientRect();
        return !(rect1.right < rect2.left || 
                 rect1.left > rect2.right || 
                 rect1.bottom < rect2.top || 
                 rect1.top > rect2.bottom);
    }

    return (
        <div className='wheel--container'>
            <div className='wheel--pointer' ref={pointerRef}></div>
            <div className='wheel--button' onClick={() => onClickSpin()}>Spin</div>
            <div className='wheel--spinner' style={WheelSpinner}>
                <div className="wheel--number" style={{'--i':'1', '--clr':'#db7093'}} ref={wheelRef}><span>1</span></div>
                <div className="wheel--number" style={{'--i':'2', '--clr':'#20b2aa'}} ref={wheelRef}><span>2</span></div>
                <div className="wheel--number" style={{'--i':'3', '--clr':'#d63e92'}} ref={wheelRef}><span>3</span></div>
                <div className="wheel--number" style={{'--i':'4', '--clr':'#daa520'}} ref={wheelRef}><span>4</span></div>
                <div className="wheel--number" style={{'--i':'5', '--clr':'#ff340f'}} ref={wheelRef}><span>5</span></div>
                <div className="wheel--number" style={{'--i':'6', '--clr':'#ff7f50'}} ref={wheelRef}><span>6</span></div>
                <div className="wheel--number" style={{'--i':'7', '--clr':'#3cb371'}} ref={wheelRef}><span>7</span></div>
                <div className="wheel--number" style={{'--i':'8', '--clr':'#4169e1'}} ref={wheelRef}><span>8</span></div>
            </div>
            <div className='wheel--text'>You've won: some value</div>
        </div>
    )
}

export default SpinningWheel;