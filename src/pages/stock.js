// import React, { useState, useEffect } from 'react';
// import * as styles from './stock.module.css';

// import Banner from '../components/Banner';
// import { graphql } from 'gatsby';
// import CardController from '../components/CardController';
// import Container from '../components/Container';
// import Layout from '../components/Layout';
// import ProductCardGrid from '../components/ProductCardGrid';
// import Button from '../components/Button';
// import Config from '../config.json';

// const ProductsPage = ({ data }) => {
//   const [showFilter, setShowFilter] = useState(false);

//   useEffect(() => {
//     window.addEventListener('keydown', escapeHandler);
//     return () => window.removeEventListener('keydown', escapeHandler);
//   }, []);

//   const escapeHandler = (e) => {
//     if (e?.keyCode === undefined) return;
//     if (e.keyCode === 27) setShowFilter(false);
//   };

//   return (
//     <Layout>
//       <div className={styles.root}>
//         <Container size={'large'} spacing={'min'}>
//         </Container>
//         <Banner
//           maxWidth={'650px'}
//           name={`Dining room`}
//           subtitle={'Browse our dining room options, tables, chairs, etc.'}
//         />
//         <Container size={'large'} spacing={'min'}>
//           <div className={styles.metaContainer}>
//             <div className={styles.controllerContainer}>
//               <div
//                 className={styles.iconContainer}
//                 role={'presentation'}
//                 onClick={() => setShowFilter(!showFilter)}
//               >
//               </div>
//             </div>
//           </div>
//           <CardController
//             closeFilter={() => setShowFilter(false)}
//             visible={showFilter}
//             filters={Config.filters}
//           />
//           <div className={styles.productContainer}>
//             <ProductCardGrid data={data}></ProductCardGrid>
//           </div>
//           <div className={styles.loadMoreContainer}>
//             <Button fullWidth level={'secondary'}>
//               LOAD MORE
//             </Button>
//           </div>
//         </Container>
//       </div>

//     </Layout>
//   );
// };

// export const query = graphql`
// query {
//   allContentfulFurniture {
//     nodes {
//       title
//       description {
//         raw
//       }
//       mainImage {
//         gatsbyImageData
//       }
//       price
//       available
//       additionalImages {
//         gatsbyImageData
//       }
//       category
//     }
//   }
// }
// `;

// export default ProductsPage;
