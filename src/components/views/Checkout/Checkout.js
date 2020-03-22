import React from 'react';
import OrderForm from '../../features/OrderForm/OrderFormContainer';
import Cart from '../../features/Cart/CartContainer';
import styles from './Checkout.module.scss';
import PropTypes from 'prop-types';

const Checkout = ({ totalPrice }) => {
  return (
    <div className={styles.checkout}>
      <Cart />
      <div className={styles.totalPrice}>
        Total Price:<span>${totalPrice}</span>
      </div>
      <OrderForm />
    </div>
  );
};

Checkout.propTypes = {
  totalPrice: PropTypes.number,
};

export default Checkout;
