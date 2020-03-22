import React, { useEffect } from 'react';
import styles from './ProductView.module.scss';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

const ProductView = ({
  match,
  fetchProduct,
  currentProduct,
  addToCart,
  changeGalleryImage,
}) => {
  const productId = match.params.id;

  useEffect(() => {
    fetchProduct(productId);
  }, [fetchProduct, productId]);

  return (
    <>
      {currentProduct ? (
        <div className={styles.container}>
          <div className={styles.name}>{currentProduct.name}</div>
          <div className={styles.image}>
            <img src={currentProduct.image} alt={currentProduct.name} />
          </div>
          <div className={styles.description}>{currentProduct.description}</div>
          {currentProduct.galleryImages ? (
            <div className={styles.galleryImages}>
              <img
                onClick={e => changeGalleryImage(e.target.src)}
                src={currentProduct.galleryImages.image1} alt={currentProduct.name}
              />
              <img
                onClick={e => changeGalleryImage(e.target.src)}
                src={currentProduct.galleryImages.image2} alt={currentProduct.name}
              />
              <img
                onClick={e => changeGalleryImage(e.target.src)}
                src={currentProduct.galleryImages.image3} alt={currentProduct.name}
              /> 
            </div>
          ) : null}
          <div className={styles.category}>
            <strong>Category:</strong> {currentProduct.category}
          </div>
          {/* <div className={styles.options}>
            <h4>Subscription:</h4>
            <div className={styles.option}>
              <input type="radio" id="male" name="gender" value="male" />
              One time
            </div>
            <div className={styles.option}>
              <input type="radio" id="male" name="gender" value="male" />7 days
            </div>
            <div className={styles.option}>
              <input type="radio" id="male" name="gender" value="male" />
              14 days
            </div>
          </div> */}
          <div className={styles.price}>Price: ${currentProduct.price}</div>
          <div className={styles.button}>
            <Button clicked={() => addToCart(currentProduct)}>
              Add To Cart
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
};

ProductView.propTypes = {
  match: PropTypes.object,
  fetchProduct: PropTypes.func,
  currentProduct: PropTypes.any,
  addToCart: PropTypes.func,
  changeGalleryImage: PropTypes.func,
};

export default ProductView;
