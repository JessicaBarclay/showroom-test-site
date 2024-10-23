import React, { useRef } from 'react';

import Quote from '../components/Quote';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = () => {

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <div className={styles.imageContainer}>
          <img alt={'banner'} src={toOptimizedImage('/banner1.png')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
