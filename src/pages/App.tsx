import React from 'react';
import Layout from '../layout/Layout';
import ThemeCustomization from '../Themes';

function App(): JSX.Element {
  return (
    <ThemeCustomization>
      <Layout>
        <h1>Body</h1>
      </Layout>
    </ThemeCustomization>
  );
}

export default App;
