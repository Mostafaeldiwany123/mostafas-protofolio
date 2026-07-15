import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = '201225932280';
  const message = 'Hi Mostafa, I saw your portfolio and I\'m interested in discussing a web development project.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">
            Let's Work Together
          </h2>
          <p className="text-gray-500 text-sm font-light mb-8">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how I can help bring your ideas to life.
          </p>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3.5 text-sm font-light hover:bg-gray-800 transition-all group rounded-full"
          >
            Contact Me
            <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <p className="text-gray-400 text-sm mt-6">
            Response time: Within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;