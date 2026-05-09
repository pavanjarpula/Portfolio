import './index.css';
import { useEffect } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

export default function App() {
  useEffect(() => {
    const addHoverListeners = () => {
      const cursor = document.querySelector('.cursor');
      if (!cursor) return;
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
      });
    };
    const timeout = setTimeout(addHoverListeners, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
