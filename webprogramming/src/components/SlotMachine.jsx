import React, { useState } from 'react'
import '../css/SlotMachine.css';

import cherryImage from '../img/cherry.png';
import lemonImage from '../img/lemon.png';
import grapeImage from '../img/grape.png';
import pearImage from '../img/pear.png';
import watermelonImage from '../img/watermelon.png';
import barImage from '../img/bar.png';
import sevenImage from '../img/seven.png';

const SlotMachine = () => {

    const symbols = [  
        { name: 'cherry', image: cherryImage, payout: 100 },  
        { name: 'lemon', image: lemonImage, payout: 200 },  
        { name: 'grape', image: grapeImage, payout: 300 },  
        { name: 'pear', image: pearImage, payout: 400 },  
        { name: 'watermelon', image: watermelonImage, payout: 500 },  
        { name: 'bar', image: barImage, payout: 1000 },  
        { name: 'seven', image: sevenImage, payout: 2000 },
    ];

    const reels = [  
        [symbols[0], symbols[1], symbols[2], symbols[3], symbols[4], symbols[5], symbols[6], symbols[0], symbols[1], symbols[2], symbols[3], symbols[4], symbols[5], symbols[6]],
        [symbols[0], symbols[1], symbols[2], symbols[3], symbols[4], symbols[5], symbols[6], symbols[0], symbols[1], symbols[2], symbols[3], symbols[4], symbols[5], symbols[6]],
        [symbols[0], symbols[1], symbols[2], symbols[3], symbols[4], symbols[5], symbols[6], symbols[0], symbols[1], symbols[2], symbols[3], symbols[4], symbols[5], symbols[6]],
    ];

    const [roundsPlayed, setRoundsPlayed] = useState(0);
    const [reel1, setReel1] = useState(reels[0]);
    const [reel2, setReel2] = useState(reels[1]);
    const [reel3, setReel3] = useState(reels[2]);
    const [spinning, setSpinning] = useState(false);
    const [result, setResult] = useState('');
    const [payout, setPayout] = useState(10000);
    const [pr1, setPr1] = useState(symbols[4].name);
    const [pr2, setPr2] = useState(symbols[4].name);
    const [pr3, setPr3] = useState(symbols[4].name);

    const handleSpin = () => {
        if (spinning) return;
        setSpinning(true);
        setRoundsPlayed(roundsPlayed + 1);
        setPayout(payout - 100);
      
        // Generate random positions for the reels
        let p1 = {};
        let p2 = {};
        let p3 = {};
        
        let s1 = Math.ceil(Math.random() * (300 - 100 + 1)) + 100;
        let s2 = Math.ceil(Math.random() * (500 - 100 + 1)) + 100;
        let s3 = Math.ceil(Math.random() * (800 - 100 + 1)) + 100;
      
        // Animate the reels
        const interval1 = setInterval(() => {
          setReel1((prevReel) => {
            const newReel = [...prevReel];
            const lastSymbol = newReel.pop();
            newReel.unshift(lastSymbol);
            p1 = newReel[4];
            setPr1(p1.name)
            console.log("newReel1 pos: ", p1.name, " ", s1);
            return newReel;
          });
        }, s1);
        const interval2 = setInterval(() => {
          setReel2((prevReel) => {
            const newReel = [...prevReel];
            const lastSymbol = newReel.pop();
            newReel.unshift(lastSymbol);
            p2 = newReel[4];
            setPr2(p2.name)
            console.log("newReel2 pos: ", p2.name, " ", s2);
            return newReel;
          });
        }, s2);
        const interval3 = setInterval(() => {
          setReel3((prevReel) => {
            const newReel = [...prevReel];
            const lastSymbol = newReel.pop();
            newReel.unshift(lastSymbol);
            p3 = newReel[4];
            setPr3(p3.name)
            console.log("newReel3 pos: ", p3.name, " ", s3);
            return newReel;
          });
        }, s3);
      
        // Stop the reels after a delay
        setTimeout(() => {
          clearInterval(interval1);
          clearInterval(interval2);
          clearInterval(interval3);
      
          // Check the result and calculate the payout
          console.log("reel1 pos1 name: " + p1.name)
          console.log("reel2 pos2 name: " + p2.name)
          console.log("reel3 pos3 name: " + p3.name)

          let pay = 0;
          if (p1.name === p2.name && p2.name === p3.name) {
            pay = Math.floor(p1.payout * 10);
            setPayout(payout + pay);
            setResult(`${pay}`);
          } else if (p1.name === p2.name) {
            pay = Math.floor(p1.payout * 5);
            setPayout(payout + pay);
            setResult(`${pay}`);
          } else if (p2.name === p3.name) {
            pay = Math.floor(p2.payout * 2);
            setPayout(payout + pay);
            setResult(`${pay}`);
          } else if (p1.name === p3.name) {
            pay = Math.floor(p1.payout);
            setPayout(payout + pay);
            setResult(`${pay}`);
          } else {
            setResult(`${pay}`);
          }
      
          setSpinning(false);
        }, 2000);
    };

    return (
        <div className="slot-machine">
            <div className="reel-container">
                <div className="reel">
                    {reel1.map((symbol, index) => (
                        <img key={index} src={symbol.image} alt={symbol.name} />
                    ))}
                </div>
                <div className="reel">
                    {reel2.map((symbol, index) => (
                        <img key={index} src={symbol.image} alt={symbol.name} />
                    ))}
                </div>
                <div className="reel">
                    {reel3.map((symbol, index) => (
                        <img key={index} src={symbol.image} alt={symbol.name} />
                    ))}
                </div>
            </div>
            <div className='slot-container h4'>
                <p className='slot-pick m-2 text-light'>{pr1}</p>
                <p className='slot-pick m-2 text-light'>{pr2}</p>
                <p className='slot-pick m-2 text-light'>{pr3}</p>
            </div>
            <div className='button-container'>
                <button className='m-3 p-3 btn btn-secondary' onClick={handleSpin} disabled={spinning}>Spin</button>
                <p className='m-2 text-light d-flex align-items-center'>Result: {result}</p>
                <p className='m-2 text-light d-flex align-items-center'>Money: {payout}</p>
                <p className='m-2 text-light d-flex align-items-center'>Rounds played: {roundsPlayed}</p>
            </div>
    </div>
    )
}

export default SlotMachine;