import { CSSReset } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
import Head from 'next/head';

function GlobalStyle({ children }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
}

export default GlobalStyle;
