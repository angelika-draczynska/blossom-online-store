import React from 'react';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className={styles.logo}>
    <Link to="/">
      <h1>Blossom</h1></Link>
  </div>
);

export default Logo;
