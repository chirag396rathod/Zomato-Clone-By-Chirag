import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import iconUser from '../../../assets/user.svg'

const index = () => {
  return (
    <div className="max-width header">
      <img
        className="header-logo"
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
        alt="zomatoLogo"
      />
      <div className="header-rigth">
        <div className="header-location-container">
          <div className="location-wrapper">
            <div className="location-icon-name absolute-center">
              <LocationOnIcon />
              <div>Bangalore</div>
            </div>
            <div className="absolute-center">
              <ArrowDropDownIcon />
            </div>
          </div>
          <div className="separator" />
          <div className="header-searchbar">
            <SearchIcon className="header-searchbar-icon" />
            <input
              className="inputbox"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>
      </div>
      <div className="profile-wrapper">
        <img src={iconUser} alt="userIcon" className='userIcon' />
        <div className="profileName">Chirag</div>
        <ArrowDropDownIcon />
      </div>
    </div>
  );
};

export default index;
