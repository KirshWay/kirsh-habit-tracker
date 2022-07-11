import MainLayout from "@layouts/main";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { store } from "@store/main";
import { theme } from "@utils/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Kirsh habit tracker</title>
      </Head>

      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Container maxWidth="sm">
              <Component {...pageProps} />
            </Container>
          </MainLayout>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default MyApp;
