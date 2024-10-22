import React, { useState } from 'react';
import * as styles from './ProductCardGrid.module.css';

import Drawer from '../Drawer';
import ProductCard from '../ProductCard';
import QuickView from '../QuickView';
import Slider from '../Slider';

const ProductCardGrid = ({ data, height, columns = 3, spacing, showSlider = false }) => {
  const [showQuickView, setShowQuickView] = useState(false);

  const products = data.allContentfulItem ? data.allContentfulItem.nodes : [];

  const columnCount = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  const renderCards = () => {
    return products.map((product, index) => {
      const productImage = product.itemImage.gatsbyImageData;

      return (
        <ProductCard
          key={index}
          height={height}
          price={product.price}
          imageAlt={product.itemTitle}
          name={product.itemTitle}
          image={productImage} // Pass the gatsbyImageData field
          meta={product.available ? 'Available' : 'Out of Stock'}
          link={`/item/${product.slug}`}
          showQuickView={() => setShowQuickView(true)}
        />
      );
    });
  };

  return (
    <div className={styles.root} style={columnCount}>
      <div
        className={`${styles.cardGrid} ${
          showSlider === false ? styles.show : ''
        }`}
        style={columnCount}
      >
        {products.length ? renderCards() : <p>No products available.</p>}
      </div>

      {showSlider === true && (
        <div className={styles.mobileSlider}>
          <Slider spacing={spacing}>{renderCards()}</Slider>
        </div>
      )}

      <Drawer visible={showQuickView} close={() => setShowQuickView(false)}>
        <QuickView close={() => setShowQuickView(false)} />
      </Drawer>
    </div>
  );
};

export default ProductCardGrid;
