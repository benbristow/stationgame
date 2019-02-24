import "../styles/main.scss";

import Link from "next/link";

import Layout from "../layouts/main";
import Header from "../components/header";
import Game from "../components/game";

export default () => (
  <Layout>
    <Header small />
    <div className="container">
      <Game gameLength={10} />
    </div>
  </Layout>
);
