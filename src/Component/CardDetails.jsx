import React from 'react'
import { useParams } from 'react-router-dom'
import foods from "../Data/Food.json";


export default function CardDetails() {
  const {id}=useParams();
    const dish = foods.find((food) => food.id == id);

 return (
  <div className="flex min-h-screen items-center justify-center bg-[#590101] px-5 py-10">
    <div className="relative flex w-full max-w-3xl items-center gap-5 rounded-3xl bg-[#85090b] p-4 mt-8 text-white shadow-2xl sm:gap-8 sm:p-6">

  
      {/* Image */}
      <div className="h-40 w-40 shrink-0 overflow-hidden rounded-2xl sm:h-64 sm:w-64">
        <img
          src={dish.image}
          alt={dish.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="min-w-0 flex-1">
        <p className="text-xs text-white/40">
          Chinese Cuisine
        </p>

        <h1 className="mt-2 text-xl font-bold sm:text-3xl">
          {dish.name}
        </h1>

        <p className="mt-4 text-xs leading-5 text-white/70 sm:text-sm sm:leading-6">
          {dish.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm text-yellow-400">
            ★ {dish.rating}
          </span>

          <span className="text-lg font-bold">
            $ {dish.price}
          </span>
        </div>

        {dish.spicy && (
          <p className="mt-4 text-sm">
            🌶️ Spicy
          </p>
        )}
      </div>

    </div>
  </div>
);
}
