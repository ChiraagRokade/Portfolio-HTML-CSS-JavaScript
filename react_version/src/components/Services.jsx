import { Paintbrush, Megaphone, Code } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      title: 'Web Design',
      icon: Paintbrush,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.',
    },
    {
      title: 'Advertising',
      icon: Megaphone,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.',
    },
    {
      title: 'Apps Design',
      icon: Code,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 text-white font-sans relative">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold font-ubuntu tracking-tight inline-block pb-3 border-b-3 border-red-600">
            My services
          </h2>
          <div className="text-red-500 text-sm tracking-widest uppercase mt-3 font-semibold">
            what i provide
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-10 flex flex-col items-center text-center transition-all duration-300 hover:bg-red-600 hover:border-red-500 hover:shadow-xl hover:shadow-red-600/10 cursor-pointer transform hover:-translate-y-2"
              >
                {/* Icon Container */}
                <div className="p-4 bg-zinc-950/50 rounded-full text-red-500 mb-6 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                  <Icon size={36} className="transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-zinc-100 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-zinc-400 group-hover:text-zinc-100 leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
