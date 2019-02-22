import '../styles/main.scss';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default () => (
	<div className="sg-main">
		<div className="sg-main__content">
			<Header/>

			<div className="container">
				<h3>There are over 2,500 railway stations in the United Kingdom</h3>
				<p>
					Each station has a 3 character unique code known as a <strong>CRS</strong> (Computer Reservation System).
					For example, Glasgow Central is coded as <strong>GLC</strong> and Edinburgh Waverley is coded as <strong>EDB</strong>.
				</p>
				<Link href="/play">
					<a className="btn btn-primary btn-large">Think you're up to the task of guessing them?</a>
				</Link>
			</div>
		</div>

		<Footer />
	</div>
);