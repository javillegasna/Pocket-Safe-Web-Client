import { Button, PaletteMode } from '@mui/material';
import React, { useState } from 'react';
import Layout from '../layout/Layout';
import ThemeCustomization from '../Themes';
import Home from './home/Home';

function App(): JSX.Element {
  const [themeMode, setThemeMode] = useState<PaletteMode>('light')
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
        currentColorMode: themeMode
      }),
      [themeMode],
    );
  return (
    <ThemeCustomization themeMode={themeMode}>
      <Layout colorMode={colorMode}>
        <Home/>
      </Layout>
    </ThemeCustomization>
  );
}

export default App;
