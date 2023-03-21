import { PalettesProps } from '@ant-design/colors';

export const colorMapper = (colors: PalettesProps) => {
  const { blue, red, gold, cyan, green, grey: grayscale } = colors;

  const primary = {
    lighter: blue[0],
    100: blue[1],
    200: blue[2],
    light: blue[3],
    400: blue[4],
    main: blue[5],
    dark: blue[6],
    700: blue[7],
    darker: blue[8],
    900: blue[9],
    contrastText: grayscale[0]
  };

  const secondary = {
    lighter: grayscale[2],
    100: grayscale[2],
    200: grayscale[3],
    light: grayscale[4],
    400: grayscale[5],
    main: grayscale[6],
    600: grayscale[7],
    dark: grayscale[8],
    800: grayscale[9],
    darker: grayscale[10],
    A100: grayscale[0],
    A200: grayscale[13],
    A300: grayscale[14],
    contrastText: grayscale[0]
  };

  const error = {
    lighter: red[0],
    light: red[2],
    main: red[4],
    dark: red[7],
    darker: red[9],
    contrastText: grayscale[0]
  };

  const warning = {
    lighter: gold[0],
    light: gold[3],
    main: gold[5],
    dark: gold[7],
    darker: gold[9],
    contrastText: grayscale[2]
  };

  const info = {
    lighter: cyan[0],
    light: cyan[3],
    main: cyan[5],
    dark: cyan[7],
    darker: cyan[9],
    contrastText: grayscale[0]
  };

  const success = {
    lighter: green[0],
    light: green[3],
    main: green[5],
    dark: green[7],
    darker: green[9],
    contrastText: grayscale[0]
  };

  const grey = {
    0: grayscale[0],
    50: grayscale[1],
    100: grayscale[2],
    200: grayscale[3],
    300: grayscale[4],
    400: grayscale[5],
    500: grayscale[6],
    600: grayscale[7],
    700: grayscale[8],
    800: grayscale[9],
    900: grayscale[10],
    A50: grayscale[15],
    A100: grayscale[11],
    A200: grayscale[12],
    A400: grayscale[13],
    A700: grayscale[14],
    A800: grayscale[16]
  };

  return {
    primary,
    secondary,
    error,
    warning,
    info,
    success,
    grey
  };
};
