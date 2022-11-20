import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Homepage from './pages/Homepage';
import './index.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				
				<main>
					<Homepage />
					
					<Footer />
				</main>
			</div>
		);
	}
}

export default App;