import { Box, PaletteMode, useMediaQuery, Theme } from '@mui/material';
import React, { useState } from 'react';
import Header from './header/Header';
interface ILayout {
  children: React.ReactNode;
  colorMode: {
    toggleColorMode: () => void;
    currentColorMode: PaletteMode
  };
}
function Layout(props: ILayout) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const matchesXs = useMediaQuery((theme:Theme) => theme.breakpoints.down('md'));
  const matchDownMD = useMediaQuery((theme:Theme)=>theme.breakpoints.down('lg'));
  const breakpoints = {
    matchesXs,
    matchDownMD
  }
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
        colorMode={props.colorMode}
        breakpoints={breakpoints}
      />
      {props.children}
    </Box>
  );
}

export default Layout;
