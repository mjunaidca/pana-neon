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

import Image from "next/image";

interface Props {
  quarter: string;
  details: string;
}

export function Q1Q3Circle({ quarter, details }: Props) {
  return (
    <div className="space-y-6 relative flex flex-col justify-start items-center w-full ">
      <div className="flex justify-center md:justify-between my-6">
        <div className="bg-red-700/80 rounded-full w-44 h-44 lg:w-56 lg:h-56">
          <div className="bg-gray-100 rounded-full w-40 h-40 lg:w-52 lg:h-52 m-2">
            <div className="flex items-center justify-center h-full px-3">
              <h2>{quarter}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full px-4">
        <p>{details}</p>
      </div>
    </div>
  );
}

export function Q1Q3({ heading, description, id }: any) {
  return (
    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="absolute top-0 left-0 text-gray-500 text-6xl font-bold opacity-10 pt-2 pl-2">
          {id}
        </div>
        <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-red-900 dark:bg-red-800">
          <svg
            className="w-6 h-6 text-red-600 dark:text-red-400"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          ></svg>
        </div>
        <div className="flex-shrink-0">
          <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
            {heading}
          </h3>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
