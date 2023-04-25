import Head from "next/head";
import React from "react";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      <link rel="stylesheet" href="//demo.productionready.io/main.css" />
      <link
        rel="stylesheet"
        href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      />
      <link
        rel="stylesheet"
        href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic&display=swap"
      />
    </Head>
      <Component {...pageProps} />
  </>
);

export default MyApp;
