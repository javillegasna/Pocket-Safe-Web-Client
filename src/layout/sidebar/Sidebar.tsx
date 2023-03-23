import { Box, Drawer, IconButton, Stack, SxProps, Theme, Typography } from '@mui/material';
import { IoMdWallet } from 'react-icons/io';
import React from 'react';
import { layoutConfig } from '../../config/layout.config';
import { ISideBarProps } from './Sidebar.iterfaces';
import { DrawerStyled } from './Sidebar.styles';

const sxDrawer: SxProps<Theme> = {
  display: { xs: 'block', lg: 'none' },
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: layoutConfig.sideBarWidth,
    borderRight: `1px solid palette.divider`,
    backgroundImage: 'none',
    boxShadow: 'inherit'
  }
};
const Sidebar = ({ breakpoints, colorState, layoutState }: ISideBarProps) => {
  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 2 }} aria-label="mailbox folders">
      {!breakpoints.matchDownLG ? (
        <DrawerStyled variant="persistent" theme={colorState.theme} open={layoutState.isSideBarOpen}>
          <IconButton
            sx={{
              display: 'flex',
              flexDirection: 'row',
              fontSize: '30px',
              fontWeight: 'bold',
              width: '100%',
              height: '70px',
              borderBottom:`solid 1px ${colorState.theme.palette.divider}`,
              boxShadow:colorState.theme.shadows[1]
            }}
          >
            <IoMdWallet />
            PocketSafe
          </IconButton>
        </DrawerStyled>
      ) : (
        <Drawer
          variant="temporary"
          onClose={layoutState.handlerSideBar}
          open={layoutState.isSideBarOpen}
          ModalProps={{ keepMounted: true }}
          sx={sxDrawer}
        >
          <IconButton
            sx={{
              display: 'flex',
              flexDirection: 'row',
              fontSize: '30px',
              fontWeight: 'bold',
              width: '100%',
              height: '70px'
            }}
          >
            <IoMdWallet />
            PocketSafe
          </IconButton>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
