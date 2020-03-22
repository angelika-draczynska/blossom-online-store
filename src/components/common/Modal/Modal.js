import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';

const Modal = ({ show, modalClosed, title, message }) => {
  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className={styles.modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        <div className={styles.title}>{title}</div>
        <div className={styles.message}>{message}</div>
        <Link to="/">
          <div className={styles.button}>
            <Button>Ok</Button>
          </div>
        </Link>
      </div>
    </>
  );
};
Modal.propTypes = {
  show: PropTypes.bool,
  modalClosed: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
};

export default Modal;
