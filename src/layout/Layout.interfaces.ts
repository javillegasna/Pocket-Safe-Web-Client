import { PaletteMode } from "@mui/material";

export interface ILayout {
  children: React.ReactNode;
  colorMode: {
    toggleColorMode: () => void;
    currentColorMode: PaletteMode;
  };
}