import React from 'react';
import { graphql, Link } from 'gatsby';
import { FAVE_TYPES } from '../utils/constants';
import Layout from '../components/Layout';

export default ({ location, pageContext }) => {
  const {
    name,
    imageUrl,
    review,
    type,
    creator
  } = pageContext;

  return (
    <Layout location={location}>
      <div className="fave-feature">
        <img src={imageUrl} alt=""/>
        <h2>{name}</h2>
        {creator &&
          <h3>{type === FAVE_TYPES.book && 'by '}{creator}</h3>
        }
        <p dangerouslySetInnerHTML={{__html: review}} />
        <Link to="/faves">Back to Faves</Link>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name,
            imageUrl,
            review,
            type,
            creator
          }
        }
      }
    }
  }
`
