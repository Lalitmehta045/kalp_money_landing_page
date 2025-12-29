import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    image: "/Assets/2.jpg",
    badge: "BUSINESS LOANS",
    title: "Scale Your Business <br/> with <span class='text-[#F35629]'>Kalp Money.</span>",
    subtitle: "Collateral-free funding up to ₹50 Lakhs for MSMEs. Quick disbursal within 24 hours.",
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000",
    badge: "HOME LOANS",
    title: "Your Dream Home <br/> is <span class='text-[#F35629]'>Closer Than Ever.</span>",
    subtitle: "Attractive home loan interest rates starting at 8.15%. Digital process with expert guidance.",
  },
  {
    image: "/Assets/1.jpg",
    badge: "INVESTMENTS",
    title: "Secure Your Future <br/> with <span class='text-[#F35629]'>Smart Wealth.</span>",
    subtitle: "Institutional-grade investment opportunities made simple. Start your journey today.",
  },
  {
    image: "/Assets/4.jpg",
    badge: "PERSONAL LOANS",
    title: "Instant Cash <br/> <span class='text-[#F35629]'>When You Need It.</span>",
    subtitle: "Quick personal loans up to ₹10 Lakhs. Minimal documentation and instant approval.",
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center bg-[#1F4583] scroll-mt-20">
      {/* Simple Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            height: 'calc(100vh - 80px)',
            minHeight: '520px',
            marginTop: '80px',
            objectFit: 'contain'
          }}
          onError={(e) => {
            const target = e.target as HTMLDivElement;
            target.style.backgroundImage = "url('https://picsum.photos/1920/1080?random=1')";
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F4583]/80 to-transparent"></div>
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#F35629]/20 px-3 py-1.5 rounded-lg mb-6">
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              {slides[currentSlide].badge}
            </span>
          </div>
          
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
          ></h1>
          
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-lg">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#1F4583] text-white px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#1a365d] transition-all">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Simple Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
