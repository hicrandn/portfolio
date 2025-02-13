import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;