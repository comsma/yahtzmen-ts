import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head>
              <meta name="theme-color" content="#09142a" />
              <title>Yahtzmen Furnishings</title>
              <meta name={''}/>
          </Head>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>

  )
}


export default MyApp
