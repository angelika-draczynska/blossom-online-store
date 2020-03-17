import { connect } from 'react-redux';

import Cart from './Cart';

import { getCartProducts, getTotalPrice, removeFromCart, increaseQuantity, decreaseQuantity, addProductNote } from '../../../redux/cartRedux.js';

const mapStateToProps = state => ({
  cart: getCartProducts(state),
  price: getTotalPrice(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (product) => dispatch(removeFromCart(product)),
  increaseQuantity: (productId) => dispatch(increaseQuantity(productId)),
  decreaseQuantity: (productId) => dispatch(decreaseQuantity(productId)),
  addProductNote: (productId, value) => dispatch(addProductNote(productId, value)),
});
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
