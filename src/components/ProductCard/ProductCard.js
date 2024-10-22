import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './ProductCard.module.css';

const ProductCard = ({ price, imageAlt, name, image, meta, showQuickView }) => {
  const productImage = getImage(image);

  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        role="presentation"
        onClick={showQuickView}
      >
        {/* Render the optimized image */}
        {productImage ? (
          <GatsbyImage className={styles.image} image={productImage} alt={imageAlt} />
        ) : (
          <div className={styles.noImage}>No image available</div>
        )}
      </div>
      <div className={styles.detailsContainer}>
        <span className={styles.productName}>{name}</span>
        <div className={styles.prices}>
          <span>£{price}</span>
        </div>
        <span className={styles.meta}>{meta}</span>
      </div>
    </div>
  );
};

export default ProductCard;
