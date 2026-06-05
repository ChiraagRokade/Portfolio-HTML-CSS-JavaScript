import useTyped from '../hooks/useTyped';

export default function About() {
  const roles = ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"];
  const typedText = useTyped(roles, 100, 60, true);

  return (
    <section id="about" className="py-24 bg-zinc-900 text-white font-sans overflow-hidden relative">
      {/* Decorative accent glow */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold font-ubuntu tracking-tight inline-block pb-3 border-b-3 border-red-600">
            About me
          </h2>
          <div className="text-red-500 text-sm tracking-widest uppercase mt-3 font-semibold">
            who i am
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Profile Image Container */}
          <div className="w-full lg:w-[45%] flex justify-center relative group">
            {/* Glowing backdrop border effect */}
            <div className="absolute inset-0 bg-red-600/20 rounded-2xl transform rotate-3 scale-102 group-hover:rotate-0 transition-transform duration-300 pointer-events-none" />
            
            <img
              src="/images/profile-1.jpeg"
              alt="Arjun Williamson profile"
              className="relative rounded-2xl shadow-xl w-full max-w-[400px] aspect-square object-cover transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 z-10 border-2 border-zinc-800"
            />
          </div>

          {/* Description Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-zinc-100 leading-tight">
              I'm Arjun and I'm a{' '}
              <span className="text-red-500 font-bold border-r-2 border-red-500 pr-1 animate-pulse">
                {typedText}
              </span>
            </h3>
            
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque
              autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus
              accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus
              veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis
              beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.
            </p>

            <a
              href="/assets/cv.pdf"
              download
              className="inline-flex items-center justify-center bg-red-600 border-2 border-red-600 text-white font-semibold text-base py-3 px-8 rounded-lg shadow-md hover:bg-transparent hover:text-red-500 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
