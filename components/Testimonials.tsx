import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "E-commerce Store Owner",
      content: "Mostafa built my online store in exactly one week like he promised. I was skeptical at first because the price was so reasonable, but he delivered everything - payment gateway, inventory management, the whole thing. Sales have been steady since launch.",
      rating: 5
    },
    {
      name: "Fatma El-Sharkawy",
      role: "Marketing Agency Founder",
      content: "We needed landing pages for 3 different clients on tight deadlines. Mostafa handled all of them without any delays. What I liked most is he actually asks the right questions upfront, so there's minimal back-and-forth. Will definitely work with him again.",
      rating: 5
    },
    {
      name: "Omar Khalil",
      role: "Tech Startup Co-founder",
      content: "Hired Mostafa to build our MVP dashboard. He set up the whole Supabase backend, user authentication, and a clean admin panel. For the price we paid, I honestly expected way less. Guy knows his stuff.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            What Clients Say
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Real feedback from people I've worked with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 p-6 hover:border-gray-300 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <div className="mb-4 flex-grow">
                <Quote size={20} className="text-gray-300 mb-2" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={20} className="text-gray-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{testimonial.name}</p>
                  <p className="text-xs text-gray-500 truncate">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;