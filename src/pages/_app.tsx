import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { MDXComponents } from "../components";
import Layout from "../components/CoolLayout";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider enableSystem>
        <Layout>
          <MDXProvider components={MDXComponents}>
            <Component {...pageProps} />
          </MDXProvider>
        </Layout>
      </ThemeProvider>
      <script
        data-goatcounter="https://gema.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
    </>
  );
}
