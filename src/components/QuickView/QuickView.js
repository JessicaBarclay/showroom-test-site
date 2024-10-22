import React, { useState } from 'react';
import * as styles from './QuickView.module.css';
import { toOptimizedImage } from '../../helpers/general';
import CurrencyFormatter from '../CurrencyFormatter';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const QuickView = ({ product, close }) => {
  // Move useState to the top of the component
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Early return if no product data is available
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
        <button onClick={close}>Close</button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.productContainer}>
          <span className={styles.productName}>{title}</span>
          <div className={styles.price}>
            <CurrencyFormatter amount={price} />
          </div>

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
          <div className={styles.description}>
            {documentToReactComponents(JSON.parse(description.raw))}
          </div>

          <p>{available ? 'Available' : 'Out of Stock'}</p>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
