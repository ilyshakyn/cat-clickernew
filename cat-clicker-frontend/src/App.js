// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainScreen from './pages/MainScreen';
import DailyReward from './pages/DailyReward';
import DailyCode from './pages/DailyCode';
import Combo from './pages/Combo';
import Energy from './pages/Energy';
import Boost from './pages/Boost';
import Exchange from './pages/Exchange';
import Mine from './pages/Mine';
import Friends from './pages/Friends';
import Earn from './pages/Earn';
import Airdrop from './pages/Airdrop';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainScreen />} />
      <Route path="/daily-reward" element={<DailyReward />} />
      <Route path="/daily-code" element={<DailyCode />} />
      <Route path="/combo" element={<Combo />} />
      <Route path="/energy" element={<Energy />} />
      <Route path="/boost" element={<Boost />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/mine" element={<Mine />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/earn" element={<Earn />} />
      <Route path="/airdrop" element={<Airdrop />} />
    </Routes>
  );
}

export default App;
