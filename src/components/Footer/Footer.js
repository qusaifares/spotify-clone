import React from 'react';
import './Footer.css';
import { Grid, Slider } from '@material-ui/core';
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
} from '@material-ui/icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer__left">
        <img
          src="https://static1.squarespace.com/static/5d2e2c5ef24531000113c2a4/5d392a924397f100011fa30e/5d4478a0ab37ff0001f18d7b/1580869069599/?format=500w"
          alt=""
          className="footer__albumLogo"
        />
        <div className="footer__songInfo">
          <h4>Song Name</h4>
          <p>Artist</p>
        </div>
      </div>
      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
