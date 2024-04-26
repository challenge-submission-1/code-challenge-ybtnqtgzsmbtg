import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline } from "@mui/material";
import theme from "@/theme/theme";

// Integrate material ui with pages router (eg., getInitialProps)
// See: https://mui.com/material-ui/integrations/nextjs/#pages-router

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{ py: 8 }}>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
