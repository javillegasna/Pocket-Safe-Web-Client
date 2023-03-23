// material-ui
import { Theme } from '@mui/material';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import { layoutConfig } from '../../config/layout.config';

const openedMixin = (theme: Theme) => ({
  width: layoutConfig.sideBarWidth,
  borderRight: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  boxShadow: 'none'
});

const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  width: 0,
  borderRight: 'none'
});

interface IDrawerStyled {
  theme: Theme;
  open: boolean;
}
export const DrawerStyled = styled(Drawer)(({ theme, open }: IDrawerStyled) => ({
  width: layoutConfig.sideBarWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}));
