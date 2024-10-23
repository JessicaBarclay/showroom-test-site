import { Link } from 'gatsby';
import React from 'react';

import Accordion from '../Accordion';
import Container from '../Container';
import Config from '../../config.json';
import * as styles from './Footer.module.css';

const Footer = () => {

  const renderLinks = (linkCollection) => {
    // Check if linkCollection and linkCollection.links exist and are arrays
    if (!linkCollection || !Array.isArray(linkCollection.links) || linkCollection.links.length === 0) {
      return null; // Return nothing if the collection is invalid or empty
    }
  
    return (
      <ul className={styles.linkList}>
        {linkCollection.links.map((link, index) => {
          // Check if each link and its fields are valid
          if (!link || !link.text || !link.link) {
            return null; // Skip invalid links
          }
          return (
            <li key={index}>
              <Link className={`${styles.link} fancy`} to={link.link}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };
  
  
  return (
    <div className={styles.root}>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.content}>
          <div className={styles.contentTop}>
            {Config.footerLinks.map((linkCollection, indexLink) => {
              return (
                <div className={styles.footerLinkContainer} key={indexLink}>
                  {/* for web version */}
                  <div className={styles.footerLinks}>
                    <span className={styles.linkTitle}>
                      {linkCollection.subTitle}
                    </span>
                    {renderLinks(linkCollection)}
                  </div>
                  {/* for mobile version */}
                  <div className={styles.mobileFooterLinks}>
                    <Accordion
                      customStyle={styles}
                      type={'add'}
                      title={linkCollection.subTitle}
                    >
                      {renderLinks(linkCollection)}
                    </Accordion>
                  </div>
                </div>
              );
            })}
            <div className={styles.newsLetter}>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.contentBottomContainer}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.contentBottom}>
            <div className={styles.copyrightContainer}>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;