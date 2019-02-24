import { Fragment } from "react";
import Head from "next/head";

import Footer from "../components/footer";

export default ({ props, children }) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <div className="sg-body">
      <div className="sg-body__content">{children}</div>
      <Footer />
    </div>
  </Fragment>
);
