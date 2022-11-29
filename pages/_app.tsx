import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/GlobalStyles';

function MyCustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Start-up Tasks" />
        <meta name="keywords" content="start up tasks" />
        <title>Startup Phases</title>

        <meta name="theme-color" content="#ffffff" />
      </Head>

      <>
        <GlobalStyles />

        <Component {...pageProps} />
      </>
    </>
  );
}
export default MyCustomApp;
