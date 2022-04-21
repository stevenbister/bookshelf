import Layout from '@/components/Layout';
// import '@styles/variables.scss';
// import '@styles/globals.scss';
// import '@styles/utilities.scss';
import '@styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
