import "../styles/main.scss";

import Head from "next/head";
import Link from "next/link";

import Layout from "../layouts/main";
import Header from "../components/header";

export default () => (
  <Layout>
    <Head>
      <title>Station Game</title>
    </Head>
    <Header />
    <div className="container">
      <h3>
        There are over 2,500 railway stations on the British National Rail
        Network
      </h3>

      <p>
        Each station has a 3 character unique code known as a{" "}
        <strong>CRS</strong> (Computer Reservation System). For example, Glasgow
        Central is coded as <strong>GLC</strong> and Edinburgh Waverley is coded
        as <strong>EDB</strong>.
      </p>

      <Link href="/play">
        <a className="btn btn-primary btn-block btn-lg">
          Think you're up to the task of guessing them?
        </a>
      </Link>
    </div>
  </Layout>
);
