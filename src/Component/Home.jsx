import { Link } from "react-router-dom";
import foods from "../Data/Food.json";
import Card from "./Card";
import { motion } from "motion/react";

function Home() {
  const popularDishes = [...foods]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
  return (
    <div className="min-h-screen overflow-hidden bg-[#590101] text-white px-10 py-4">
      {/* ================= HERO ================= */}
      <section className="relative rounded-3xl min-h-screen bg-[radial-gradient(circle_at_70%_45%,#e51b1b,#a70709_45%,#650708_80%)] shadow-lg   shadow-black/65v">
        {/* Background decoration */}
        <div className="pointer-events-none absolute right-10 top-40 text-[180px] font-serif font-bold text-white/5">
          美
        </div>

        <div className="pointer-events-none absolute left-[45%] top-[30%] text-5xl text-white/10">
          ✦
        </div>

        {/* Hero container */}
        <div className="mx-auto grid min-h-screen w-[92%] max-w-7xl grid-cols-1 items-center gap-10 pt-24 lg:grid-cols-2 sm:grid-cols-2">
          {/* ============ LEFT ============ */}
          <div className="max-w-xl">
            <motion.div
              initial={{
                opacity: 0,
                x: 300,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
            >
              <p className="mb-4 text-xs font-semibold tracking-[4px] text-red-200">
                AUTHENTIC CHINESE CUISINE
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: -100,
                filter: "blur(20px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <h1 className="text-5xl font-black leading-[0.95] sm:text-6xl">
                Amazing
                <span className="block">Chinese Food</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 300,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
            >
              <p className="mt-6 max-w-md text-sm leading-6 text-white/60">
                Discover the rich and authentic flavors of China. Fresh
                ingredients, traditional recipes, unforgettable taste.
              </p>
            </motion.div>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-4"></div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-3 gap-5 border-t border-white/10 pt-6 pb-6">
              <div>
                <div className="mb-2">🚚</div>

                <h3 className="text-xs font-bold">Fast Delivery</h3>

                <p className="mt-1 text-[10px] text-white/40">On all orders</p>
              </div>

              <div>
                <div className="mb-2">🥢</div>

                <h3 className="text-xs font-bold">Authentic Taste</h3>

                <p className="mt-1 text-[10px] text-white/40">100% Original</p>
              </div>

              <div>
                <div className="mb-2">⭐</div>

                <h3 className="text-xs font-bold">Best Quality</h3>

                <p className="mt-1 text-[10px] text-white/40">
                  Premium ingredients
                </p>
              </div>
            </div>
          </div>

          {/* ============ RIGHT ============ */}

          <div className="relative flex items-center justify-center">
            {/* Glow */}
            <div className="absolute h-72 w-72 rounded-full bg-red-400/20 blur-3xl sm:h-96 sm:w-96" />

            {/* Image wrapper */}
            <div className="relative z-10 w-[70%] max-w-130">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 200,
                  filter: "blur(20px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80"
                  alt="Chinese food"
                  className="aspect-square w-full rounded-full object-cover shadow-2xl"
                />
              </motion.div>

              {/* 20% Badge */}
              <div className="absolute bottom-[8%] left-[-5%] flex h-20 w-20 flex-col items-center justify-center rounded-full border-4 border-red-300/30 bg-red-500 shadow-xl">
                <span className="text-xl font-black">20%</span>

                <span className="text-[9px] font-bold">OFF</span>
              </div>

              {/* Decoration */}
              <div className="absolute right-0 top-10 text-4xl">🌿</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POPULAR DISHES ================= */}
      <section
        id="menu"
        className="bg-[#650708] px-5 py-16 mt-5 sm:px-8 lg:px-12 rounded-3xl"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[3px] text-red-300">
                Our Menu
              </p>

              <motion.div
                initial={{
                  opacity: 0,
                  x: -80,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
              >
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Popular Dishes
                </h2>
              </motion.div>
            </div>

            <Link
              to="menu"
              className="flex items-center gap-2 text-xs text-yellow-200 hover:text-white animate-bounce"
            >
              View All →
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {popularDishes.map((food) => (
              <Card key={food.id} food={food}></Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
