import React, { Component } from 'react';
import './App.css';
import Sitebar from './components/Navbar';
import BoxHero from './components/BoxHero';
import TextContent from './components/TextContent';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Sitebar />
        <BoxHero />
        <TextContent />
        <Footer />
      </div>
    );
  }
}

export default App;