import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased bg-stone-50 selection:bg-zurcan-orange/30 selection:text-zurcan-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;