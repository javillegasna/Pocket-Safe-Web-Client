import { useTheme } from '@mui/material';
import { Box, useMediaQuery, Theme } from '@mui/material';
import { useState } from 'react';
import Header from './header/Header';
import { ILayout } from './Layout.interfaces';
import Sidebar from './sidebar/Sidebar';

function Layout(props: ILayout) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const theme = useTheme()
  const matchDownMD = useMediaQuery((theme:Theme) => theme.breakpoints.down('md'));
  const matchDownLG = useMediaQuery((theme:Theme)=>theme.breakpoints.down('lg'));

  const handlerSideBar = ()=>{
    setIsSideBarOpen((prev)=>!prev)
  }


  const colorState = {
    theme,
    ...props.colorMode
  }
  const breakpoints = {
    matchDownMD,
    matchDownLG,
  }
  const layoutState = {
    isSideBarOpen,
    handlerSideBar,
  }
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header
        layoutState={layoutState}
        colorState={colorState}
        breakpoints={breakpoints}
      />
      <Sidebar
        layoutState={layoutState}
        colorState={colorState}
        breakpoints={breakpoints}
      />
      {props.children}
    </Box>
  );
}

export default Layout;
