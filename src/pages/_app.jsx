import { GlobalStyles } from '@/styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

App.propTypes = AppProps;
