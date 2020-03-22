import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.module.scss';

const Backdrop = ({ show, clicked }) => (
  show ? <div className={styles.backdrop} onClick={clicked}></div> : null
);

Backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func,
};

export default Backdrop;
