import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const Services = () => {
  const includes = [
    "Custom design & development",
    "Domain name (1 year)",
    "Hosting setup (1 year)",
    "Mobile responsive",
    "SEO optimized",
    "1 week delivery"
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Complete Website Package
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Everything you need to get online. One price, no hidden fees.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border border-gray-200 p-6 md:p-10 max-w-2xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <p className="text-sm text-gray-500 mb-1">Starting at</p>
              <div className="flex items-baseline gap-1 flex-wrap">
                <span className="text-4xl font-bold text-gray-900">8,000 EGP</span>
                <span className="text-gray-500">/ project</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">~$120 USD</p>
            </div>
            <a
              href="mailto:mostafafafa6@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition-all group"
            >
              Get Started
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <p className="text-sm font-semibold text-gray-900 mb-4">What's included:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {includes.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-emerald-600" />
                  </div>
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;