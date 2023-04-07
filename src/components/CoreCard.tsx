import { type } from "os";
import React from "react";

type CoreCardProps = {
  id: number;
  heading: string;
  description: string;
};

const CoreCard = ({ id, heading, description }: CoreCardProps) => {
  return (
    <div className="relative grid grid-rows-2 gap-4 bg-white shadow-md rounded-md p-6 w-full mx-auto my-4 hover:scale-105 hover:duration-700 h-48">
      <div className="absolute top-0 left-0 text-gray-500 text-6xl font-bold opacity-10 pt-2 pl-2">
        {id}
      </div>
      <div className="row-span-1 flex flex-col">
        <h3 className="text-lg lg:text-xl font-semibold mb-2">{heading}</h3>
      </div>
      <div className="row-span-1">
        <p className="text-sm lg:text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CoreCard;
