import "../styles/main.scss";

import Link from "next/link";

import Layout from "../layouts/main";
import Game from "../components/game";

export default () => (
  <Layout>
    <div className="container">
      <Game gameLength={1} />
    </div>
  </Layout>
);
