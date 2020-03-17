import React from 'react';
import OrderForm from '../../features/OrderForm/OrderFormContainer';
import Cart from '../../features/Cart/CartContainer';
import styles from './Checkout.module.scss';

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

export default Checkout;
