import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import MobileSection from './MobileMenu';

describe('Mobile Section', () => {
  beforeEach(() => {
    render(<div ><div data-testid='wrapper'></div><MobileSection /></div>);
  });
  test('Should render the more button', () => {
    expect(screen.getByRole('button')).toBeDefined();
  });
  test('when more button was press a toolbar should be show', () => {
    const moreButton = screen.getByRole('button');
    fireEvent.click(moreButton);
    expect(screen.getByText(/John Doe/)).toBeDefined();
    expect(screen.getAllByPlaceholderText('Ctrl + K')).toBeDefined();
  });
});
