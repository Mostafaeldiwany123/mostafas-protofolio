import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "أحمد حسن",
      role: "صاحب متجر إلكتروني",
      content: "يا جماعة مصطفى بجد شاطر جداً. خلصلي المتجر بتاعي في أسبوع زي ما اتفقنا بالضبط، وكنت خايف في الأول عشان السعر كان مناسب جداً بس طلع الشغل تمام وشغال ومفهوش غلطة. أنصح أي حد حابب يعمل ويب سايت نضيف يتعامل معاه."
    },
    {
      name: "فاطمة الشرقاوي",
      role: "مؤسسة وكالة تسويق",
      content: "كنا محتاجين نعمل كذا صفحة هبوط مستعجلة لعملاء عندنا، مصطفى خلصهم كلهم في وقت قياسي وبدون وجع دماغ. الميزة فيه إنه بيفهم المطلوب من أول مرة ومش بنحتاج نعيد ونزيد كتير في الكلام، ودي حاجة مريحة جداً بصراحة."
    },
    {
      name: "عمر خليل",
      role: "شريك مؤسس لشركة ناشئة",
      content: "تعاملت مع مصطفى عشان يبرمج لوحة التحكم للمشروع بتاعنا. عمل السيرفر وقاعدة البيانات وربط الـ API بالكامل. بصراحة الشغل نضيف جداً وسريع ومكنتش متوقع يطلع بالدقة دي بالسعر ده، شاب محترم وشغله يعتمد عليه."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">
            Testimonials
          </h2>
          <p className="text-gray-500 text-sm font-light">
            Real feedback from people I've worked with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 font-cairo">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 p-8 hover:border-gray-200 transition-all duration-300 hover:shadow-sm flex flex-col text-right"
              dir="rtl"
            >
              <div className="mb-6 flex-grow">
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="pt-4 border-t border-gray-50">
                <p className="text-sm font-normal text-gray-900">{testimonial.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;