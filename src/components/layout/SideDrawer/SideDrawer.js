import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideDrawer.module.scss';
import Logo from '../Logo/Logo';
import Backdrop from '../../common/Backdrop/Backdrop';
import NavbarItem from '../Navbar/NavbarItem/NavbarItem';

const SideDrawer = ({ open, closed }) => {
  let attachedClasses = [styles.sideDrawer, styles.close];

  if (open) {
    attachedClasses = [styles.sideDrawer, styles.open];
  }
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        <Logo />
        <ul className={styles.navbar}>
          <NavbarItem link="/" exact active>
            Home
          </NavbarItem>
          <NavbarItem link="/orders">How It Works</NavbarItem>
          <NavbarItem link="/about">About</NavbarItem>
          <NavbarItem link="/contact">Contact</NavbarItem>
        </ul>
      </div>
    </>
  );
};

SideDrawer.propTypes = {
  open: PropTypes.bool,
  closed: PropTypes.func,
};

export default SideDrawer;
