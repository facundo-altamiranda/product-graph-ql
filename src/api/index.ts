import ApolloClient, { gql } from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'https://y3db9uqb67.execute-api.sa-east-1.amazonaws.com/dev/graphql',
});

const SELLER_PUBLICATIONS = gql`
  {
    getSellerPublications(sellerId: "4cc88cdc-2d92-47ff-ab3f-9831367b889c") {
      product {
        itemName
        images
      }
      price
      stock
    }
  }
`;

export { apolloClient, SELLER_PUBLICATIONS };
