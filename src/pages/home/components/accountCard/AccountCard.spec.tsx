import { render, screen } from '@testing-library/react';
import AccountCard from './AccountCard';

describe('AccountCard Component', () => {
  const mockAccount = {
    name: 'Credit Cart',
    icon: 'FaMoneyCheck',
    totalAmount: 0
  };

  test('should render a AccountCard Component', () => {
    render(<AccountCard {...mockAccount}/>);
    expect(screen.getByText(mockAccount.name)).toBeDefined()
    expect(screen.getByText(`Total Amount: ${mockAccount.totalAmount}`)).toBeDefined()
  });
});
