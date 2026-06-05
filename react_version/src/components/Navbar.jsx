import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Sticky navbar check
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Dynamic active section check
      const sections = ['home', 'about', 'services', 'skills', 'teams', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Skills', id: 'skills' },
    { name: 'Teams', id: 'teams' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
        isSticky
          ? 'py-4 bg-zinc-950/80 backdrop-blur-md border-b border-red-500/10 shadow-lg shadow-black/40'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-tight text-white select-none">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
            Portfo<span className="text-red-500 transition-colors duration-300">lio.</span>
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-[17px] font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? 'text-red-500'
                    : 'text-white hover:text-red-500'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-red-500 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-zinc-950 border-l border-zinc-800 shadow-2xl p-8 z-40 transform transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <span className="text-2xl font-bold text-white">Navigation</span>
          <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-xl font-medium block transition-colors duration-300 ${
                  activeSection === link.id ? 'text-red-500' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-30 md:hidden"
        />
      )}
    </nav>
  );
}
