import { Routes, Route } from "react-router-dom"

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Homepage';
import News from './pages/News';
import Concerts from './pages/Concerts';
import Reviews from './pages/Reviews';
import About from './pages/About';

import './assets/styles/main.scss';

function App() {
    return (
        <>
            <Navbar />

            <div>
                <Routes className="flex gap-2 justify-end">
                    <Route path="/" element={ <Home/> } />
                    <Route path="/news" element={ <News/> } />
                    <Route path="/concerts" element={ <Concerts/> } />
                    <Route path="/reviews" element={ <Reviews/> } />
                    <Route path="/about" element={ <About/> } />
                </Routes>
            </div>

            <Footer />
        </>
    );
}

export default App;
