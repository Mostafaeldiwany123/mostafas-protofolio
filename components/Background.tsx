import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Database, Globe, Shield, Zap } from 'lucide-react';

const Background = () => {
  const capabilities = [
    {
      icon: Monitor,
      title: "Frontend Development",
      desc: "Clean, responsive interfaces"
    },
    {
      icon: Server,
      title: "Backend & APIs",
      desc: "User auth, payments, admin panels"
    },
    {
      icon: Database,
      title: "Database Design",
      desc: "Secure, scalable data storage"
    },
    {
      icon: Globe,
      title: "Domain & Hosting",
      desc: "Full deployment included"
    },
    {
      icon: Shield,
      title: "Security",
      desc: "Protected from common attacks"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      desc: "1 week turnaround"
    }
  ];

  return (
    <section id="background" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-light tracking-tight text-gray-900 mb-3">What I Do</h2>
          <p className="text-gray-600 mb-10 max-w-xl text-sm">
            I build complete web applications from scratch. You tell me what you need, and I deliver a working product.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-50 border border-gray-100 p-4 md:p-5 hover:border-gray-200 transition-colors"
              >
                <div className="w-8 h-8 md:w-9 md:h-9 bg-gray-900 flex items-center justify-center mb-3">
                  <item.icon size={16} className="text-white" />
                </div>
                <h3 className="font-light text-gray-900 mb-1 text-xs md:text-sm">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Background;