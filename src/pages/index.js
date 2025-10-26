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
        altImage={'furniture showroom image retro vintage art chair table painting ceramics'}
        title={''}
        subtitle={""}
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

      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/table-home-page.png'}
            altImage={'furniture showroom image retro vintage art chair table'}
            miniImage={'/home-hall.png'}
            miniImageAlt={'mini highlight image'}
            title={'About us'}
            descriptionOne={`We are passionate about sourcing unique Mid Century Modern furniture pieces, Objet d'Art and Contemporary Art for our clients.`}
            descriptionTwo={`Why not call us to explore our latest stock list or sign up below to get 1st dibs on newly arrived treasures!
              We are based in North Dorset  and our 100m2 showroom is in Sherborne.
              We can also be regularly found at the following markets:`}
            listOfPlaces={`Kempton Antiques Market,Ardingley Antiques Market,Sandown Antiques Market,So Last Century Markets in East London,Dulwich Mid Century Modern Fair.`}
            descriptionThree={`Follow us on Instagram to keep up to date with where you can find us: @reynolds_interiors.​ Our new Address is: Unit 12, Old Yarn Mills, Westbury, Sherborne, DT9 3QZ`}
          />
        </Container>
      </div>
    </Layout>
  );
};

export default IndexPage;
