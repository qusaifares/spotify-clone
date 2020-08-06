import React from 'react';
import './SidebarOption.css';
import {useDataLayerValue} from '../../DataLayer'

const SidebarOption = ({ spotify, playlistInfo, title, Icon, optionType }) => {
  console.log('INFO', playlistInfo)
  const [{playlist_view}, dispatch] = useDataLayerValue();
  const setPlaylistView = id => {
    spotify.getPlaylist(id).then((res) =>
        dispatch({
          type: 'SET_PLAYLIST_VIEW',
          playlist_view: res,
        })
      );
    console.log(playlist_view)
  }
  return (
    <div className="sidebarOption" onClick={optionType === 'playlist' ? () => setPlaylistView(playlistInfo.id) : null}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
