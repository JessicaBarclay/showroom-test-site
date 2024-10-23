import * as React from 'react';

import Container from '../components/Container';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';

import * as styles from './index.module.css';

const ContactPage = () => {
  return (
    <Layout disablePaddingBottom>
      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/showroom4.png'}
            altImage={'highlight image'}
            miniImage={'/showroom5.png'}
            miniImageAlt={'mini highlight image'}
            title={'Contact us'}
            description={`
              Follow us in Instagram to keep up to date with where you can find us:
@reynolds_interiors​

Our new Address is: 
    
Unit 12, Old Yarn Mills, Westbury, Sherborne, DT9 3QZ
                `}
            textLink={'View our items here'}
            link={'/furniture'}
          />
        </Container>
        {/* Map Container */}
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.825576387749!2d-2.517373824784828!3d50.94905426914365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4872765cd0d35dcf%3A0x3e59d44b93b71cfa!2sUnit%2012%2C%20Old%20Yarn%20Mills%2C%20Westbury%2C%20Sherborne%20DT9%203QZ%2C%20UK!5e0!3m2!1sen!2sus!4v1698067745059!5m2!1sen!2sus"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
