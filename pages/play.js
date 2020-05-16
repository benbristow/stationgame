import "../styles/main.scss";

import Head from "next/head";
import Link from "next/link";

import Layout from "../layouts/main";
import Header from "../components/header";
import Game from "../components/game";

export default () => (
  <Layout>
    <Head>
      <title>Play - Station Game</title>
    </Head>
    <Header small />
    <div className="container">
      <Game gameLength={20} />
    </div>
  </Layout>
);
