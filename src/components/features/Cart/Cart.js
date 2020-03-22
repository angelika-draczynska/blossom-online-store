import React from 'react';
import styles from './Cart.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  addProductNote,
}) => {
  return (
    <>
      <ul className={styles.container}>
        <li className={styles.product}>
          <div className={styles.image}></div>
          <div className={styles.name}>Product Name</div>
          <div className={styles.price}>Price</div>
          <div className={styles.price}>Product Note</div>
          <div className={styles.removeButtonGhost}></div>
          <div className={styles.removeButtonGhost}></div>
          <div className={styles.quantity}>Q.</div>
          <div className={styles.removeButtonGhost}></div>

          <div className={styles.quantity}>Delete</div>
        </li>
        {cart.products.map(product => (
          <li className={styles.product} key={product._id}>
            <div className={styles.image}>
              <img src={product.image} alt={product.name} />
            </div>
            <div>{product.name}</div>
            <div>${product.price}</div>
            <textarea onChange={e => addProductNote(product, e.target.value)} />
            {product.quantity === 1 ? (
              <button disabled>-</button>
            ) : (
              <button
                className={styles.decrease}
                onClick={() => decreaseQuantity(product._id)}
              >
                -
              </button>
            )}
            <div>{product.quantity}</div>
            <button
              className={styles.increase}
              onClick={() => increaseQuantity(product._id)}
            >
              +
            </button>
            <div
              className={styles.removeButton}
              onClick={() => removeFromCart(product)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.node,
  price: PropTypes.node,
  removeFromCart: PropTypes.func,
  increaseQuantity: PropTypes.func,
  decreaseQuantity: PropTypes.func,
  addProductNote: PropTypes.func,
};
export default Cart;
