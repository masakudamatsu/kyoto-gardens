// components/Layout.js

import TopAppBar from 'src/components/TopAppBar';
import Footer from 'src/components/Footer';
export default function Layout({children}) {
  return (
    <>
      <TopAppBar />
      {children}
      <Footer />
    </>
  );
}
