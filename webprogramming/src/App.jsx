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
                    <Link to='/' className='nav-link text-white mx-2'>Home</Link>
                    <Link to='/lockpick' className='nav-link text-white mx-2'>LockPick</Link>
                    <Link to='/spinwheel' className='nav-link text-white mx-2'>SpinWheel</Link>
                    <Link to='/raffle' className='nav-link text-white mx-2'>Raffle</Link>
                    <Link to='/slotmachine' className='nav-link text-white mx-2'>SlotMachine</Link>
                    <Link to='/slotmachine2' className='nav-link text-white mx-2'>SlotMachine2</Link>
                    <Link to='/loadcsv' className='nav-link text-white mx-2'>LoadCSV</Link>
                </nav>

                <div className='app-container justify-content-center text-center'>
                    {/* React Route */}
                    <Routes className="route">
                        <Route path="/" element={<GrabUser />}/>
                        <Route path="lockpick" element={<LockPick />}/>
                        <Route path="spinwheel" element={<Spinningwheel />}/>
                        <Route path="raffle" element={<Raffle />}/>
                        <Route path="slotmachine" element={<SlotMachine />}/>
                        <Route path="slotmachine2" element={<SlotMachine2 />}/>
                        <Route path="loadcsv" element={<LoadCSV />}/>
                    </Routes>
                </div>

                <div className='position-absolute fixed-bottom h3 m-3 text-light'>Chanyu's Playground</div>
            </Router>
        </div>
    )
}

export default App;