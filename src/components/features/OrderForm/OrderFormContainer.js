import { connect } from 'react-redux';

import OrderForm from './OrderForm';

import { getAllProducts } from '../../../redux/productsRedux.js';
import {
  getCurrentProduct,
  fetchProduct,
} from '../../../redux/productRedux.js';
import {
  getCartProducts,
  addToCart,
  getTotalPrice,
  clearCart,
} from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  products: getAllProducts(state),
  currentProduct: getCurrentProduct(state),
  cart: getCartProducts(state),
  totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: productId => dispatch(fetchProduct(productId)),
  addToCart: product => dispatch(addToCart(product)),
  clearCart: () => dispatch(clearCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
