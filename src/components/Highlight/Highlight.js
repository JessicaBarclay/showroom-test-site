import { Link } from 'gatsby';
import React from 'react';
import * as styles from './Highlight.module.css';
import { toOptimizedImage } from '../../helpers/general';

const Highlight = (props) => {
  const {
    image,
    altImage,
    miniImage,
    miniImageAlt,
    title,
    descriptionOne,
    descriptionTwo,
    listOfPlaces
  } = props;

  const placesArray = listOfPlaces ? listOfPlaces.split(',').map(place => place.trim()) : [];

  return (
    <div className={styles.root}>
      <img alt={altImage} src={toOptimizedImage(image)} className={styles.highlightImage} />
      <div className={styles.contentContainer}>
        <h3>{title}</h3>
        <p>{descriptionOne}</p>
        <br />
        <p>Our new Showroom is now open in Sherborne Dorset!</p>
        <br />
        <p>{descriptionTwo}</p>
        <ul className={styles.placesList}>
          {placesArray.map((place, index) => (
            <li key={index}>{place}</li>
          ))}
        </ul>
        <br />
        <p>For all enquires contact us on:</p> 
        <p>07766414858 - 07714704635</p>
        <a href="https://www.instagram.com/reynolds_interiors/" target="_blank" rel="noopener noreferrer">
          Follow us on Instagram
        </a>
        <img
          className={styles.miniImage}
          alt={miniImageAlt}
          src={toOptimizedImage(miniImage)}
        />
      </div>
    </div>
  );
};

export default Highlight;
