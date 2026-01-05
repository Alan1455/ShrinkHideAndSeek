import React from 'react';
import Navbar from './components/Navbar';
import Main from './sections/Main';
import Features from './sections/Features';
import Gallery from './sections/Gallery';
import Download from './sections/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative antialiased bg-black overflow-x-hidden">
      <Navbar />
      <Main />
      <Features />
      <Gallery />
      <Download />
      <Footer />
    </div>
  );
}

export default App;

