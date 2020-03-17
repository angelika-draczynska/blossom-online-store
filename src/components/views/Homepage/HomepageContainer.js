import { connect } from 'react-redux';

import Homepage from './Homepage';

import { getAllProducts, fetchProducts } from '../../../redux/productsRedux.js';
import { getCurrentProduct } from '../../../redux/productRedux.js';
import { getCartProducts } from '../../../redux/cartRedux.js';

const mapStateToProps = state => ({
//   categories: getAll(state),
  products: getAllProducts(state),
  currentProduct: getCurrentProduct(state),
  cart: getCartProducts(state),

});

const mapDispatchToProps = (dispatch) => ({
fetchProducts: () => dispatch(fetchProducts()),

})
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
