import React from 'react';
import * as styles from './QuickView.module.css';
import { toOptimizedImage } from '../../helpers/general';
import CurrencyFormatter from '../CurrencyFormatter';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const QuickView = ({ product, close }) => {
  if (!product) return null;

  const { title, price, mainImage, available, description } = product;

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
          <div className={styles.productImageContainer}>
            <img alt={title} src={toOptimizedImage(mainImage.gatsbyImageData.images.fallback.src)} />
          </div>
          <div className={styles.description}>
            {/* Render the rich text content */}
            {documentToReactComponents(JSON.parse(description.raw))}
          </div>
          <p>{available ? 'Available' : 'Out of Stock'}</p>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
