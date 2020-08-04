import React from 'react';
import './Footer.css';
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
} from '@material-ui/icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left"></div>
      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right"></div>
    </div>
  );
};

export default Footer;
