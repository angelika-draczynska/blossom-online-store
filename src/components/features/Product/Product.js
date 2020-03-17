import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

const Product = ({ name, price, image, _id, addToCart, note }) => (
  <div className={styles.product}>

    <div className={styles.image}>
    <img src={image} />
    </div>
    <h3>{name}</h3>
    <h5>${price}</h5>
    <div className={styles.buttons}>
    <Button clicked={() => addToCart({name, price, image, _id, note, quantity: 1 })}>Add to cart</Button>
    <Link to={`/products/${_id}`}>
      <Button>View Product</Button>
    </Link>
    </div>
  </div>
);

Product.propTypes = {};
export default Product;
