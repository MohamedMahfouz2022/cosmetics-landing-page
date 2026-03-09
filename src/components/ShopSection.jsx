"use client";

import { useState } from "react";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";

export default function ShopSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <>
      <Categories activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
      <FeaturedProducts activeCategory={activeCategory} />
    </>
  );
}
