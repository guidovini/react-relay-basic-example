import graphql from 'babel-plugin-relay/macro';

const getCitiesQuery = graphql`
  query getCitiesQuery {
    cities {
      name
      slug
      country {
        name
        isoCode
      }
    }
  }
`;

export default getCitiesQuery;
