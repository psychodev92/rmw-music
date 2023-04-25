import React from 'react';

import Routing from './utils/routing';

import Header from './shared/header';
import Footer from './shared/footer';

export default function App() {
    return (
        <div>
            <Header />
            
            <Routing />
            
            <Footer />
        </div>
    );
}