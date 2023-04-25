import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import Bands from '../pages/Bands';

export default function Routing(props) {
    return (
        <Suspense fallback="">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/bands" element={<Bands />} />
            </Routes>
        </Suspense>
    );
}