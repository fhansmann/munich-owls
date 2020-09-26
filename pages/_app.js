import { ThemeProvider } from '@chakra-ui/core';
import { AuthProvider } from '../lib/auth';
import theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
