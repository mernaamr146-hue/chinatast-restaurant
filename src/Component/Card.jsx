import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({food}) {
  return (
   <Link to={`/dish/${food.id}`}>
     <div>
              <div
                key={food.name}
                className="group rounded-2xl bg-[#85090b] p-2 transition duration-300 hover:-translate-y-2 shadow-2xl text-cyan-50"
              >

                {/* Image */}
                <div className="relative overflow-hidden rounded-xl">
                                  {food.spicy&&<div className='absolute top-0 left-0 bg-white text-2xl z-20 p-3 rounded-full'>🌶️</div>}


                  <img
                    src={food.image}
                    alt={food.name}
                    className="aspect-[1.2] w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                 

                </div>


                {/* Card info */}
                <div className="px-2 pb-3 pt-3">

                  <p className="text-[9px] text-white/40">
                    Chinese Cuisine
                  </p>

                  <h3 className="mt-1 text-sm font-bold">
                    {food.name}
                  </h3>

                  <div className="mt-2 flex items-center justify-between">

                    <span className="text-xs text-yellow-400">
                      ★ {food.rating}
                    </span>

                    <span className="text-sm font-bold">
                     $ {food.price}
                    </span>

                  </div>
                </div>

              </div>
            

          
    </div>
   </Link>
  )
}
