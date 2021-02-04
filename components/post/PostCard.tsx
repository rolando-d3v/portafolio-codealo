import React from "react";

export default function PostCard() {
  return (
    <div className="bg-gray-300 bg-opacity-25 w-80 rounded-t-2xl ">
      <img className="w-full rounded-2xl" src="assets/placeholder.png" alt="" />
      <div className='p-4' >
        <h2 className="text-white">El futuro es hoy, estamos preparados ?</h2>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          itaque dolore, nemo incidunt cupiditate saepe distinctio dolor sed
          consequatur quae earum
        </p>
      </div>
    </div>
  );
}
