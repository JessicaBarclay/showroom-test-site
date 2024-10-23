import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import Quote from '../components/Quote';

import * as styles from './index.module.css';

const IndexPage = () => {
  let historyRef = useRef();

  return (
    <Layout disablePaddingBottom>
      {/* Banner */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={'Mid Century furniture'}
        subtitle={"Objet d'Art and Contemporary Art"}
      />

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

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/showroom2.png'}
            altImage={'showroom2 image'}
            miniImage={'/showroom3.png'}
            miniImageAlt={'mini highlight image'}
            title={'About us'}
            description={`
              We are passionate about sourcing unique Mid Century Modern furniture pieces, Objet d'Art and Contemporary Art for our clients.
              Why not call us to explore our latest stock list or sign up below to get 1st dibs on newly arrived treasures!`}
            textLink={'View our stocklist'}
            link={'/furniture'}
          />
        </Container>
      </div>

      {/* Social Media */}
      {/* <AttributeGrid /> */}
    </Layout>
  );
};

export default IndexPage;
