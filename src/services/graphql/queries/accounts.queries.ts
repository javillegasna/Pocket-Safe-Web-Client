import { gql } from '@apollo/client';

export const GET_ACCOUNTS = gql`
  query GetAccounts {
    accounts {
      name
      icon
      totalAmount
    }
  }
`;