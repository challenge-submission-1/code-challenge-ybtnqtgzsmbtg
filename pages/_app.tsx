import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline, Paper } from "@mui/material";
import theme from "@/theme/theme";

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
