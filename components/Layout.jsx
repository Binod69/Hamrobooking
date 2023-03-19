import Head from 'next/head';
import Navbars from './Navbar';
import Footer from './Footer';
const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbars />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
Layout.defaultProps = {
  title: 'HamroBooking',
};
