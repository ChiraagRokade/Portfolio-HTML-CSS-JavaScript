import useTyped from '../hooks/useTyped';

export default function Hero() {
  const roles = ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"];
  const typedText = useTyped(roles, 100, 60, true);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen text-white bg-zinc-950 bg-cover bg-center bg-fixed font-sans"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(9, 9, 11, 0.9), rgba(9, 9, 11, 0.4)), url('/images/banner.jpg')`,
      }}
    >
      {/* Background glow effects for premium look */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-3xl">
          <div className="text-xl md:text-2xl font-medium text-red-500 mb-2 tracking-wide uppercase">
            Hello, my name is
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-white leading-tight">
            Arjun Williamson
          </h1>
          
          <div className="text-2xl md:text-4xl font-medium mb-8 flex items-center h-12">
            <span>And I'm a&nbsp;</span>
            <span className="text-red-500 font-semibold border-r-2 border-red-500 pr-1 animate-pulse">
              {typedText}
            </span>
          </div>

          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-flex items-center justify-center bg-red-600 border-2 border-red-600 text-white font-semibold text-lg md:text-xl py-3 px-8 rounded-lg shadow-lg hover:bg-transparent hover:text-red-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
}
