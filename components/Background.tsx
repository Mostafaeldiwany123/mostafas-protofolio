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
    <section id="background" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-4">What I Do</h2>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              I build complete web applications from scratch. You tell me what you need, and I deliver a working product.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center text-gray-500 flex-shrink-0">
                  <item.icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-normal text-gray-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;