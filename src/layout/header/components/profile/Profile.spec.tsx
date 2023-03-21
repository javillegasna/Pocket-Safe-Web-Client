import { render, screen } from '@testing-library/react';
import Profile from './Profile';

describe('Profile Component', () => {
  beforeEach(() => {
    render(<Profile />);
  });
  test('Should render a button whit text', () => {
    expect(screen.getByText(/John Doe/)).toBeDefined();
  });
});
