import React from 'react';
import PropTypes from 'prop-types';
import styles from './DrawerToggle.module.scss';

const DrawerToggle = ({ clicked  }) => (
  <div className={styles.drawerToggle} onClick={clicked}><div></div><div></div><div></div></div>
);

DrawerToggle.propTypes = {
  clicked: PropTypes.func,
};

export default DrawerToggle;
