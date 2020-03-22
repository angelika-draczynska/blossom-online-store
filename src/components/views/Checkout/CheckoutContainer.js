import { connect } from 'react-redux';
import Checkout from './Checkout';
import { getAllProducts } from '../../../redux/productsRedux.js';
import {
  getCartProducts,
  addToCart,
  getTotalPrice,
  clearCart,
} from '../../../redux/cartRedux.js';

const mapStateToProps = state => ({
  products: getAllProducts(state),
  cart: getCartProducts(state),
  totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addToCart(product)),
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
