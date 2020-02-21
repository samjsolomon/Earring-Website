import React from 'react';
import './App.css';
import Portfolio from "./components/Portfolio";
import NavBar from './components/NavBar';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
        <NavBar />
        <Header />
        <Services /> 
        <Portfolio />
        <About />
        <Team />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
