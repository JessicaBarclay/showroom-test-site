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
  const [selectedCategories, setSelectedCategories] = useState([]); // Multi-selection for mobile
  const [selectedCategory, setSelectedCategory] = useState(''); // Single category for desktop
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state for mobile
  const [isMobileView, setIsMobileView] = useState(false); // Track if mobile view

  // Extract unique categories from the fetched data
  const categories = Array.from(
    new Set(data.allContentfulFurniture.nodes.flatMap(item => item.category))
  );

  // Check if it's mobile view on initial load and window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 800);
    };
    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter furniture items based on the selected category (desktop) or selectedCategories (mobile)
  const filteredFurniture = isMobileView
    ? selectedCategories.length
      ? data.allContentfulFurniture.nodes.filter(item =>
          selectedCategories.some(category => item.category.includes(category))
        )
      : data.allContentfulFurniture.nodes
    : selectedCategory
    ? data.allContentfulFurniture.nodes.filter(item =>
        item.category.includes(selectedCategory)
      )
    : data.allContentfulFurniture.nodes;

  // Handle selection for mobile categories (multi-selection)
  const handleCategorySelection = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Handle selection for desktop categories (single selection)
  const handleDesktopCategorySelection = (category) => {
    setSelectedCategory(selectedCategory === category ? '' : category); // Toggle category selection
  };

  // Apply filter in mobile view
  const applyFilter = () => {
    setIsDropdownOpen(false); // Close the dropdown after applying
  };

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

        {/* Mobile View Dropdown */}
        {isMobileView && (
          <div className={styles.mobileDropdown}>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Categories {isDropdownOpen ? '▲' : '▼'}
            </button>
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {categories.map((category, index) => (
                  <div key={index} className={styles.dropdownItem}>
                    <input
                      type="checkbox"
                      id={`category-${index}`}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategorySelection(category)}
                    />
                    <label htmlFor={`category-${index}`}>{category}</label>
                  </div>
                ))}
                <button className={styles.applyButton} onClick={applyFilter}>
                  Apply
                </button>
              </div>
            )}
          </div>
        )}

        <Container size={'large'} spacing={'min'}>
          <div className={styles.pageContainer}>
            {/* Left Column for Categories (For Desktop/Wider Screens) */}
            {!isMobileView && (
              <div className={styles.categoryList}>
                <span className={styles.categoryNameStyles}>Categories</span>
                <ul>
                  <li
                    onClick={() => setSelectedCategory('')}
                    className={selectedCategory === '' ? styles.active : ''}
                  >
                    All
                  </li>
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      onClick={() => handleDesktopCategorySelection(category)}
                      className={selectedCategory === category ? styles.active : ''}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
