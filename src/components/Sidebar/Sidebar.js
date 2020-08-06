import React from 'react';
import './Sidebar.css';
import SidebarOption from '../SidebarOption/SidebarOption';
import { Home, Search, LibraryMusic } from '@material-ui/icons';
import { useDataLayerValue } from '../../DataLayer';
const { PUBLIC_URL } = process.env;

const Sidebar = ({spotify}) => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        src={`${PUBLIC_URL}/images/spotify-logo.png`}
        alt=""
        className="sidebar__logo"
      />
      <SidebarOption onClick={() => console.log('hello')} title="Home" Icon={Home} />
      <SidebarOption title="Search" Icon={Search} />
      <SidebarOption title="Your Library" Icon={LibraryMusic} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption spotify={spotify} playlistInfo={playlist} title={playlist.name} optionType='playlist' />
      ))}
    </div>
  );
};

export default Sidebar;
