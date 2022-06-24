import type { NextPage } from 'next';

import Head from 'next/head';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

const Home: NextPage = () => {
	return (
		<div className="container">
			<Head>
				<title>0xAndrewBlack</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header title="Welcome to my site!" />
				<p className="description">
					<code>Coming Soon!</code>
				</p>
			</main>

			<Footer />
		</div>
	);
};

export default Home;
