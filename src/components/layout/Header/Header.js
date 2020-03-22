import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Navbar from '../Navbar/Navbar';
import headerImage from '../../../assets/images/header.png';

const Header = ({ drawerToggleClicked }) => (
  <header className={styles.root}>
    <Navbar drawerToggleClicked={drawerToggleClicked} />
    <div className={styles.image}>
      <div className={styles.text}>
        <div className={styles.logo}>
          <h6>Blossom</h6>
        </div>
        <h2 className={styles.subtext}>Flowers Delivery</h2>
      </div>
      <img src={headerImage} alt="Header"/>
    </div>
  </header>
);

Header.propTypes = {
  drawerToggleClicked: PropTypes.func,
};

export default Header;
