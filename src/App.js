import React from 'react';
import './App.css';
import { About } from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scroll/ScrollUp';
import Mywork from './components/work/Mywork';


function App() {
  return (
    <>
    <Header/>
    <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Mywork/>
    <Qualification/>
    <Contact/>
     </main>
    <Footer/>
    <ScrollUp/>
    </>
  );
}

export default App;
