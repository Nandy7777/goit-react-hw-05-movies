import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
      <div>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </div>
  );
};

export default Header;
