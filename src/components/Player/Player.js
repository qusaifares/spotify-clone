import React from 'react';
import './Player.css';
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

const Player = ({spotify}) => {
  return (
    <div className="player">
      <div className="player__body">
        {/* Sidebar */}
        <Sidebar spotify={spotify} />
        {/* Body */}
        <Body spotify={spotify} />
      </div>
      {/* Footer */}
      <Footer spotify={spotify} />
    </div>
  );
};

export default Player;
