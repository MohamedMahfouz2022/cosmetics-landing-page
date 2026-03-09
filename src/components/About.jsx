"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Droplets, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-right"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              فلسفة <span className="text-primary">عناية جمالك</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              نؤمن بأن الجمال الحقيقي ينبع من الطبيعة. لذلك، كرسنا جهودنا لابتكار وتوفير مستحضرات عناية بالبشرة تجمع بين المكونات الطبيعية النقية وأحدث الأبحاث العلمية، لنقدم لك روتيناً آمناً وفعالاً يبرز إشراقتك الحقيقية.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-xl text-primary mt-1">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">مكونات طبيعية مائة بالمائة</h3>
                  <p className="text-foreground/60">نحرص على انتقاء أفضل المستخلصات النباتية الخالية من المواد الكيميائية الضارة.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-xl text-primary mt-1">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">ترطيب وعناية فائقة</h3>
                  <p className="text-foreground/60">تركيباتنا مصممة لتتغلغل بعمق، وتعيد لبشرتك حيويتها ونضارتها الطبيعية.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-xl text-primary mt-1">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">نتائج مبهرة وآمنة</h3>
                  <p className="text-foreground/60">تم اختبار منتجاتنا بدقة لضمان فعاليتها وأمانها على جميع أنواع البشرة.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0 duration-500"></div>
            <Image 
              src="/product-cream.png" 
              alt="فلسفة الطبيعة والجمال" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl z-20 shadow-xl border border-white/50">
              <div className="flex justify-between items-center text-center">
                <div>
                  <span className="block text-3xl font-bold text-primary mb-1">+10K</span>
                  <span className="text-sm font-medium text-foreground/70">عميلة سعيدة</span>
                </div>
                <div className="w-px h-12 bg-primary/20"></div>
                <div>
                  <span className="block text-3xl font-bold text-primary mb-1">100%</span>
                  <span className="text-sm font-medium text-foreground/70">مكونات نقية</span>
                </div>
                <div className="w-px h-12 bg-primary/20"></div>
                <div>
                  <span className="block text-3xl font-bold text-primary mb-1">24/7</span>
                  <span className="text-sm font-medium text-foreground/70">دعم واستشارة</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
