import React from 'react';
import Header from './header/Header';
interface ILayout {
  children: React.ReactNode;
}
function Layout(props: ILayout) {
  return (
    <>
      <Header/>
      {props.children}
    </>
  );
}

export default Layout;
