import React, { useState, useRef, useEffect } from 'react';
import '../css/SpinningWheel.css';

const SpinningWheel = () => {
    const [WheelValue, setWheelValue] = useState(Math.ceil(Math.random() * (3600 - 1080 + 1)) + 1080);
    const [WheelSpinner, setWheelSpinner] = useState({transform: 0});
    const [WheelText, setWheelText] = useState({
        content: 'Click to Spin',
        isDisabled: false
    })

    const elementid = [1, 2, 3, 4, 5, 6, 7, 8];
    const refs = useRef([]);
    useEffect(() => {
        console.log(refs)
    });

    const colors = ['db7093', '20b2aa', 'd63e92', 'daa520', 'ff340f', 'ff7f50', '3cb371', '4169e1'];
    const elements = generateElementsArray(['iPod', 'iPhone', 'iMac', 'MacBook', 'AirPods', 'iWatch', 'Mac Studio', 'Apple TV']);
    
    function generateElementsArray(names) {
        return names.map((name, index) => ({
          id: (index + 1),
          ref: refs[index + 1],
          style: {'--i':`${(index + 1)}`, '--clr':`#${colors[index]}`},
          content: name,
        }));
    }

    const onClickSpin = () => {
        setWheelSpinner({ transform: `rotate(${WheelValue}deg)` });
        setWheelText({ content: 'Spinning', isDisabled: true });
        console.log("spin value: ", WheelValue);
        setWheelValue( WheelValue + Math.ceil(Math.random() * (3600 - 1080 + 1)) + 1080 ); 

        let highestRefTop = 9999;
        let highestRefID = null;
        let highestRefName = null;

        setTimeout(function(){
            for (const i of elementid) {
                let myWheelRefObj = refs.current[i];
                let myWheelRefTop = myWheelRefObj.getBoundingClientRect().top;
                let myWheelRefID = i;
                let myWheelRefName = myWheelRefObj.outerText;

                if (myWheelRefTop < highestRefTop) {
                    highestRefTop = myWheelRefTop;
                    highestRefID = myWheelRefID;
                    highestRefName = myWheelRefName;
                    console.log('new king: ', highestRefName);
                }
                console.log(myWheelRefObj);
            }

            winnerAnnounced(highestRefID, highestRefName);
        }, 6000);
    }

    function winnerAnnounced(highestRefID, highestRefName) {
        setWheelText({ content: 'You\'ve won: ' + highestRefName, isDisabled: false });
        console.log('won item name: ' + highestRefName);
        console.log('won item index: ' + highestRefID);
    }

    return (
        <div className='wheel--container'>
            <button className='wheel--button' onClick={() => onClickSpin()} disabled={WheelText.isDisabled}>Spin</button>
            <div className='wheel--spinner' style={WheelSpinner}>
                {elements.map((element) => (
                    <div className='wheel--number' key={element.id} ref={(el) => (refs.current[element.id] = el)} style={element.style}>
                        <span>{element.content}</span>
                    </div>
                ))}
            </div>
            <div className='wheel--text' style={WheelText}>{ WheelText.content }</div>
        </div>
    )
}

export default SpinningWheel;