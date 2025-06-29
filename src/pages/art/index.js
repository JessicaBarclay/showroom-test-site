import React, { useState, useEffect } from 'react';
import * as styles from './art.module.css';

import Banner from '../../components/Banner';
import { graphql } from 'gatsby';
import CardController from '../../components/CardController';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import ProductCardGrid from '../../components/ProductCardGrid';
import Config from '../../config.json';

const ArtPage = ({ data }) => {
  const [showFilter, setShowFilter] = useState(false);

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
        <Container size={'large'} spacing={'min'}>
        </Container>
        <Banner
          maxWidth={'650px'}
          height={'50px'}
          name={`Art`}
          subtitle={'Browse our Art'}
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.metaContainer}>
            <div className={styles.controllerContainer}>
              <div
                className={styles.iconContainer}
                role={'presentation'}
                onClick={() => setShowFilter(!showFilter)}
              >
              </div>
            </div>
          </div>
          <CardController
            closeFilter={() => setShowFilter(false)}
            visible={showFilter}
            filters={Config.filters}
          />
        <ProductCardGrid data={{ nodes: data.allContentfulArt.nodes }} />
        </Container>
      </div>

    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulArt {
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
      }
    }
  }
`;


export default ArtPage;
