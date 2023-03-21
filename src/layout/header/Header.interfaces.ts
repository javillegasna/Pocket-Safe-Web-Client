import { PaletteMode, Theme } from "@mui/material";

export interface IHeaderProps {
  layoutState:{
    isSideBarOpen: boolean;
    handlerSideBar: ()=>void
  }
  colorState: {
    toggleColorMode: () => void;
    currentColorMode: PaletteMode;
    theme: Theme
  };
  breakpoints: {
    matchDownMD: boolean;
    matchDownLG: boolean;
  };
}

export interface IAppBarrStyled{
  theme: Theme;
  open:boolean;
  children: React.ReactNode;
}