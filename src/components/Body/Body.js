import React from 'react';
import './Body.css';
import Header from '../Header/Header';

const Body = ({ spotify }) => {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          src="https://i.scdn.co/image/ab67616d00001e0206d8b5e2eaf04b1caa90f410"
          alt=""
        />
        <div className="body__infoText"></div>
      </div>
    </div>
  );
};

export default Body;
