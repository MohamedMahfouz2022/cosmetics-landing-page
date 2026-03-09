"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/20 pointer-events-auto"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          <Link href="#home">عناية <span className="text-foreground">جمالك</span></Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-foreground/80 font-medium">
          <Link href="#home" className="hover:text-primary transition-colors cursor-pointer block h-full flex items-center">الرئيسية</Link>
          <Link href="#products" className="hover:text-primary transition-colors cursor-pointer block h-full flex items-center">منتجاتنا</Link>
          <Link href="#about" className="hover:text-primary transition-colors cursor-pointer block h-full flex items-center">من نحن</Link>
          <Link href="#contact" className="hover:text-primary transition-colors cursor-pointer block h-full flex items-center">تواصل معنا</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-primary/10 rounded-full transition-colors text-foreground">
            <Link href="#products"><ShoppingBag className="w-5 h-5" /></Link>
          </button>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-primary/20 overflow-hidden pointer-events-auto z-50"
          >
            <div className="flex flex-col px-4 py-4 space-y-4 text-center">
              <Link href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-primary transition-colors font-medium">الرئيسية</Link>
              <Link href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-primary transition-colors font-medium">منتجاتنا</Link>
              <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-primary transition-colors font-medium">من نحن</Link>
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-primary transition-colors font-medium">تواصل معنا</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
