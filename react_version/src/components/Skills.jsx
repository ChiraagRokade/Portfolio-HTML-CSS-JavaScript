import { useState, useEffect, useRef } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillsList = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 70 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'PHP', percentage: 40 },
    { name: 'MySQL', percentage: 30 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-zinc-900 text-white font-sans relative"
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold font-ubuntu tracking-tight inline-block pb-3 border-b-3 border-red-600">
            My skills
          </h2>
          <div className="text-red-500 text-sm tracking-widest uppercase mt-3 font-semibold">
            what i know
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Column: Story */}
          <div className="w-full lg:w-1/2 text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-100">
              My creative skills & experiences.
            </h3>
            
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error est
              recusandae consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi.
              Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam
              alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod.
            </p>
            
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-red-600 border-2 border-red-600 text-white font-semibold text-base py-2.5 px-6 rounded-lg hover:bg-transparent hover:text-red-500 transition-all duration-300"
            >
              Read more
            </a>
          </div>

          {/* Right Column: Progress Bars */}
          <div className="w-full lg:w-1/2 space-y-6">
            {skillsList.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-base md:text-lg font-medium">
                  <span className="text-zinc-200">{skill.name}</span>
                  <span className="text-red-400 font-bold">{skill.percentage}%</span>
                </div>
                
                {/* Progress Bar Track */}
                <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-rose-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.3)] transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.percentage}%` : '0%',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
