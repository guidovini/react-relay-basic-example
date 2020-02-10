import graphql from 'babel-plugin-relay/macro';

const getJobsByCityQuery = graphql`
  query getJobsByCityQuery(
    $location: String!
    $first: Int
    $after: String
    $orderBy: JobOrderByInput
    $jobInput: String
  ) {
    city(input: { slug: $location }) {
      jobs(
        first: $first
        after: $after
        orderBy: $orderBy
        where: { slug_contains: $jobInput }
      ) {
        id
        title
        tags {
          name
        }
        applyUrl
        company {
          name
          websiteUrl
          logoUrl
        }
        cities {
          name
          country {
            name
            isoCode
          }
        }
        updatedAt
        postedAt
      }
    }
  }
`;

export default getJobsByCityQuery;
