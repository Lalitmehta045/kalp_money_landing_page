
import React from 'react';

const banks = [
  { name: "HDFC Bank", logo: "/Assets/hdfc.png" },
  { name: "ICICI Bank", logo: "/Assets/icici.png" },
  { name: "SBI", logo: "/Assets/sbi.png" },
  { name: "Axis Bank", logo: "/Assets/axis.png" },
  { name: "Kotak", logo: "/Assets/kotak.png" },
  { name: "Yes Bank", logo: "/Assets/yes.png" },
  { name: "IndusInd", logo: "/Assets/IndusInd.png" },
  { name: "Bajaj Finance", logo: "/Assets/bajaj.png" },
  { name: "PNB", logo: "/Assets/pnb.png" },
  { name: "IDFC", logo: "/Assets/idfc.png" }
];

const TrustBar: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-light via-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-700 font-semibold text-lg mb-12 tracking-wide">Trusted by Leading Financial Institutions</p>
        <div className="relative">
          <div className="flex animate-slide">
            {[...banks, ...banks, ...banks].map((bank, i) => (
              <div key={i} className="flex-shrink-0 sm:mx-4 px-4 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 min-w-[120px] flex items-center justify-center group">
                <img 
                  src={bank.logo} 
                  alt={bank.name} 
                  className="h-28 w-auto object-contain transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;