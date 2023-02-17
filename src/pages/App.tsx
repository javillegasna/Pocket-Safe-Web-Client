import { Button, PaletteMode } from '@mui/material';
import React, { useState } from 'react';
import Layout from '../layout/Layout';
import ThemeCustomization from '../Themes';

function App(): JSX.Element {
  const [themeMode, setThemeMode] = useState<PaletteMode>('light')
  return (
    <ThemeCustomization themeMode={themeMode}>
      <Layout>
        <h1>Body</h1>
      </Layout>
    </ThemeCustomization>
  );
}

export default App;
