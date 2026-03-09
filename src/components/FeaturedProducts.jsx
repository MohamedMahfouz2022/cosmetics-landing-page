"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    categoryId: "face",
    name: "سيروم النضارة والإشراق",
    price: "450 ج.م",
    image: "/product-serum.png",
    description: "بمستخلص الورد البلدي وفيتامين سي لنضارة لا مثيل لها."
  },
  {
    id: 2,
    categoryId: "face",
    name: "كريم الترطيب العميق",
    price: "320 ج.م",
    image: "/product-cream.png",
    description: "ترطيب يدوم 48 ساعة بمستخلصات طبيعية."
  },
  {
    id: 3,
    categoryId: "face",
    name: "غسول لطيف للوجه",
    price: "210 ج.م",
    image: "/product-cleanser.png",
    description: "تنظيف عميق دون جفاف البشرة."
  },
  {
    id: 4,
    categoryId: "body",
    name: "زبدة الشيا للجسم",
    price: "280 ج.م",
    image: "/product-cream.png", // Reusing image for demo
    description: "تغذية عميقة وعلاج لجفاف البشرة."
  },
  {
    id: 5,
    categoryId: "makeup",
    name: "أحمر شفاه مخملي",
    price: "150 ج.م",
    image: "/product-serum.png", // Reusing image for demo
    description: "لون غني وثابت يدوم طويلاً بحماية مرطبة."
  },
  {
    id: 6,
    categoryId: "perfume",
    name: "عطر ليالي الشرق",
    price: "850 ج.م",
    image: "/product-cleanser.png", // Reusing image for demo
    description: "عطر ساحر بمزيج من العود والورد المدهش."
  }
];

export default function FeaturedProducts({ activeCategory = "all" }) {
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter((p) => p.categoryId === activeCategory);

  return (
    <section id="products" className="pt-8 pb-24 bg-background min-h-[500px]">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            الأكثر <span className="text-primary">مبيعاً</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/70 text-lg max-w-2xl mx-auto"
          >
            اكتشفي تشكيلتنا المفضلة لدى عميلاتنا، واستمتعي ببشرة صحية ومشرقة.
          </motion.p>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all border border-primary/10 relative overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-primary/5">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Add to Cart */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 backdrop-blur p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors shadow-lg">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="text-center flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-foreground/60 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
                  <div className="text-primary font-bold text-lg mt-auto">{product.price}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center text-foreground/50 py-12">
            لا توجد منتجات في هذا التصنيف حالياً.
          </div>
        )}

      </div>
    </section>
  );
}
