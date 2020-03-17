import React, { useEffect } from 'react';
import styles from './ProductView.module.scss';
import Button from '../../common/Button/Button';
import { icon } from '@fortawesome/fontawesome-svg-core';

const ProductView = ({
  match,
  fetchProduct,
  currentProduct,
  addToCart,
  changeGalleryImage,
  galleryPreview
}) => {
  const productId = match.params.id;

  useEffect(() => {
    fetchProduct(productId);
  }, []);

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
                src={currentProduct.galleryImages.image1}
              />
              <img
                onClick={e => changeGalleryImage(e.target.src)}
                src={currentProduct.galleryImages.image2}
              />
              <img
                onClick={e => changeGalleryImage(e.target.src)}
                src={currentProduct.galleryImages.image3}
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

export default ProductView;
