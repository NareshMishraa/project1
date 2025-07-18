import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/project1/" element={<Home/>}/>
            <Route path="/project1/about" element={<About/>}/>
            <Route path="/project1/services" element={<Services/>}/>
            <Route path="/project1/contact" element={<Contact/>}/>
            <Route path="/project1/projects" element={<Projects/>}/>
        </Routes>
        <Footer/>
    </Router>
      
    </>
  );
};

export default App;
