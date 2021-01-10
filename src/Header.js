import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import AlbumIcon from '@material-ui/icons/Album';
import MoreIcon from '@material-ui/icons/More';
import { useHistory, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  const history = useHistory();

  const reddirect = () => {
    history.push('./signup');
  };

  const reddirectHome = () => {
    history.push('./');
  };
  const homeButton = () => {
    history.push('./');
  };

  const seasonButtons = () => {
    history.push('./season');
  };

  const trailerButton = () => {
    history.push('./trailers');
  };

  return (
    <motion.div
      initial={{ width: '0%' }}
      animate={{ width: '100%' }}
      className="header">
      <div className="header__left">
        <img
          onClick={reddirectHome}
          className="logo__image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgiydX3hvT5onpxbi21vXCqFe4DEiWo55G0Q&usqp=CAU"
        />
      </div>

      <div className="header__middle">
        <div className="header__middleLinks">
          <HomeIcon />
          <Link onClick={homeButton}> Home </Link>
        </div>

        <div className="header__middleLinks">
          <AlbumIcon />
          <Link onClick={seasonButtons}> Seasons </Link>
        </div>

        <div className="header__middleLinks">
          <MoreIcon />
          <Link onClick={trailerButton}> trailers </Link>
        </div>
      </div>

      <div className="header__right">
        <Button onClick={reddirect} className="header__button">
          {' '}
          Sign Up{' '}
        </Button>
      </div>
    </motion.div>
  );
}

export default Header;
