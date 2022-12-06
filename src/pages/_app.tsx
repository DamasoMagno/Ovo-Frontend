import type { AppProps } from 'next/app';
import Head from 'next/head';

import { SignModal } from '../components/SignModal';

import { GlobalStyles } from "../styles/global";

GlobalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Ovo</title>
        <meta
          content="width=device-width, initial-scale=1"
          name="viewport"
        />
      </Head>
      <Component {...pageProps} />
      <SignModal />
    </>
  );
}



