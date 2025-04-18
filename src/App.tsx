import React from 'react';
import { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Rocket, Code2, Palette, Star, ArrowRight, Circle, Menu, X } from 'lucide-react';
import { LineShadowText } from './components/LineShadowText';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '-50px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#FFFCF9]">
      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-[#FFFCF9]/80 backdrop-blur-md z-50 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="font-serif text-2xl tracking-tight group">
              <span className="inline-block transition-transform group-hover:rotate-12 duration-300">p</span>
              <span className="inline-block transition-transform group-hover:-rotate-12 duration-300">r</span>
              <span className="inline-block transition-transform group-hover:rotate-12 duration-300">i</span>
              <span className="inline-block transition-transform group-hover:-rotate-12 duration-300">s</span>
              <span className="inline-block transition-transform group-hover:rotate-12 duration-300">m</span>
            </span>
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            {/* Desktop menu */}
            <div className="hidden lg:flex gap-8 items-center">
              <a href="#work" className="hover-underline text-gray-600 hover:text-black transition-colors">
                Work
              </a>
              <a href="#services" className="hover-underline text-gray-600 hover:text-black transition-colors">
                Services
              </a>
              <button className="relative overflow-hidden bg-black text-white px-6 py-2.5 rounded-full group">
                <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                Let's talk
                </span>
                <div className="absolute inset-0 bg-[#FF4D4D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </div>
            {/* Mobile menu */}
            <div className={`
              lg:hidden fixed inset-x-0 top-16 bg-[#FFFCF9]/95 backdrop-blur-lg border-b border-black/5
              transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
            `}>
              <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
                <div className="space-y-6">
                  <a 
                    href="#work" 
                    className="group flex items-center justify-between w-full py-3 text-lg font-medium text-gray-600 hover:text-black transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative">
                      Work
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF4D4D] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                  <a 
                    href="#services" 
                    className="group flex items-center justify-between w-full py-3 text-lg font-medium text-gray-600 hover:text-black transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative">
                      Services
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF4D4D] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                  <div className="pt-4">
                    <button 
                      className="relative overflow-hidden bg-black text-white w-full px-6 py-4 rounded-full group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-500 group-hover:translate-x-1">
                        Let's talk <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                      </span>
                      <div className="absolute inset-0 bg-[#FF4D4D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm fade-in-up">
            <Star className="w-4 h-4 text-yellow-400" />
            <p className="text-sm font-medium text-black/70 opacity-0 animate-[fadeInUp_1.5s_0.4s_cubic-bezier(0.22,1,0.36,1)_forwards]">Design & Development Studio</p>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[1.1] max-w-4xl text-balance fade-in-up delay-1">
            We craft
            <LineShadowText className="italic font-bold ml-4 opacity-0 animate-[fadeInUp_1.5s_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]" shadowColor="#FF4D4D"> digital </LineShadowText>
            <br />
            <LineShadowText className="italic font-bold opacity-0 animate-[fadeInUp_1.5s_1.2s_cubic-bezier(0.22,1,0.36,1)_forwards]" shadowColor="#FF4D4D"> experiences </LineShadowText>
            <br className="hidden md:block" />
            <span className="opacity-0 animate-[fadeInUp_1.5s_1.6s_cubic-bezier(0.22,1,0.36,1)_forwards] inline-block">for ambitious startups</span>
          </h1>
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 fade-in-up delay-2">
            <a href="#contact" className="group relative overflow-hidden inline-flex items-center bg-black text-white px-8 py-4 rounded-full w-full sm:w-auto justify-center sm:justify-start">
              <span className="relative z-10 flex items-center gap-2 transition-transform duration-500 group-hover:translate-x-1">
                Start a project
                <ArrowUpRight size={20} className="transition-transform group-hover:rotate-45" />
              </span>
              <div className="absolute inset-0 bg-[#FF4D4D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
            <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
              <div className="relative group">
                <p className="text-gray-400 flex items-center gap-2 text-sm sm:text-base py-2 px-4 rounded-full bg-black/[0.02] hover:bg-black/[0.05] transition-colors">
                  <Circle className="w-2 h-2 fill-[#FF4D4D]" />
                  Solapur, MH
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-12 sm:mt-0 mb-12 sm:mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative scale-in delay-3">
            <div className="absolute -inset-x-4 sm:inset-x-0 -inset-y-8 bg-gradient-to-b from-[#FFFCF9] via-transparent to-[#FFFCF9] z-10"></div>
            <div className="aspect-[16/9] sm:aspect-[2/1] md:aspect-[16/9] rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/5 transform hover:scale-[1.01] transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070"
              alt="Modern design workspace"
              className="w-full h-full object-cover"
            />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs sm:text-sm text-white/90 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm">
              <span>Our workspace in Solapur, MH</span>
              <ArrowUpRight size={16} className="opacity-75" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl mb-20 animate-on-scroll">
            Our expertise
            <Circle className="w-3 h-3 inline-block ml-2 fill-[#FF4D4D]" />
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-gradient backdrop-blur-sm p-8 rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-xl animate-on-scroll">
              <Sparkles className="w-12 h-12 mb-6 text-[#FF4D4D]" />
              <h3 className="font-serif text-xl mb-4">Brand Strategy</h3>
              <p className="text-gray-600">We help startups define their unique voice and position in the market.</p>
            </div>
            <div className="card-gradient backdrop-blur-sm p-8 rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-xl animate-on-scroll">
              <Palette className="w-12 h-12 mb-6 text-[#FF4D4D]" />
              <h3 className="font-serif text-xl mb-4">UI/UX Design</h3>
              <p className="text-gray-600">Creating intuitive and beautiful interfaces that users love to interact with.</p>
            </div>
            <div className="card-gradient backdrop-blur-sm p-8 rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-xl animate-on-scroll">
              <Code2 className="w-12 h-12 mb-6 text-[#FF4D4D]" />
              <h3 className="font-serif text-xl mb-4">Development</h3>
              <p className="text-gray-600">Building robust and scalable applications with modern technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 animate-on-scroll">
            <h2 className="font-serif text-4xl mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl">We follow a proven methodology that ensures your vision comes to life exactly as imagined.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative animate-on-scroll">
              <div className="card-gradient backdrop-blur-sm p-8 rounded-2xl h-full">
                <span className="font-serif text-6xl text-[#FF4D4D]/20 absolute top-4 right-4">01</span>
                <h3 className="font-serif text-xl mb-4">Discovery</h3>
                <p className="text-gray-600">We dive deep into your vision, goals, and challenges to understand the full scope.</p>
              </div>
              <ArrowRight className="hidden lg:block w-8 h-8 absolute top-1/2 -right-4 text-[#FF4D4D]/30 -translate-y-1/2" />
            </div>
            <div className="relative animate-on-scroll">
              <div className="card-gradient backdrop-blur-sm p-8 rounded-2xl h-full">
                <span className="font-serif text-6xl text-[#FF4D4D]/20 absolute top-4 right-4">02</span>
                <h3 className="font-serif text-xl mb-4">Strategy</h3>
                <p className="text-gray-600">We craft a detailed roadmap that aligns with your business objectives.</p>
              </div>
              <ArrowRight className="hidden lg:block w-8 h-8 absolute top-1/2 -right-4 text-[#FF4D4D]/30 -translate-y-1/2" />
            </div>
            <div className="relative animate-on-scroll">
              <div className="card-gradient backdrop-blur-sm p-8 rounded-2xl h-full">
                <span className="font-serif text-6xl text-[#FF4D4D]/20 absolute top-4 right-4">03</span>
                <h3 className="font-serif text-xl mb-4">Creation</h3>
                <p className="text-gray-600">Our team brings your vision to life with precision and creativity.</p>
              </div>
              <ArrowRight className="hidden lg:block w-8 h-8 absolute top-1/2 -right-4 text-[#FF4D4D]/30 -translate-y-1/2" />
            </div>
            <div className="relative animate-on-scroll">
              <div className="card-gradient backdrop-blur-sm p-8 rounded-2xl h-full">
                <span className="font-serif text-6xl text-[#FF4D4D]/20 absolute top-4 right-4">04</span>
                <h3 className="font-serif text-xl mb-4">Launch</h3>
                <p className="text-gray-600">We ensure a smooth deployment and provide ongoing support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-8 sm:mb-12 max-w-3xl mx-auto animate-on-scroll">
            Ready to transform your{' '}
            <LineShadowText className="italic font-bold text-[#FF4D4D]" shadowColor="white">idea</LineShadowText>
            {' '}into reality?
          </h2>
          <a href="#contact" className="group relative overflow-hidden inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-[1.02] transition-all duration-500 animate-on-scroll">
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
              Get in touch <Rocket className="inline-block w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-[#FF4D4D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="font-serif text-2xl tracking-tight group">
              <span className="inline-block transition-transform group-hover:rotate-12 duration-300">p</span>
              <span className="inline-block transition-transform group-hover:-rotate-12 duration-300">r</span>
              <span className="inline-block transition-transform group-hover:rotate-12 duration-300">i</span>
              <span className="inline-block transition-transform group-hover:-rotate-12 duration-300">s</span>
              <span className="inline-block transition-transform group-hover:rotate-12 duration-300">m</span>
            </span>
            <div className="flex gap-12">
              <a href="#" className="hover-underline text-gray-600 hover:text-black transition-colors">Twitter</a>
              <a href="#" className="hover-underline text-gray-600 hover:text-black transition-colors">LinkedIn</a>
              <a href="#" className="hover-underline text-gray-600 hover:text-black transition-colors">Instagram</a>
            </div>
            <p className="text-gray-500">© 2025 Prism. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};


export default App