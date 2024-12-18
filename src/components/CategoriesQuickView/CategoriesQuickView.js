import React, { useState, useEffect } from 'react';
import * as styles from './CategoriesQuickView.module.css';

import Icon from '../Icons/Icon';

const CategoriesQuickView = ({ categories, selectedCategories, handleCategorySelection, applyFilter, close, isOpen }) => {
  const [tempSelectedCategories, setTempSelectedCategories] = useState(selectedCategories);

  // Sync tempSelectedCategories with selectedCategories from parent when the component opens
  useEffect(() => {
    setTempSelectedCategories(selectedCategories);
  }, [selectedCategories, isOpen]);

  // Handle selection in temporary state
  const handleTempSelection = (category) => {
    if (category === 'All') {
      setTempSelectedCategories([]); // Clear all selections when 'All' is clicked
    } else if (tempSelectedCategories.includes(category)) {
      setTempSelectedCategories(tempSelectedCategories.filter(c => c !== category)); // Deselect if already selected
    } else {
      setTempSelectedCategories([...tempSelectedCategories, category]); // Add to selected categories
    }
  };

  // Apply filter and close
  const handleApply = () => {
    handleCategorySelection(tempSelectedCategories); // Update parent with selected categories
    applyFilter(); // Call apply filter
  };

  return (
    <>
      {/* Background Overlay */}
      <div className={`${styles.overlay} ${isOpen ? styles.showOverlay : ''}`} onClick={close}>
      <div className={styles.closeButton}>
          <Icon symbol={'cross'}></Icon>
        </div>
      </div>

      {/* Side panel */}
      <div className={`${styles.root} ${isOpen ? styles.show : ''}`}>
        <div className={styles.titleContainer}>
        <div role={'presentation'} onClick={close}>
        </div>
          <h4>Select Categories</h4>
        </div>
        <div className={styles.contentContainer}>
          <ul className={styles.categoryList}>
            <li>
              <input
                type="checkbox"
                checked={tempSelectedCategories.length === 0}
                onChange={() => handleTempSelection('All')}
              />
              <label>All</label>
            </li>
            {categories.map((category, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={tempSelectedCategories.includes(category)}
                  onChange={() => handleTempSelection(category)}
                />
                <label>{category}</label>
              </li>
            ))}
          </ul>
          <button className={styles.applyButton} onClick={handleApply}>Apply</button>
        </div>
      </div>
    </>
  );
};

export default CategoriesQuickView;
