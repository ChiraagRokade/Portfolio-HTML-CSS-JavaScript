import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Teams from './components/Teams';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollUpButton from './components/ScrollUpButton';

export default function App() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen selection:bg-red-500 selection:text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Teams />
        <Contact />
      </main>
      <Footer />
      <ScrollUpButton />
    </div>
  );
}
