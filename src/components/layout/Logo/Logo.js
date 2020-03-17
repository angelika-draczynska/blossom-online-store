import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className={styles.logo}>
    <Link to="/">
      <h1>Blossom</h1></Link>
    
  </div>
);

Logo.propTypes = {};
export default Logo;
