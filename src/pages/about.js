import React, { useRef } from 'react';

import Quote from '../components/Quote';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = () => {
  let historyRef = useRef();

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>

        <Quote size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              We are passionate about sourcing unique Mid Century Modern furniture pieces, Objet d'Art and Contemporary Art for our clients. Why not call us to explore our latest stock list or sign up below to get 1st dibs on newly arrived treasures!
            </p>

            <br />
            <br />

            <p>
              We are based in North Dorset and our 100m2 showroom is in Sherborne. We can also be regularly found at the following markets: Kempton Antiques Market, Ardingley Antiques Market, Sandown Antiques Market, So Last Century Markets in East London, and Dulwich Mid Century Modern Fair.
            </p>


          </div>
        </Quote>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={toOptimizedImage('/banner1.png')}></img>
        </div>

      </div>
    </Layout>
  );
};

export default AboutPage;
