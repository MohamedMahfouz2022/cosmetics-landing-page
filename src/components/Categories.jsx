"use client";

import { motion } from "framer-motion";

const categories = [
  { id: "all", name: "الكل", icon: "🌟" },
  { id: "face", name: "العناية بالوجه", icon: "✨" },
  { id: "body", name: "العناية بالجسم", icon: "🌸" },
  { id: "makeup", name: "مستحضرات التجميل", icon: "💄" },
  { id: "perfume", name: "العطور", icon: "💎" },
];

export default function Categories({ activeCategory, onSelectCategory }) {
  return (
    <section className="pt-16 pb-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <motion.div
                key={category.id}
                onClick={() => onSelectCategory && onSelectCategory(category.id)}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full shadow-md border cursor-pointer transition-colors ${
                  isActive 
                    ? "bg-primary text-white border-primary" 
                    : "bg-white text-foreground border-primary/10 hover:border-primary"
                }`}
              >
                <span className="text-3xl md:text-4xl mb-2">{category.icon}</span>
                <span className={`font-medium text-xs md:text-sm ${isActive ? "text-white" : ""}`}>
                  {category.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
