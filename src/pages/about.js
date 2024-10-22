import React, { useRef } from 'react';

import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = () => {
  let historyRef = useRef();

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Founded in 1860, Sydney is an innovative British brand with a
              contemporary edge. We make timeless everyday luxury clothing.
            </p>
            <br />
            <br />
            <p>
              We created some of the world's first T-shirts and spent decades
              perfecting the feel of the cotton. Today we are the only brand
              that makes T-shirts in its own factory in the UK. And we do this
              in the same factory we have occupied since 1937.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={toOptimizedImage('/about1.png')}></img>
        </div>

      </div>
    </Layout>
  );
};

export default AboutPage;
