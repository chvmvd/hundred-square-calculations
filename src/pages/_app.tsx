import Head from "next/head";
import type { AppProps } from "next/app";
import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Link,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hundred-Square Calculations</title>
        <meta name="description" content="handred-square calculations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" component="div" flexGrow={1}>
            Hundred-Square Calculations
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Link
              href="/"
              component={NextLink}
              color="inherit"
              underline="hover"
              sx={{ fontSize: "large" }}
            >
              Home
            </Link>
            <IconButton
              color="inherit"
              href="https://github.com/chvmvd/hundred-square-calculations"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Component {...pageProps} />
    </>
  );
}
