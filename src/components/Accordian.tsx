"use client";
import { useState } from "react";

const Accordion = ({ title, content }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md mb-2">
      <div
        className="flex justify-between items-center cursor-pointer px-4 py-2 transition-colors hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3
          className={`text-lg font-medium ${
            isOpen ? "border-l-4 border-red-500 pl-2" : ""
          }`}
        >
          {title}
        </h3>
        <svg
          className={`w-6 h-6 transition-transform duration-300 transform ${
            isOpen ? "rotate-180" : "-rotate-90"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </div>
      {isOpen && (
        <div className="px-4 py-2">
          <p className="text-left text-base">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
