import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header({isMenuOpen, setIsMenuOpen}) {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt=""
            className="header__logoImg"
          />
        </Link>
      </div>
      <div className="header__links">
        <Link className="header__link" to='/'>Model S</Link>
        <Link className="header__link" to='/'>Model 3</Link>
        <Link className="header__link" to='/'>Model X</Link>
        <Link className="header__link" to='/'>Model Y</Link>
        <Link className="header__link" to='/'>Solar Roof</Link>
        <Link className="header__link" to='/'>Solar Panels</Link>
      </div>
      <div className="header__right">
        <Link className={isMenuOpen && 'hidden__link'} to='/'>Shop</Link>
        <Link className={isMenuOpen && 'hidden__link'} to='/login'>Tesla Account</Link>
        <div className="header__menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon className="dropdown-menu"/> : <MenuIcon className="dropdown-menu"/>}
        </div>
      </div>
    </div>
  );
}

export default Header;
