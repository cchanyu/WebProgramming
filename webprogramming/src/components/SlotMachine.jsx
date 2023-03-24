import React, { useState, useEffect } from 'react'
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

    // display 3 rows
    // 0(bottom), 1(center), 2(top)
    const reels = [  
        [symbols[0], symbols[1], symbols[2], symbols[3], symbols[4], symbols[5], symbols[6], symbols[0], symbols[1], symbols[2], symbols[3], symbols[4], symbols[5], symbols[6]],
        [symbols[0], symbols[1], symbols[2], symbols[3], symbols[4], symbols[5], symbols[6], symbols[0], symbols[1], symbols[2], symbols[3], symbols[4], symbols[5], symbols[6]],
        [symbols[0], symbols[1], symbols[2], symbols[3], symbols[4], symbols[5], symbols[6], symbols[0], symbols[1], symbols[2], symbols[3], symbols[4], symbols[5], symbols[6]],
    ];

    const [roundsPlayed, setRoundsPlayed] = useState(0);
    const [spinning, setSpinning] = useState(false);
    
    // payout from slot
    const [result, setResult] = useState(0);

    // User money
    const [payout, setPayout] = useState(10000);

    // These store previous reel info
    const [reel1, setReel1] = useState(reels[0]);
    const [reel2, setReel2] = useState(reels[1]);
    const [reel3, setReel3] = useState(reels[2]);

    // Set Switch
    const [sw1, setSw1] = useState(false);
    const [sw2, setSw2] = useState(false);
    const [sw3, setSw3] = useState(false);

    // TOP ROWS
    const [tr1, setTr1] = useState(0);
    const [tr2, setTr2] = useState(0);
    const [tr3, setTr3] = useState(0);

    // CENTER ROWS
    const [cr1, setCr1] = useState(0);
    const [cr2, setCr2] = useState(0);
    const [cr3, setCr3] = useState(0);

    // BOTTOM ROWS
    const [br1, setBr1] = useState(0);
    const [br2, setBr2] = useState(0);
    const [br3, setBr3] = useState(0);
    
    useEffect(() => {
      console.log('Current center row values:', cr1, cr2, cr3);
    }, [cr1, cr2, cr3]);

    const handleSpin = () => {
        if (spinning) return;
        setSpinning(true);
        setRoundsPlayed(roundsPlayed + 1);
        setPayout(payout - 100);
        
        // spinning strength
        let s1 = Math.ceil(Math.random() * (300 - 100 + 1)) + 100;
        let s2 = Math.ceil(Math.random() * (500 - 100 + 1)) + 100;
        let s3 = Math.ceil(Math.random() * (800 - 100 + 1)) + 100;

        let rngList = [];
        for (let i = 0; i < 60; i++) {
          rngList.push(Math.ceil(Math.random() * 6));
        }

        // reel 1: 0 - 19 
        setTr1(rngList[0])
        setCr1(rngList[1])
        setBr1(rngList[2])

        // reel 2: 20 - 39
        setTr2(rngList[14])
        setCr2(rngList[15])
        setBr2(rngList[16])

        // reel 3: 40 - 59
        setTr3(rngList[28])
        setCr3(rngList[29])
        setBr3(rngList[30])

        function payoutFunc(row, mult) {
          let pay = Math.floor(symbols[row].payout * mult);
          setPayout(payout + pay);
          setResult(`${pay}`);
        }

        // SW1------------------------------------------
        if (sw1 === false) {
          setSw1(true)
          setReel1((prevReel) => {
            const newReel = [...prevReel];
            
            // Destination
            newReel[0] = symbols[tr1] // top row
            newReel[1] = symbols[cr1] // center row
            newReel[2] = symbols[br1] // bottom row

            // fillers
            let k = 3;
            for (let i = 3; i <= 6; i++) {
              newReel[i] = symbols[rngList[k]]; k++;
            }

            let j = 7;
            for (let i = 10; i <= 13; i++) {
              newReel[i] = symbols[rngList[j]]; j++; 
            }

            return newReel;
          });
        } else if (sw1 === true) {
          setSw1(false)
          setReel1((prevReel) => {
            const newReel = [...prevReel];
            
            // Starting point
            // newReel[7] = position 8 is the center of the reel
            newReel[7] = symbols[tr1] // top row
            newReel[8] = symbols[cr1] // center row
            newReel[9] = symbols[br1] // bottom row

            // fillers
            let k = 3;
            for (let i = 3; i <= 6; i++) {
              newReel[i] = symbols[rngList[k]]; k++;
            }

            let j = 7;
            for (let i = 10; i <= 13; i++) {
              newReel[i] = symbols[rngList[j]]; j++; 
            }

            return newReel;
          });
        }

        // SW2------------------------------------------
        if (sw2 === false) {
          setSw2(true)
          setReel2((prevReel) => {
            const newReel = [...prevReel];
            
            // Destination
            newReel[0] = symbols[tr2] // top row
            newReel[1] = symbols[cr2] // center row
            newReel[2] = symbols[br2] // bottom row

            // fillers
            let k = 17;
            for (let i = 3; i <= 6; i++) {
              newReel[i] = symbols[rngList[k]]; k++;
            }

            let j = 21;
            for (let i = 10; i <= 13; i++) {
              newReel[i] = symbols[rngList[j]]; j++; 
            }

            return newReel;
          });
        } else if (sw2 === true) {
          setSw2(false)
          setReel2((prevReel) => {
            const newReel = [...prevReel];
            
            // Starting point
            // newReel[7] = position 8 is the center of the reel
            newReel[7] = symbols[tr2] // top row
            newReel[8] = symbols[cr2] // center row
            newReel[9] = symbols[br2] // bottom row

            // fillers
            let k = 17;
            for (let i = 3; i <= 6; i++) {
              newReel[i] = symbols[rngList[k]]; k++;
            }

            let j = 21;
            for (let i = 10; i <= 13; i++) {
              newReel[i] = symbols[rngList[j]]; j++; 
            }

            return newReel;
          });
        }

        // SW3------------------------------------------
        if (sw3 === false) {
          setSw3(true)
          setReel3((prevReel) => {
            const newReel = [...prevReel];
            
            // Destination
            newReel[0] = symbols[tr3] // top row
            newReel[1] = symbols[cr3] // center row
            newReel[2] = symbols[br3] // bottom row

            // fillers
            let k = 31;
            for (let i = 3; i <= 6; i++) {
              newReel[i] = symbols[rngList[k]]; k++;
            }

            let j = 35;
            for (let i = 10; i <= 13; i++) {
              newReel[i] = symbols[rngList[j]]; j++; 
            }

            return newReel;
          });
        } else if (sw3 === true) {
          setSw3(false)
          setReel3((prevReel) => {
            const newReel = [...prevReel];
            
            // Starting point
            // newReel[7] = position 8 is the center of the reel
            newReel[7] = symbols[tr3] // top row
            newReel[8] = symbols[cr3] // center row
            newReel[9] = symbols[br3] // bottom row

            // fillers
            let k = 31;
            for (let i = 3; i <= 6; i++) {
              newReel[i] = symbols[rngList[k]]; k++;
            }

            let j = 35;
            for (let i = 10; i <= 13; i++) {
              newReel[i] = symbols[rngList[j]]; j++; 
            }

            return newReel;
          });
        }

        // idk dont need just yet
        const interval1 = setInterval(() => {
        }, s1);

        const interval2 = setInterval(() => {
        }, s2);

        const interval3 = setInterval(() => {
        }, s3);
      
        // Stop the reels after a delay
        setTimeout(() => {
          clearInterval(interval1);
          clearInterval(interval2);
          clearInterval(interval3);
          console.log('cr: ', cr1, cr2, cr3);

          if (cr1 === cr2 && cr2 === cr3) {
            payoutFunc(cr1, 10);
          } else if (cr1 === cr2) {
            payoutFunc(cr1, 5);
          } else if (cr2 === cr3) {
            payoutFunc(cr2, 2);
          } else if (cr1 === cr3) {
            payoutFunc(cr1, 1);
          } else {
            setResult(0);
          }
      
          setSpinning(false);
        }, 2000);
    };

    return (
        <div className="slot-machine">
            <div className="reel-container">
                <div className="reel reel-left">
                    {reel1.map((symbol, index) => (
                        <img key={index} src={symbol.image} alt={symbol.name} />
                    ))}
                </div>
                <div className="reel reel-center">
                    {reel2.map((symbol, index) => (
                        <img key={index} src={symbol.image} alt={symbol.name} />
                    ))}
                </div>
                <div className="reel reel-right">
                    {reel3.map((symbol, index) => (
                        <img key={index} src={symbol.image} alt={symbol.name} />
                    ))}
                </div>
            </div>
            <div className='slot-container h4 top-row'>
                <p className='slot-pick m-2 text-light'>{tr1}</p>
                <p className='slot-pick m-2 text-light'>{tr2}</p>
                <p className='slot-pick m-2 text-light'>{tr3}</p>
            </div>
            <div className='slot-container h4 center-row'>
                <p className='slot-pick m-2 text-light'>{cr1}</p>
                <p className='slot-pick m-2 text-light'>{cr2}</p>
                <p className='slot-pick m-2 text-light'>{cr3}</p>
            </div>
            <div className='slot-container h4 bottom-row'>
                <p className='slot-pick m-2 text-light'>{br1}</p>
                <p className='slot-pick m-2 text-light'>{br2}</p>
                <p className='slot-pick m-2 text-light'>{br3}</p>
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