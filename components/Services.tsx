
import React from 'react';
import { User, Home, Briefcase, Car, Building2, Smartphone, Shield, Heart, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Personal Loan",
    rate: "10.5%",
    desc: "Get instant personal loans up to ₹25 Lakhs with minimal documentation and quick...",
    tags: ["No Collateral", "Flexible Tenure", "Instant Approval"],
    icon: User,
  },
  {
    title: "Home Loan",
    rate: "8.5%",
    desc: "Make your dream home a reality with competitive interest rates and long...",
    tags: ["Up to ₹5 Cr", "30 Years Tenure", "Low EMI"],
    icon: Home,
  },
  {
    title: "Business Loan",
    rate: "12%",
    desc: "Fuel your business growth with our flexible business loans designed for MSMEs and...",
    tags: ["Collateral Free", "Quick Disbursal", "Minimal Docs"],
    icon: Briefcase,
  },
  {
    title: "Car Loan / Loan Against Car",
    rate: "9.5%",
    desc: "Finance your dream car or unlock the value of your existing vehicle with attractive rates.",
    tags: ["Up to 200% Value", "Used & New Cars", "Fast Process"],
    icon: Car,
  },
  {
    title: "Loan Against Property",
    rate: "9%",
    desc: "Leverage your property to get high-value loans at the lowest interest rates.",
    tags: ["High LTV Ratio", "Long Tenure", "Low Interest"],
    icon: Building2,
  },
  {
    title: "Product Loan",
    rate: "0%",
    desc: "Buy electronics, appliances, and gadgets with easy EMI options at zero down...",
    tags: ["No Cost EMI", "Instant Approval", "Wide Network"],
    icon: Smartphone,
  },
  {
    title: "Life Insurance",
    rate: "Best Plans",
    desc: "Secure your family's future with comprehensive life insurance plans from to...",
    tags: ["Term Plans", "ULIPs", "Endowment"],
    icon: Shield,
  },
  {
    title: "Health Insurance",
    rate: "From ₹500/mo",
    desc: "Protect yourself and your loved ones with the best health insurance policies.",
    tags: ["Cashless Claims", "Family Floater", "Critical Illness"],
    icon: Heart,
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#f8fafc] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="bg-brand-light text-[#204782] px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Complete Financial Solutions</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            From loans to insurance, we offer everything you need to achieve your financial goals with transparency and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group" data-aos="fade-up" data-aos-delay={i * 50}>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#E16137]/10 text-[#E16137]">
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-[#224483] font-bold">{s.rate}</div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-[#E16137] transition-colors">{s.title}</h4>
              <p className="text-sm text-slate-500 mb-6 line-clamp-2">{s.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag, j) => (
                  <span key={j} className="text-xs bg-slate-50 text-slate-600 px-2 py-1 rounded-md">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;