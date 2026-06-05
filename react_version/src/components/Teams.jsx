import { useState, useEffect, useRef } from 'react';

const teamMembers = [
  { id: 1, name: 'Alex Carter', img: '/images/profile-1.jpeg', role: 'Full Stack Developer', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { id: 2, name: 'Sophia Lee', img: '/images/profile-2.jpeg', role: 'Lead UI/UX Designer', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { id: 3, name: 'Liam Neeson', img: '/images/profile-3.jpeg', role: 'Video Editor & Animator', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { id: 4, name: 'Olivia Rose', img: '/images/profile-4.jpeg', role: 'Social Media Manager', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { id: 5, name: 'Noah Taylor', img: '/images/profile-5.jpeg', role: 'Technical Content Writer', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
];

export default function Teams() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const autoplayRef = useRef(null);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.max(1, teamMembers.length - itemsPerPage + 1);

  // Autoplay functionality
  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 3000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    startAutoplay(); // Reset timer
  };

  return (
    <section id="teams" className="py-24 bg-zinc-950 text-white font-sans overflow-hidden relative">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Title */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold font-ubuntu tracking-tight inline-block pb-3 border-b-3 border-red-600">
            My teams
          </h2>
          <div className="text-red-500 text-sm tracking-widest uppercase mt-3 font-semibold">
            who with me
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-full"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {/* Slider Window */}
          <div className="overflow-hidden w-full py-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="px-3 flex-shrink-0"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  {/* Card */}
                  <div className="group bg-zinc-900 rounded-xl p-8 text-center border border-zinc-800 transition-all duration-300 hover:bg-red-600 hover:border-red-500 hover:shadow-xl hover:shadow-red-600/10 cursor-pointer transform hover:-translate-y-2">
                    <div className="flex flex-col items-center justify-center">
                      {/* Image */}
                      <img
                        src={member.img}
                        alt={member.name}
                        className="h-[150px] w-[150px] object-cover rounded-full border-[5px] border-red-600 group-hover:border-white transition-all duration-300 shadow-md"
                      />
                      
                      {/* Name */}
                      <h3 className="text-2xl font-bold mt-6 text-zinc-100 group-hover:text-white transition-colors duration-300">
                        {member.name}
                      </h3>
                      
                      {/* Role */}
                      <span className="text-sm font-semibold text-red-400 group-hover:text-white/80 transition-colors duration-300 uppercase tracking-wider block mt-1">
                        {member.role}
                      </span>
                      
                      {/* Text */}
                      <p className="mt-4 text-zinc-400 group-hover:text-zinc-100 transition-colors duration-300 text-sm leading-relaxed max-w-xs">
                        {member.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-8 bg-red-600'
                      : 'w-3 bg-zinc-700 hover:bg-red-600/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
