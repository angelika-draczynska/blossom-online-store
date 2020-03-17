import { connect } from 'react-redux';

import ProductView from './ProductView';

import { getAllProducts, } from '../../../redux/productsRedux.js';
import { getCurrentProduct, fetchProduct, getGalleryPreview, changeGalleryImage } from '../../../redux/productRedux.js';

import { getCartProducts, addToCart } from '../../../redux/cartRedux.js';

const mapStateToProps = state => ({
//   categories: getAll(state),
  products: getAllProducts(state),
  currentProduct: getCurrentProduct(state),
  cart: getCartProducts(state),
  galleryPreview: getGalleryPreview(state),
});

const mapDispatchToProps = (dispatch) => ({
fetchProduct: (productId) => dispatch(fetchProduct(productId)),
addToCart: (product) => dispatch(addToCart(product)),
changeGalleryImage: (imageUrl) => dispatch(changeGalleryImage(imageUrl))

})
export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
