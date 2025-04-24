import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsExperience from './components/ProjectsExperience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeCV from './components/ResumeCV';
import Certificates from './components/Certificates';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <About />
        <Skills />
        <ProjectsExperience />
        <ResumeCV />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
