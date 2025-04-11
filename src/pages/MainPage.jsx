import About from "./About";
import ContactSection from "./Contact";
import Education from "./Education";
import WorkExperience from "./Experiance";
import Home from "./Home";
import Project from "./Projects";

// src/pages/Home.jsx
const MainPage = () => {
    return (
      <div>
        <section id="home" className="min-h-screen">{<Home />}</section>
        <section id="about" className="min-h-screen">{<About/>}</section>
        <section id="education" className="min-h-screen">{<Education/>}</section>
        <section id="project" className="min-h-screen">{<Project/>}</section>
        <section id="experience" className="min-h-screen">{<WorkExperience/>}</section>
        <section id="contact" className="min-h-screen">{<ContactSection/>}</section>
      </div>
    );
  };
  
  export default MainPage;
  