import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App unit test', () => {
  beforeEach(() => {
    render(<App />);
  });
  test('Should render the app', () => {
    expect(screen.getByText(/src\/App.tsx/)).toBeDefined();
  });

  test('should render a count whit 0', () => {
    expect(screen.getByText(/count is 0/i)).toBeDefined();
  });

  test('should show the actual count inside the button', () => {
    const button = screen.getByText(/count is 0/i);
    fireEvent.click(button);
    expect(screen.getByText(/count is 1/i)).toBeDefined();
  });
});
