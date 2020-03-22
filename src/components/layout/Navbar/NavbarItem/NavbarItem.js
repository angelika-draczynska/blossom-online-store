import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavbarItem.module.scss';
import { NavLink } from 'react-router-dom';

const NavbarItem = ({ link, exact, children }) => (
  <li className={styles.navbarItem}>
    <NavLink to={link} exact={exact} activeClassName={styles.active}>
      {children}
    </NavLink>
  </li>
);

NavbarItem.propTypes = {
  link: PropTypes.string,
  exact: PropTypes.any,
  children: PropTypes.any,
};

export default NavbarItem;
