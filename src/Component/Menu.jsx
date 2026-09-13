import React, { useState } from "react";
import foods from "../Data/Food.json";
import Card from "./Card";
import { motion } from "motion/react"


export default function Menu() {
  const [showCatg, SetShowCatg] = useState(false);
  const [selectCatg, SetSelectCatg] = useState("all");
  const [Search, SetSearch] = useState("");

  const categories = [...new Set(foods.map((food) => food.category))];

  const filteredFoods = foods.filter((food) => {
    const matchCategory = selectCatg === "all" || food.category === selectCatg;
    const matchSearch = food.name.toLowerCase().includes(Search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen overflow-hidden bg-[#590101] px-10 py-4">
      <section className="relative min-h-screen rounded-3xl bg-[radial-gradient(circle_at_70%_45%,#e51b1b,#a70709_45%,#650708_80%)] px-5 py-20 shadow-lg shadow-black/65">
       <div className="pointer-events-none absolute left-[-40px] top-10 text-[180px] font-serif font-bold text-white/5">
          美
        </div>
        {/* Search + Category */}
        <div className="mb-10 flex flex-col items-center gap-4">
          {/* Search */}
          <input
            type="text"
            value={Search}
            onChange={(e) => SetSearch(e.target.value)}
            placeholder="Search Your Dish"
            className="
      w-full max-w-md
      rounded-full
      border-2 border-[#590101]
      bg-red-800
      px-4 py-2.5
      text-base
      shadow-2xl
      outline-none
      transition duration-300
      hover:scale-[1.02]
      focus:ring-2 text-cyan-50
      sm:px-5 sm:py-3
      sm:text-lg
    "
          />

          {/* Category Row */}
          <div className="flex w-full max-w-md items-center justify-center gap-1.5 sm:gap-2">
            {/* Bubbles */}
            <div
              className={`
        flex flex-1
        min-w-0
        items-center justify-end
        gap-1
        flex-wrap
        transition-all duration-500
        sm:gap-1.5
        ${
          showCatg
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-5 opacity-0"
        }
      `}
            >
              {/* All */}
              <button
                onClick={() => SetSelectCatg("all")}
                className="
          shrink-0
          whitespace-nowrap
          rounded-full
          bg-white/20
          px-2 py-1
          text-[9px]
          font-semibold
          backdrop-blur-md
          transition duration-300
          hover:scale-105
          hover:bg-white/30
          active:scale-95
          sm:px-2.5 sm:py-1.5
          sm:text-[10px]
          md:px-3 md:py-1.5
          md:text-xs
        
        "
              >
                All
              </button>

              {/* Categories */}
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => SetSelectCatg(category)}
                  className="
                
            shrink-0
            whitespace-nowrap
            rounded-full
            bg-white/20
            px-2 py-1
            text-[9px]
            font-semibold
            backdrop-blur-md
            transition duration-300
            hover:scale-105
            hover:bg-white/30
            active:scale-95
            sm:px-2.5 sm:py-1.5
            sm:text-[10px]
            md:px-3 md:py-1.5
            md:text-xs
            shadow-2xl
          "
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Category Button */}
            <button
              onClick={() => SetShowCatg(!showCatg)}
              class="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300 shadow-2xl"
            >
              {selectCatg}
            </button>
          </div>
        </div>

      {/* Cards */}
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
  {filteredFoods.map((food) => (
    <motion.div
      key={food.id}
      initial={{
        opacity: 0,
        y: 80,
      
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <Card food={food} />
    </motion.div>
  ))}
</div>
      </section>
    </div>
  );
}
