import { ThemeProvider } from '@chakra-ui/core';
import { AuthProvider } from '../lib/auth';
import theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';
import '@reach/combobox/styles.css';
import '../styles/search.css';
import '../styles/background.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <DefaultSeo {...SEO} />
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
