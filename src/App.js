import React, { Component } from 'react';
import Header from './shared/Header';
/* import Homepage from './pages/Homepage'; */
import SingleNews from './pages/SingleNews';
import Footer from './shared/Footer';
import './assets/css/index.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				
				<main>
					{/* <Homepage /> */}
					<SingleNews title="Sleep Token releases new single 'Vore'" text="" image="https://i0.wp.com/boolintunes.com/wp-content/uploads/2021/08/lornashorereviewfeat.jpg" />

					
					<Footer />
				</main>
			</div>
		);
	}
}

export default App;