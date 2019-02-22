import '../styles/main.scss';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default () => (
	<div className="sg-main">
		<div className="sg-main__content">
			<Header/>
		</div>

		<Footer />
	</div>
);