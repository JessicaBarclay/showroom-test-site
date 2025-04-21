import React, { useState } from 'react';
import * as styles from './ProductCardGrid.module.css';

import Drawer from '../Drawer';
import ProductCard from '../ProductCard';
import QuickView from '../QuickView';
import Slider from '../Slider';

const ProductCardGrid = ({ data, height, spacing, showSlider = false }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = data.nodes || [];

  const renderCards = () => {
    return products.map((product, index) => {
      const productImage = product.mainImage.gatsbyImageData;

      return (
        <ProductCard
          key={index}
          height={height}
          price={product.price}
          imageAlt={product.title}
          name={product.title}
          image={productImage}
          available={product.available ? 'Available' : 'Out of Stock'}
          link={`/item/${product.title}-${product.price}-${product.available}`}
          showQuickView={() => setSelectedProduct(product)} // Pass product data on click
        />
      );
    });
  };

  return (
    <div className={styles.root}>
      <div className={`${styles.cardGrid} ${showSlider === false ? styles.show : ''}`}>
        {products.length ? renderCards() : <p>No products available.</p>}
      </div>

      {showSlider === true && (
        <div className={styles.mobileSlider}>
          <Slider spacing={spacing}>{renderCards()}</Slider>
        </div>
      )}

      {/* Pass selectedProduct to QuickView */}
      <Drawer visible={!!selectedProduct} close={() => setSelectedProduct(null)}>
        {selectedProduct && (
          <QuickView product={selectedProduct} close={() => setSelectedProduct(null)} />
        )}
      </Drawer>
    </div>
  );
};

export default ProductCardGrid;
