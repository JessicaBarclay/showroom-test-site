import React, { useState } from 'react';
import * as styles from './QuickView.module.css';
import { toOptimizedImage } from '../../helpers/general';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const QuickView = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const { title, price, mainImage, available, description, additionalImages } = product;

  // Create an array of images, starting with the mainImage followed by additionalImages
  const allImages = [mainImage, ...(additionalImages || [])];

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>Further details</h4>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.productContainer}>
          <span className={styles.productName}>{title}</span>
          <span className={styles.price}>£{price}.00</span>
          <p className={styles.available}>{available ? 'Available' : 'Out of Stock'}</p>

          {/* Main Image Display */}
          <div className={styles.productImageContainer}>
            <img
              alt={title}
              className={styles.mainImage}
              src={toOptimizedImage(allImages[currentImageIndex].gatsbyImageData.images.fallback.src)}
            />
          </div>

          {/* Thumbnail Previews */}
          <div className={styles.thumbnailContainer}>
            {allImages.map((image, index) => (
              <img
                key={index}
                alt={`Thumbnail ${index + 1}`}
                className={`${styles.thumbnail} ${index === currentImageIndex ? styles.activeThumbnail : ''}`}
                src={toOptimizedImage(image.gatsbyImageData.images.fallback.src)}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>

          {/* Render the rich text content */}
          <br></br>
          <div className={styles.descriptionContainer}>
            <p className={styles.descriptionTitle}>Description</p>
            <p className={styles.descriptionContent}>
              {documentToReactComponents(JSON.parse(description.raw))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
