
import './App.css';
import  React, {useEffect} from 'react';

import AOS from "aos";
import "aos/dist/aos.css";


//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//Components
import NavBar from './components/NavBar'
import ScrollTop from './components/ScrollTop'


//Sections
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillSection from './sections/SkillSection'
import ProjectSection from './sections/ProjectSection'
import BlogSection from './sections/BlogSection'
import ContactSection from './sections/ContactSection'


function App() {
    useEffect(() => {
      AOS.init({ duration: 800});
    }, []);



  return ( 
  <>
     
   
  
      <Router>
        <Routes>
          <Route path="/portfolio" element={<NavBar />} exact >
          <Route exact path="/portfolio/hero_section" element={<HeroSection/>} />

            <Route path="/portfolio/about_section" element={<AboutSection/>} />
            <Route path="/portfolio/skill_section" element={<SkillSection/>} />
            <Route path="/portfolio/project_section" element={<ProjectSection/>} exact/>
            <Route path="/portfolio/blog_section" element={<BlogSection/>} exact/>
            <Route path="/portfolio/contact_section" element={<ContactSection/>} exact/>


          </Route>
        </Routes>
      </Router>

      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
      <ProjectSection/>
      <BlogSection/>
      <ContactSection/>



      <ScrollTop />

    </>
  );
}

export default App;
