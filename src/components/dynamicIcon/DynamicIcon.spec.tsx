import { render, screen } from '@testing-library/react';
import DynamicIcon from './DynamicIcon';

describe('DynamicIcon Component', () => {
  test('Should render an icon whit a label', () => {
    render(<DynamicIcon iconName='FaMoneyCheck' message='test' />);
    expect(screen.getByText('test')).toBeDefined()
  });
  test('Should render an icon whit a label', () => {
    render(<DynamicIcon message='test' />);
    expect(screen.getByText('test')).toBeDefined()
  });
});
