import React from 'react';
import './Login.css';
import { loginURL } from '../../spotify';
const { PUBLIC_URL } = process.env;

const Login = () => {
  return (
    <div className="login">
      {/* Spotify Logo */}
      <img
        src={`${PUBLIC_URL}/images/spotify-logo.png`}
        alt=""
        className="login-logo"
      />
      <a href={loginURL} className="login-btn">
        Login with Spotify
      </a>
      {/* Login Button */}
    </div>
  );
};

export default Login;
