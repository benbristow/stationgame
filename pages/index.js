import "../styles/main.scss";

import Layout from "../layouts/main";

import Link from "next/link";

export default () => (
  <Layout>
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
