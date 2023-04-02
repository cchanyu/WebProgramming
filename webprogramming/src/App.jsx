import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Spinningwheel from './components/SpinningWheel';
import LockPick from './components/LockPick';
import GrabUser from './components/GrabUser';
import Raffle from './components/Raffle';
import SlotMachine from './components/SlotMachine';
import SlotMachine2 from './components/SlotMachine2';
import LoadCSV from './components/LoadCSV';

const App = () => {
    return (
        <div className="App">
            <Router>
                <nav className='navbar navbar-expand-lg justify-content-center navbar-light bg-dark text-center py-4'>
                    <Link to='WebProgramming/' className='nav-link text-white mx-2'>Home</Link>
                    <Link to='WebProgramming/lockpick' className='nav-link text-white mx-2'>LockPick</Link>
                    <Link to='WebProgramming/spinwheel' className='nav-link text-white mx-2'>SpinWheel</Link>
                    <Link to='WebProgramming/raffle' className='nav-link text-white mx-2'>Raffle</Link>
                    <Link to='WebProgramming/slotmachine' className='nav-link text-white mx-2'>SlotMachine</Link>
                    <Link to='WebProgramming/slotmachine2' className='nav-link text-white mx-2'>SlotMachine2</Link>
                    <Link to='WebProgramming/loadcsv' className='nav-link text-white mx-2'>LoadCSV</Link>
                </nav>

                <div className='app-container justify-content-center text-center'>
                    {/* React Route */}
                    <Routes className="route">
                        <Route path="/WebProgramming/" element={<GrabUser />}/>
                        <Route path="WebProgramming/lockpick" element={<LockPick />}/>
                        <Route path="WebProgramming/spinwheel" element={<Spinningwheel />}/>
                        <Route path="WebProgramming/raffle" element={<Raffle />}/>
                        <Route path="WebProgramming/slotmachine" element={<SlotMachine />}/>
                        <Route path="WebProgramming/slotmachine2" element={<SlotMachine2 />}/>
                        <Route path="WebProgramming/loadcsv" element={<LoadCSV />}/>
                    </Routes>
                </div>

                <div className='position-absolute fixed-bottom h3 m-3 text-light'>Chanyu's Playground</div>
            </Router>
        </div>
    )
}

export default App;