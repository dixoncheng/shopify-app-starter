import gql from "graphql-tag";

const GET_SCRIPT_TAGS = gql`
  query {
    scriptTags(first: 1) {
      edges {
        node {
          id
          src
          displayScope
        }
      }
    }
  }
`;

export default GET_SCRIPT_TAGS;
