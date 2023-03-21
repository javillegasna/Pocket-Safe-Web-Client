import { presetPalettes, PalettesProps } from '@ant-design/colors';
import { greyAscent, greyConstant, greyPrimary } from './constants';
import { colorMapper } from './mappers';
import { PaletteOptions } from '@mui/material/styles';
import {PaletteMode}from '@mui/material'

export const Palette = (mode:PaletteMode): PaletteOptions => {
  const extendedColors: PalettesProps = {
    ...presetPalettes,
    grey: [...greyPrimary, ...greyAscent, ...greyConstant]
  };
  const colorPalette = colorMapper(extendedColors);

  return {
    ...colorPalette,
    mode,
    common: {
      black: colorPalette.grey.A100,
      white: colorPalette.grey[0]
    },
    text: {
      primary: colorPalette.grey[700],
      secondary: colorPalette.grey[500],
      disabled: colorPalette.grey[400]
    },
    action: {
      disabled: colorPalette.grey[300]
    },
    divider: colorPalette.grey[200],
    background: {
      paper: mode === 'light'? colorPalette.grey[0]: colorPalette.grey[900],
      default: mode === 'light'? colorPalette.grey.A50: colorPalette.grey[700],
    }
  };
};
