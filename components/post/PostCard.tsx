import React from "react";
import * as FaIcons from "react-icons/fa";

interface Prop {
  post: any;
}

const PostCard: React.FC<Prop> = ({ post }) => {
  return (
    <div className="bg-gray-300 bg-opacity-25 w-80 lg:w-96 rounded-2xl ">
      <div>
        <img
          className="w-full rounded-2xl"
          src="assets/placeholder.png"
          alt="ff"
        />
      </div>
      <div className="p-4">
        <h2 className="text-white font-semibold">
          El futuro es hoy, estamos preparados ?
        </h2>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          itaque dolore, nemo incidunt cupiditate saepe distinctio dolor sed
          consequatur quae earum
        </p>
      </div>
      <div className='flex justify-end mr-3 mb-3' >
        <div className="bg-primary  w-10 h-10 rounded-full flex justify-center items-center ">
          <FaIcons.FaChevronRight className=" text-white w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
