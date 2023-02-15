import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App unit test', () => {
  beforeEach(() => {
    render(<App />);
  });
  test('Should render the app', () => {
    expect(screen.getByText(/src\/App.tsx/)).toBeDefined();
  });
});
