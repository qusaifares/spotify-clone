import React from 'react';
import './Player.css';
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

const Player = () => {
  return (
    <div className="player">
      <div className="player__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Body */}
        <Body />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Player;
