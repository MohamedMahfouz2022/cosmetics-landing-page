"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Image / Pattern */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero.png" 
          alt="صورة خلفية فخمة" 
          fill 
          className="object-cover opacity-30 md:opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary-hover font-medium mb-6"
            >
              مجموعة العناية الفاخرة
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-foreground"
            >
              اكتشفي سر <span className="text-primary">جمالك</span> الطبيعي
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-xl text-foreground/70 mb-8 max-w-lg mx-auto md:mx-0"
            >
              منتجات عناية بالبشرة مصممة خصيصاً لتمنحك إشراقة لا مثيل لها، بمكونات طبيعية فاخرة.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Link 
                href="#products" 
                className="px-8 py-3 bg-primary text-white font-medium rounded-full shadow-lg shadow-primary/30 hover:bg-primary-hover transition-all hover:-translate-y-1"
              >
                تسوقي الآن
              </Link>
              <Link 
                href="#about" 
                className="px-8 py-3 border border-primary text-primary font-medium rounded-full hover:bg-primary/5 transition-all"
              >
                اعرفي المزيد
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-8 border-white/50 shadow-2xl">
              <Image 
                src="/product-serum.png"
                alt="سيروم العناية" 
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -translate-y-1/2 -right-10 md:-right-16 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">طبيعي 100%</p>
                  <p className="text-sm text-foreground/60">مكونات آمنة</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
