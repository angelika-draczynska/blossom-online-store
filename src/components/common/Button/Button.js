import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, clicked }) => (
  <button className={styles.button} onClick={clicked}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.node,
  clicked: PropTypes.func,
};

export default Button;
