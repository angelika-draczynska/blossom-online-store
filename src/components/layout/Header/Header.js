import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import headerImage from '../../../assets/images/header.png'
const Header = ({drawerToggleClicked}) => (
  <header className={styles.root}>
    <Navbar drawerToggleClicked={drawerToggleClicked}/>
    <div className={styles.image}>
      <div className={styles.text}>
      <div className={styles.logo}>
        <h6>Blossom</h6>
      </div>
      <h2 className={styles.subtext}>Flowers Delivery</h2>
      </div>
      
      <img src={headerImage} />
    </div>

    
  </header>
);

Header.propTypes = {};
export default Header;
