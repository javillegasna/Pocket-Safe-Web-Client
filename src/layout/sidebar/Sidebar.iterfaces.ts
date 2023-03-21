import { PaletteMode, Theme } from "@mui/material";

export interface ISideBarProps {
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
