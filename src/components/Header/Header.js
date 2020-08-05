import React from 'react';
import './Header.css';
import { Search } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { DataLayerValue, useDataLayerValue } from '../../DataLayer';

const Header = ({ spotify }) => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <header>
      <div className="header__left">
        <Search />
        <input
          type="text"
          placeholder="Search for Artists, Songs, or Podcasts."
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </header>
  );
};

export default Header;
