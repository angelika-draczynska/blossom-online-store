import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Products.module.scss';
import Product from '../Product/Product';
import Button from '../../common/Button/Button';
import Spinner from '../../common/Spinner/Spinner';

const Products = ({
  products,
  addToCart,
  currentProduct,
  isLoadingActive,
  isLoadingError, 
}) => {

  const addToCartHandler = product => {
    addToCart(product);
  };


  const productsChecker = () => {
    if (products === undefined || isLoadingError || products.length === 0 ) {
      return <p>Products Can't be Loaded!</p>;
    } else if (!isLoadingActive || !isLoadingError) {
      return (
        <div className={styles.row}>
          {products && products.length > 1 && products.map(item => (
            <div key={item._id} className={styles.product}>
              <Product
                {...item}
                addToCart={addToCartHandler}
              />
            </div>
          ))}
        </div>
      );
    } else {
      return <Spinner />;
    }
  };
  return (
    <>
      {productsChecker()}
    </>
  );
};

Products.propTypes = {};
export default Products;
