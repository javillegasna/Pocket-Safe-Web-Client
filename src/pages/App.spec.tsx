import { render, screen } from '@testing-library/react';
import App from './App';

describe('App unit test', () => {
  beforeEach(() => {
    render(<App />);
  });
  test('Should render the app', () => {
    expect(screen.getByText(/John Doe/)).toBeDefined();
  });
});
