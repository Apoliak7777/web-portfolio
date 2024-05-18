import Navbar from '../components/Navbar';
import Home from '../sections/Home';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

export default function Index() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
