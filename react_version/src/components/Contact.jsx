import { useState } from 'react';
import { User, MapPin, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replicating action
    alert(`Thank you, ${formData.name}! Your message has been sent (simulation).`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { label: 'Name', value: 'Arjun Williamson', icon: User },
    { label: 'Address', value: 'Surkhet, Nepal', icon: MapPin },
    { label: 'Email', value: 'abc@gmail.com', icon: Mail },
  ];

  return (
    <section id="contact" className="py-24 bg-zinc-900 text-white font-sans relative">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold font-ubuntu tracking-tight inline-block pb-3 border-b-3 border-red-600">
            Contact me
          </h2>
          <div className="text-red-500 text-sm tracking-widest uppercase mt-3 font-semibold">
            get in touch
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          {/* Left Column: Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-100">Get in Touch</h3>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga
                corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?
              </p>
            </div>

            {/* Icon Rows */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center gap-6">
                    <div className="flex items-center justify-center p-4 bg-zinc-950/80 border border-zinc-800 rounded-xl text-red-500">
                      <Icon size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                        {info.label}
                      </div>
                      <div className="text-lg font-medium text-zinc-200 mt-0.5">
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-1/2 bg-zinc-950 border border-zinc-800 rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-zinc-100 text-left">Message me</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Name and Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full h-12 bg-zinc-900 border border-zinc-800 rounded-lg px-4 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full h-12 bg-zinc-900 border border-zinc-800 rounded-lg px-4 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full h-12 bg-zinc-900 border border-zinc-800 rounded-lg px-4 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message.."
                  required
                  rows={5}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-red-600 border-2 border-red-600 hover:bg-transparent hover:text-red-500 text-white font-semibold text-lg py-2.5 px-8 rounded-lg shadow-md transition-all duration-300 cursor-pointer"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
