import React from 'react';
import { Search } from '@material-ui/icons';

const Header = ({ spotify }) => {
  return (
    <header>
      <div className="header__left">
        <Search />
        <input type="text" placeholder="Search for Artists, Songs, or" />
      </div>
      <div className="header__right"></div>
    </header>
  );
};

export default Header;
