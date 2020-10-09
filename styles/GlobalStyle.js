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
            maxW={{ xl: "1200px" }}
            m="0 auto"
          }
        `}
      />
      {children}
    </>
  );
}

export default GlobalStyle;
