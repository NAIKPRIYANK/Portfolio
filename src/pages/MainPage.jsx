import About from "./About";
import Home from "./Home";

// src/pages/Home.jsx
const MainPage = () => {
    return (
      <div>
        <section id="home" className="min-h-screen">{<Home />}</section>
        <section id="about" className="min-h-screen">{<About/>}</section>
        <section id="education" className="min-h-screen">Education</section>
        <section id="project" className="min-h-screen">Projects</section>
        <section id="experience" className="min-h-screen">Experience</section>
        <section id="contact" className="min-h-screen">Contact</section>
      </div>
    );
  };
  
  export default MainPage;
  