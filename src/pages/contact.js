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

​

Unit 12, Old Yarn Mills, Westbury, Sherborne, DT9 3QZ
                `}
            textLink={'View our items here'}
            link={'/furniture'}
          />
        </Container>
      </div>
    </Layout>
  );
};

export default ContactPage;
