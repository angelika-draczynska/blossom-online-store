import React from 'react';
import PropTypes from 'prop-types';
import styles from './Products.module.scss';
import Product from '../Product/Product';
import Spinner from '../../common/Spinner/Spinner';

const Products = ({
  products,
  addToCart,
  isLoadingActive,
  isLoadingError,
}) => {
  const addToCartHandler = product => {
    addToCart(product);
  };

  const productsChecker = () => {
    if (products === undefined || isLoadingError || products.length === 0) {
      return <p>Products Cant be Loaded!</p>;
    } else if (!isLoadingActive || !isLoadingError) {
      return (
        <div className={styles.row}>
          {products &&
            products.length > 1 &&
            products.map(item => (
              <div key={item._id} className={styles.product}>
                <Product {...item} addToCart={addToCartHandler} />
              </div>
            ))}
        </div>
      );
    } else {
      return <Spinner />;
    }
  };
  return <>{productsChecker()}</>;
};

Products.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func,
  isLoadingActive: PropTypes.bool,
  isLoadingError: PropTypes.bool,

};
export default Products;
