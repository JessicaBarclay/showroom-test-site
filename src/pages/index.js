import * as React from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';

import * as styles from './index.module.css';
import { navigate } from 'gatsby';

const IndexPage = () => {

  const goToShop = () => {
    navigate('/stock');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Banner */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={'Mid Century Modern furniture'}
        subtitle={"Objet d'Art and Contemporary Art"}
        ctaText={'Browse items'}
        ctaAction={goToShop}
      />

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'About us'}
            description={`
              We are passionate about sourcing unique Mid Century Modern furniture pieces, Objet d'Art and Contemporary Art for our clients.
              Why not call us to explore our latest stock list or sign up below to get 1st dibs on newly arrived treasures!`}
            textLink={'View our items here'}
            link={'/stock'}
          />
        </Container>
      </div>

      {/* Social Media */}
      {/* <AttributeGrid /> */}
    </Layout>
  );
};

export default IndexPage;
