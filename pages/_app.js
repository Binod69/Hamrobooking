import 'bootstrap/dist/css/bootstrap.min.css';

import LayoutDefault from '../components/Layout';
import SignUpLayout from '../components/SignUpLayout';
import SignInLayout from '../components/SignInLayout';
import DashBoardLayout from '../components/DashBoardLayout';

import '../styles/globals.scss';

const layouts = {
  signup: SignUpLayout,
  signin: SignInLayout,
  dashboard: DashBoardLayout,
  default: LayoutDefault,
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || layouts['default'];
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
