import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  link: string;
  textSize?: string;
}
export const BlackButton = ({ text, link, textSize }: ButtonProps) => {
  return (
    <Link href={link}>
      <div
        className={` font-medium px-4 py-1.5 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:ring-black hover:ring-1 hover:font-medium ${textSize}`}
      >
        {text}
      </div>
    </Link>
  );
};

export const RingButton = ({ text, link, textSize }: ButtonProps) => {
  return (
    <Link href={link}>
      <div
        className={` font-normal px-4 py-1.5 rounded-lg  hover:text-black hover:ring-black ring-gray-300 ring-1 ${textSize}`}
      >
        {text}
      </div>
    </Link>
  );
};
