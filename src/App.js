import React, { Component } from 'react';
import Header from './shared/Header';
import Homepage from './pages/Homepage';
/* import SingleNews from './pages/SingleNews';
import Privacy from './pages/Privacy'; */
import Footer from './shared/Footer';
import './assets/css/index.css';
import './assets/css/news.scss';

class App extends Component {
	render() {
		return (
			<div className="touch-pan-y">
				<Header />
				
				<main className="mt-5">
					<Homepage />
					{/* <SingleNews title="Sleep Token releases new single 'Vore'" text="" image="https://cdn-p.smehost.net/sites/2ed48fdcc3904f548299cd86d78e9885/wp-content/uploads/2023/02/sleeptokencover-1000x515.jpg" /> */}
					{/* <Privacy /> */}

					
					<Footer />
				</main>
			</div>
		);
	}
}

export default App;