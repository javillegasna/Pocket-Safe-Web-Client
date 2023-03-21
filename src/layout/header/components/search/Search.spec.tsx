import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('Search Component', () => {
  beforeEach(() => {
    render(<Search />);
  });
  test('Should render a button whit text', () => {
    expect(screen.getAllByPlaceholderText('Ctrl + K')).toBeDefined();
  });
});
