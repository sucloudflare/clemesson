import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Music } from './components/Music';
import { Sermons } from './components/Sermons';
import { Resources } from './components/Resources';
import { Footer } from './components/Footer';

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <Header />
        <main>
          <Hero />
          <About />
          <Music />
          <Sermons />
          <Resources />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App