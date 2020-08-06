import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';
    const _token = hash.access_token || token; // remove || token after development

    if (_token) {
      console.log('token exists');
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      spotify.setAccessToken(_token);

      
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });
      spotify.getPlaylist('37i9dQZEVXcHYFnBNXK3Tt').then((res) =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: res,
        })
      );
      spotify.getMyTopArtists().then((res) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: res,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);
  console.log('TOKEN =====>', token);
  console.log(('USER ======>', user));
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
};

export default App;
