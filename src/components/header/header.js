import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from './menu';
import Home from '../../pages/Home';
import Bands from '../../pages/Bands';
import NoPage from '../../pages/NoPage';

export default function Header(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />}>
                    <Route index element={<Home />} />
                    <Route path="bands" element={<Bands />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}