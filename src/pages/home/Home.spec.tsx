import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Home from './Home';
import { GET_ACCOUNTS } from '../../services/graphql/queries/accounts.queries';
const accountsData = [
  {
    name: 'Credit Cart',
    icon: 'FaMoneyCheck',
    totalAmount: 0
  },
  {
    name: 'Cash',
    icon: 'FaMoneyBillAlt',
    totalAmount: 0
  },
  {
    name: 'Savings',
    icon: 'FaUniversity',
    totalAmount: 0
  }
];
const mockResponse = [
  {
    request: {
      query: GET_ACCOUNTS
    },
    result: {
      data: {
        accounts: accountsData
      }
    }
  }
];
describe('AccountCard Component', () => {
  test('should render a Home Component', async () => {
    render(
      <MockedProvider mocks={mockResponse} addTypename={false}>
        <Home />
      </MockedProvider>
    );
    expect(await screen.findByText("Loading...")).toBeDefined();
    expect(await screen.findByText(accountsData[0].name)).toBeDefined();
    expect(await screen.findByText(accountsData[1].name)).toBeDefined();
    expect(await screen.findByText(accountsData[2].name)).toBeDefined();
  });
});
