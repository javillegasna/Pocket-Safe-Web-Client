import { PaletteOptions, ThemeOptions, createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import React, { useMemo } from 'react';

import { Palette } from './colors/palette';
import { Typography } from './fonts/typography';

interface IThemeCustomization {
  children: React.ReactNode;
}

const CustomShadows = (palette: PaletteOptions) => {
  const { grey } = palette;
  const defaultColors = {
    button: grey ? `${grey.A100}2A` : '#0000002A',
    text: grey ? `${grey.A100}12` : '#00000012',
    z1: grey ? `${grey[900]}15` : '#14141415'
  };
  return {
    button: `0 2px ${defaultColors.button}`,
    text: `0 -1px 0 ${defaultColors.text}`,
    z1: `0px 2px 8px ${defaultColors.z1}`
  };
};

const ThemeCustomization = ({ children }: IThemeCustomization) => {
  const palette = Palette('light');
  const typography = Typography(`'Public Sans', sans-serif`);
  const shadows = CustomShadows(palette);
  const themeOptions: ThemeOptions = useMemo<ThemeOptions>(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536
        }
      },
      direction: 'ltr',
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: palette,
      customShadows: shadows,
      typography: typography
    }),
    [palette, typography, shadows]
  );
  const themes = createTheme(themeOptions);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeCustomization;
