import Layout from "@/libs/shared/common/layout.component";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { html, head } = ctx.renderPage();
    const styles = {}
    return { html, head, styles, ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index, follow" />
          <meta key="googlebot" name="googlebot" content="index,follow" />
          <meta name="google" content="notranslate" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="keywords" content="nextjs, realworld" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="next-realworld" />
          <meta property="og:title" content="Next.js realworld example app" />
          <meta
            property="og:description"
            content="Next.js + SWR codebase containing realworld examples"
          />
          <meta property="og:url" content="https://next-realworld.now.sh/" />
          <meta
            property="og:image"
            content="https://next-realworld.now.sh/images/share-link.png"
          />
          <meta property="twitter:card" content="next-realworld" />
          <meta
            property="twitter:url"
            content="https://next-realworld.now.sh/"
          />
          <meta
            property="twitter:title"
            content="Next.js realworld example app"
          />
          <meta
            property="twitter:description"
            content="Next.js + SWR codebase containing realworld examples"
          />
          <meta
            property="twitter:image"
            content="https://machimban.com/images/talk-link.jpg"
          />
          <meta name="msapplication-TileColor" content="#000" />
          <meta
            name="msapplication-TileImage"
            content="/images/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#000" />
        </Head>
        <body>
          <Layout>
            <div>
              <Main />
              <NextScript />
            </div>
          </Layout>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
