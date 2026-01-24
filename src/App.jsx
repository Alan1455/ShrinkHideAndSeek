import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Main from './sections/Main';
import Features from './sections/Features';
import Gallery from './sections/Gallery';
import Download from './sections/Download';

import Docs from './pages/Docs';

const AppContent = () => {
    const location = useLocation();
    const isDocsPage = location.pathname.startsWith('/docs');
    return (
        <div className="relative antialiased bg-black overflow-x-hidden text-white">
            {!isDocsPage && <Navbar />}
            <Routes>
                <Route path="/" element={
                    <main>
                        <Main />
                        <Features />
                        <Gallery />
                        <Download />
                    </main>
                } />
                <Route path="/docs/*" element={<Docs />} />
            </Routes>
            {!isDocsPage && <Footer />}
        </div>
    );
};

function App() {
    return (
        <Router basename="/ShrinkTag/">
            <AppContent />
        </Router>
    );
}

export default App;

