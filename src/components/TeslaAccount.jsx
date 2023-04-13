import React, { useState } from "react";
import "./TeslaAccount.css";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Car from "./Car";

function TeslaAccount() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = useSelector(selectUser);

  const logoutOfApp = () => {};

  return (
    <div className="teslaAccount">
      {isMenuOpen && <Menu />}
      <div className="teslaAccount__header">
        <div className="teslaAccount__logo white-logo">
          <Link>
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
              className="header__logoImg"
            />
          </Link>
        </div>
        <div className="teslaAccount__links">
          <Link to="/teslaaccount">Model S</Link>
          <Link to="/teslaaccount">Model 3</Link>
          <Link to="/teslaaccount">Model X</Link>
          <Link to="/teslaaccount">Model Y</Link>
          <Link to="/teslaaccount">Solar Roof</Link>
          <Link to="/teslaaccount">Solar Panels</Link>
          <Link to="/teslaaccount">Shop</Link>
          <Link to="/teslaaccount">Tesla Account</Link>
          <Link onClick={logoutOfApp}>Log out</Link>
          <div
            className="teslaAccount__menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <CloseIcon className="dropdown-menu close-icon-black" />
            ) : (
              <MenuIcon className="dropdown-menu" />
            )}
          </div>
        </div>
      </div>
      <div className="teslaAccount__info">
        <div className="teslaAccount__person">
          <h4>{user?.displayName + "'s Tesla"}</h4>
        </div>
        <div className="teslaAccount__infoRight">
          <Link>Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link onClick={logoutOfApp}>Sign Out</Link>
        </div>
      </div>
      <div className="teslaAccount__car">
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          model="model s"
          testDrive
        />
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          model="model x"
        />
      </div>
    </div>
  );
}

export default TeslaAccount;
