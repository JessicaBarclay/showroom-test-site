import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './ProductCard.module.css';

const ProductCard = ({ price, imageAlt, name, image, available, showQuickView }) => {
  const productImage = getImage(image);

  return (
    <div className={styles.root}>
      <div className={styles.imageContainer} role="presentation" onClick={showQuickView}      >

      <GatsbyImage className={styles.image} image={productImage} alt={imageAlt} />

      </div>
      <div className={styles.detailsContainer}>
        <span className={styles.productName}>{name}</span>
        <div className={styles.prices}>
          <span>£{price}.00</span> 
        </div>
        <span className={styles.available}>{available}</span>
      </div>
    </div>
  );
};

export default ProductCard;
