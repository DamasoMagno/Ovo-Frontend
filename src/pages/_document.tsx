import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from "../configs/stitches.config";

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Main />
        <NextScript />
      </main>
    </Html>
  );
}