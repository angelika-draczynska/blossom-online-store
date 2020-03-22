import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import HowItWorks from '../../features/HowItWorks/HowItWorks';
import Products from '../../features/Products/ProductsContainer';
import Newsletter from '../../features/Newsletter/Newsletter';

const Homepage = ({ fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <main>
      <HowItWorks />
      <h2>Our Flowers</h2>
      <Products />
      <Newsletter />
    </main>
  );
};

Homepage.propTypes = {
  fetchProducts: PropTypes.func,
};
export default Homepage;
