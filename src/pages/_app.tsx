import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";

import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
