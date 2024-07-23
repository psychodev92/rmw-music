import { Routes, Route, useLocation } from "react-router-dom"

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Homepage';
import News from './pages/News';
import Concerts from './pages/Concerts';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Login from './pages/Login';

import './assets/styles/main.scss';

function App() {
    const location = useLocation();
    const noNavFooterRoutes = ['/login'];
    const shouldShowNavFooter = !noNavFooterRoutes.includes(location.pathname);
    
    return (
        <>
            {shouldShowNavFooter && <Navbar />}

            <Routes className="flex gap-2 justify-end">
                <Route path="/" element={ <Home/> } />
                <Route path="/news" element={ <News/> } />
                <Route path="/concerts" element={ <Concerts/> } />
                <Route path="/reviews" element={ <Reviews/> } />
                <Route path="/about" element={ <About/> } />
                <Route path="/login" element={ <Login/> } />
            </Routes>

            {shouldShowNavFooter && <Footer />}
        </>
    );
}

export default App;
