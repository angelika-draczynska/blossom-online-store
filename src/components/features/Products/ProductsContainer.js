import { connect } from 'react-redux';

import Products from './Products';

import { getAllProducts, isLoadingActive, isLoadingError } from '../../../redux/productsRedux.js';
import { addToCart } from '../../../redux/cartRedux.js';

const mapStateToProps = state => ({
  products: getAllProducts(state),
  isLoadingActive: isLoadingActive(state),
  isLoadingError: isLoadingError(state),

});

const mapDispatchToProps = (dispatch) => ({
addToCart: (product) => dispatch(addToCart(product)),

})
export default connect(mapStateToProps, mapDispatchToProps)(Products);
