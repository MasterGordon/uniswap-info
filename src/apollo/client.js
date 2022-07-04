import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://gap6p22o38.execute-api.eu-west-1.amazonaws.com/subgraphs/name/simone1999/uniswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://gap6p22o38.execute-api.eu-west-1.amazonaws.com/node/graphql', // /index-node for global nodes and :8030/graphql for self hosted
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://gap6p22o38.execute-api.eu-west-1.amazonaws.com/subgraphs/name/simone1999/ethereum-blocks',
  }),
  cache: new InMemoryCache(),
})
