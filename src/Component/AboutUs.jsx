import React from 'react'
import { motion } from "motion/react"


export default function AboutUs() {
  return (
    <div className='bg-red-900 min-h-screen'>
       <section className="min-h-screen bg-[#590101] px-5 py-20 text-center text-white">

       <motion.div
  initial={{
    opacity: 0,
    y: 80,
  
  }}
  animate={{
    opacity: 1,
    y: 0,
   
  }}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}
>

    {/* Chinese Flag Stars */}
<div className="relative mx-auto mb-8 h-20 w-24">

  {/* Big Star */}
  <span className="absolute left-0 top-3 text-6xl text-yellow-400">
    ★
  </span>

  {/* Small Stars */}
  <span className="absolute left-12 top-1 text-sm text-yellow-400">
    ★
  </span>

  <span className="absolute left-16 top-5 text-sm text-yellow-400">
    ★
  </span>

  <span className="absolute left-16 top-11 text-sm text-yellow-400">
    ★
  </span>

  <span className="absolute left-12 top-15 text-sm text-yellow-400">
    ★
  </span>

</div>

      {/* About Title */}
      <p className="text-3xl font-semibold tracking-widest text-yellow-400">
        关于我们
      </p>

      <p className="mt-2 text-sm text-white/60">
        About Us
      </p>

      <div className="mx-auto mt-4 h-0.5 w-16 bg-yellow-400" />

      {/* Main Heading */}
      <h1 className="mt-8 text-4xl font-bold sm:text-5xl">
        A Taste of Tradition
      </h1>

      <p className="mt-3 text-xl text-yellow-400">
        美味源自中国
      </p>

      <p className="text-sm text-white/50">
        Deliciousness Comes From China
      </p>

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
        Experience the rich flavors of Chinese cuisine, where tradition
        meets passion and every dish tells a story.
      </p>

      {/* Our Story */}
      <div className="mx-auto mt-14 max-w-3xl">

        <h2 className="text-2xl font-bold text-yellow-400">
          Our Story
        </h2>

        <p className="mt-2 text-xl">
          我们的故事
        </p>

        <p className="text-sm text-white/50">
          Our Story
        </p>

        <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
          Our restaurant was created with a passion for authentic Chinese
          cuisine. We bring together traditional recipes, fresh ingredients,
          and modern presentation to create dishes that are full of flavor.
        </p>

        <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
          From classic favorites to unique dishes, our goal is to give every
          guest a memorable dining experience and a true taste of China.
        </p>

      </div>

      {/* What We Believe */}
      <div className="mx-auto mt-14 max-w-4xl">

        <h2 className="text-2xl font-bold text-yellow-400">
          What We Believe
        </h2>

        <p className="mt-2 text-xl">
          我们的理念
        </p>

        <p className="text-sm text-white/50">
          Our Philosophy
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">

          {/* Card 1 */}
          <div className="rounded-2xl border border-yellow-400/20 bg-white/5 p-6">

            <h3 className="font-bold text-yellow-400">
              新鲜食材
            </h3>

            <p className="mt-1 text-xs text-white/50">
              Fresh Ingredients
            </p>

            <p className="mt-3 text-sm leading-6 text-white/60">
              We carefully select fresh ingredients to create delicious
              and high-quality dishes.
            </p>

          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-yellow-400/20 bg-white/5 p-6">

            <h3 className="font-bold text-yellow-400">
              传统食谱
            </h3>

            <p className="mt-1 text-xs text-white/50">
              Traditional Recipes
            </p>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Traditional recipes bring the authentic flavors of Chinese
              cuisine to your table.
            </p>

          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-yellow-400/20 bg-white/5 p-6">

            <h3 className="font-bold text-yellow-400">
              用心制作
            </h3>

            <p className="mt-1 text-xs text-white/50">
              Made With Passion
            </p>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Every dish is prepared with care, passion, and attention
              to detail.
            </p>

          </div>

        </div>
      </div>

      {/* Final Section */}
      <div className="mx-auto mt-16 max-w-2xl">

        <p className="text-2xl text-yellow-400">
          品味中国，享受美食
        </p>

        <p className="mt-2 text-sm text-white/50">
          Taste China, Enjoy Great Food
        </p>

        <h2 className="mt-4 text-2xl font-bold">
          Discover the Taste of China
        </h2>

        <p className="mt-4 text-sm leading-7 text-white/60">
          Join us and discover traditional flavors, carefully prepared
          dishes, and a dining experience inspired by the heart of China.
        </p>

      </div>

    
</motion.div>
      </section>
    </div>
  )
}
