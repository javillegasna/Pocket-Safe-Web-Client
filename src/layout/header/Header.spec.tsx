import { createTheme } from '@mui/material';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';
import { IHeaderProps } from './Header.interfaces';

describe('Search Component', () => {
  const layoutState: IHeaderProps['layoutState'] = {
    isSideBarOpen: false,
    handlerSideBar: vi.fn()
  };
  const colorState: IHeaderProps['colorState'] = {
    toggleColorMode: vi.fn(),
    currentColorMode: 'light',
    theme: createTheme()
  };
  const breakpoints: IHeaderProps['breakpoints'] = {
    matchDownLG: true,
    matchDownMD: false
  };
  test('Should render a Header on desktop layout', () => {
    render(<Header layoutState={layoutState} colorState={colorState} breakpoints={breakpoints} />);
    expect(screen.getByPlaceholderText('Ctrl + K')).toBeDefined();
    expect(screen.getByText(/John Doe/)).toBeDefined();
  });
  test('Should render a Header on mobile layout', () => {
    const mobileBreakpoints : IHeaderProps['breakpoints']= {
      matchDownLG: false,
      matchDownMD: true
    }
    render(<Header layoutState={layoutState} colorState={colorState} breakpoints={mobileBreakpoints} />);
    const moreButton = document.querySelector('.css-1fg3i5z-MuiButtonBase-root-MuiIconButton-root')
    expect(moreButton).toBeDefined()
    expect(screen.queryByText('Ctrl + K')).toBeNull();
    expect(screen.queryByText(/John Doe/)).toBeNull();
  });

  test('If the more button was press the search an profile component must be show',()=>{
    const mobileBreakpoints : IHeaderProps['breakpoints']= {
      matchDownLG: false,
      matchDownMD: true
    }
    render(<Header layoutState={layoutState} colorState={colorState} breakpoints={mobileBreakpoints} />);
    const moreButton = document.querySelector('.css-1fg3i5z-MuiButtonBase-root-MuiIconButton-root')
    expect(moreButton).toBeDefined()
    if (moreButton){
      fireEvent.click(moreButton)
      expect(screen.getByPlaceholderText('Ctrl + K')).toBeDefined();
      expect(screen.getByText(/John Doe/)).toBeDefined();
    }
  })
});
