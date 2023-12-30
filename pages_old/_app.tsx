import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import { useEffect } from "react";
import posthog from "posthog-js";
import { Provider } from "react-redux";
import { persistor, store } from "../app_redux/store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    posthog.init("phc_pFnFXZeZc6SJGSgNVcre63wttkMhYMAuqRHfWGvOKFp", {
      api_host: "https://app.posthog.com",
    });
  }, []);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Head>
            <meta name="theme-color" content="#09142a" />
            <title>Yahtzmen Furnishings</title>
            <meta
              name="description"
              content="At Yahtzmen Furnishings we design and hand make luxurious furnishings that are unique and timeless for modern living."
            />
            <meta property={"og:title"} content={"Yahtzmen Furnishings"} />
            <meta
              property={"og:description"}
              content={
                "At Yahtzmen Furnishings we design and hand make luxurious furnishings that are unique and timeless for modern living."
              }
            />
            <meta
              property={"og:image"}
              content={
                "https://yahtzmen-storage.nyc3.cdn.digitaloceanspaces.com/YFLogoOnBlue.webp"
              }
            />
            <meta property={"og-type"} content="website" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
