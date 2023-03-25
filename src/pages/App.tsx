import { PaletteMode } from '@mui/material';
import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import React, { useState } from 'react';
import Layout from '../layout/Layout';
import ThemeCustomization from '../Themes';
import Home from './home/Home';
function App(): JSX.Element {
  const [themeMode, setThemeMode] = useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      currentColorMode: themeMode
    }),
    [themeMode]
  );

  const client = new ApolloClient({
    link: new HttpLink({
      uri: import.meta.env.VITE_GRAPHQL_API_URL,
      fetch
    }),
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
      <ThemeCustomization themeMode={themeMode}>
        <Layout colorMode={colorMode}>
          <Home />
        </Layout>
      </ThemeCustomization>
    </ApolloProvider>
  );
}

export default App;
