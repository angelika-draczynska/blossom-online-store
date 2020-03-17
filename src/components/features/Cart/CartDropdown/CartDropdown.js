import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTotalPrice, getCartProducts } from '../../../../redux/cartRedux.js';
import styles from './CartDropdown.module.scss';
import Button from '../../../common/Button/Button';

const CartDropdown = ({ price, cart }) => (
  <div className={styles.cartDropdown}>
    <div className={styles.myCart}>My Cart</div>
    <div className={styles.cartItems}>
      {cart.products.length > 0 ? cart.products.map(product => (
        <div className={styles.products}>
          <div className={styles.image}>
            <img src={product.image} />
          </div>
          <div className={styles.name}>{product.name}</div>
          <div className={styles.price}>${product.price}</div>
          <div className={styles.quantity}>x{product.quantity}</div>

        </div>
      )) : <p>Your cart is empty!</p>}
    </div>
    <div className={styles.totalPrice}>
      Total Price:<span>${price}</span>
    </div>
    <Link to="/checkout">
      <Button>GO TO CHECKOUT</Button>
    </Link>
  </div>
);

const mapStateToProps = state => ({
  price: getTotalPrice(state),
  cart: getCartProducts(state)
});

export default connect(mapStateToProps)(CartDropdown);
