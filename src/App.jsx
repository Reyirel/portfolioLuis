import React from "react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

// Tus componentes
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './styles/Navegacion.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.navegacion');
      if (window.pageYOffset > 55) {
        nav.style.background = 'rgba(0, 0, 0, 0.595)';
      } else {
        nav.style.background = 'black';
      }
    };

    window.addEventListener('scroll', handleScroll);

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div>
      <nav className="navegacion">
        <div className="menu-toggle" onClick={toggleMenu}>☰</div>
        <ul className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
          <li><Link to="home" spy={true} smooth={true} duration={500}>Inicio</Link></li>
          <li><Link to="about" spy={true} smooth={true} duration={500}>Acerca de</Link></li>
          <li><Link to="skills" spy={true} smooth={true} duration={500}>Habilidades</Link></li>
          <li><Link to="projects" spy={true} smooth={true} duration={500}>Proyectos</Link></li>
          <li><Link to="contact" spy={true} smooth={true} duration={500}>Contacto</Link></li>
        </ul>
      </nav>
      <Element name="home"><Home /></Element>
      <Element name="about"><About /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="contact"><Contact /></Element>
    </div>
  );
}

export default App;
