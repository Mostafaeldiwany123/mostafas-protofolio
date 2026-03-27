import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Tell Me Your Idea",
      desc: "Send me a WhatsApp message with what you need. I'll ask a few questions to understand your project."
    },
    {
      step: "02",
      title: "I Build Everything",
      desc: "I design, develop, and test your website. You get weekly updates and can request changes anytime."
    },
    {
      step: "03",
      title: "Launch & Support",
      desc: "Your site goes live with domain and hosting included. I provide 1 week of free support after launch."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Simple 3-step process. No complicated contracts or hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 p-8 hover:border-gray-300 transition-colors"
            >
              <div className="text-4xl font-bold text-gray-200 mb-4">{item.step}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;