import { Fragment } from "react";
import Head from "next/head";

import Header from "../components/header";
import Footer from "../components/footer";

export default ({ children }) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <div className="sg-body">
      <div className="sg-body__content">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  </Fragment>
);
