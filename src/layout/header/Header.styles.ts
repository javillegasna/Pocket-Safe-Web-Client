import styled from '@emotion/styled';
import { AppBar } from '@mui/material';
import { layoutConfig } from '../../config/layout.config';
import { IAppBarrStyled } from './Header.interfaces';

export const AppBarStyled = styled(AppBar)(({ theme, open }: IAppBarrStyled) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: layoutConfig.sideBarWidth,
    width: `calc(100% - ${layoutConfig.sideBarWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));
