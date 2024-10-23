import React, { useState, useEffect } from 'react';
import * as styles from './furniture.module.css';

import Banner from '../../components/Banner';
import { graphql } from 'gatsby';
import CardController from '../../components/CardController';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import ProductCardGrid from '../../components/ProductCardGrid';
import Config from '../../config.json';

const FurniturePage = ({ data }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(''); // Track selected category

  // Extract unique categories from the fetched data
  const categories = Array.from(
    new Set(
      data.allContentfulFurniture.nodes
        .flatMap(item => item.category) // Flatten the categories into a single array
    )
  );

  // Filter furniture items based on the selected category
  const filteredFurniture = selectedCategory
    ? data.allContentfulFurniture.nodes.filter(item =>
        item.category.includes(selectedCategory) // Check if the selected category exists in the item's categories
      )
    : data.allContentfulFurniture.nodes;

  useEffect(() => {
    window.addEventListener('keydown', escapeHandler);
    return () => window.removeEventListener('keydown', escapeHandler);
  }, []);

  const escapeHandler = (e) => {
    if (e?.keyCode === undefined) return;
    if (e.keyCode === 27) setShowFilter(false);
  };

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'} />
        <Banner
          maxWidth={'650px'}
          height={'50px'}
          name={`Furniture`}
          subtitle={'Browse our furniture options, tables, chairs, etc.'}
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.pageContainer}>
            {/* Left Column for Categories */}
            <div className={styles.categoryList}>
              <span className={styles.categoryNameStyles}>Categories</span>
              <ul>
                <li onClick={() => setSelectedCategory('')}>All</li> {/* Reset to show all items */}
                {categories.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? styles.active : ''}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column for Products */}
            <div className={styles.productContainer}>
              <CardController
                closeFilter={() => setShowFilter(false)}
                visible={showFilter}
                filters={Config.filters}
              />
              <ProductCardGrid data={{ allContentfulFurniture: { nodes: filteredFurniture } }} />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulFurniture {
      nodes {
        title
        description {
          raw
        }
        mainImage {
          gatsbyImageData
        }
        price
        available
        additionalImages {
          gatsbyImageData
        }
        category
      }
    }
  }
`;

export default FurniturePage;
