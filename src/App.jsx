import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/shared/Header.component';
import Footer from './components/shared/Footer.component';

import Homepage from './pages/Homepage.component';
import QuotesPage from './pages/QuotesPage.component';
import PageNotFound from './pages/PageNotFound.component';

import InsuranceFormContextProvider from './context/InsuranceFormContext.component';

const App = () => {
    return (
        <BrowserRouter>
            <InsuranceFormContextProvider>
                <Header />

                <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/home" element={<Homepage />} />

                    <Route path="/quotes" element={<QuotesPage />} />

                    <Route path="*" element={<PageNotFound />} />
                </Routes>

                <Footer />
            </InsuranceFormContextProvider>
        </BrowserRouter>
    );
};

export default App;
