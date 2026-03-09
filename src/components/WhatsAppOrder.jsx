"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppOrder() {
  const phoneNumber = "01013495432";
  // Format for wa.me link. Prepending 2 for Egypt just in case, but using exactly what was requested.
  const whatsappLink = `https://wa.me/2${phoneNumber}?text=${encodeURIComponent("مرحباً، أود الاستفسار عن منتجات العناية بالبشرة.")}`;

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-primary/10">
      <div className="container mx-auto px-4 text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-primary/20 relative overflow-hidden"
        >
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 shadow-inner">
              <MessageCircle className="w-10 h-10" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              اطلبي الآن عبر <span className="text-green-600">واتساب</span>
            </h2>

            <p className="text-foreground/70 text-lg mb-8 max-w-xl">
              تحدثي مع خبيرات العناية بالبشرة لدينا لاختيار الروتين الأنسب لك، واحصلي على طلبك في أسرع وقت.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                <span className="sm:text-base text-sm">تواصل معنا الآن</span>
              </div>
              <span className="bg-white/20 px-2 py-1 rounded-md text-sm mr-2" dir="ltr">{phoneNumber}</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
