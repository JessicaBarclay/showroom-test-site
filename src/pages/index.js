import * as React from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';

import * as styles from './index.module.css';

const IndexPage = () => {

  return (
    <Layout disablePaddingBottom>
      {/* Banner */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={'Mid Century furniture'}
        subtitle={"Objet d'Art and Contemporary Art"}
      />

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
