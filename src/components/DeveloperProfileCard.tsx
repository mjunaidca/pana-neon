// components/DeveloperProfileCard.tsx

import React from "react";
import Image from "next/image";
import { RingButton } from "./Buttons";

interface DevCardProps {
  avatar: string;
  name: string;
  portfolioTitle: string;
  href: string;
}

const DeveloperProfileCard: React.FC<DevCardProps> = ({
  avatar,
  name,
  portfolioTitle,
  href,
}) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg w-full h-full">
      <div className="w-24 h-24 mb-4 rounded-full overflow-hidden relative flex-shrink-0">
        <Image
          src={avatar}
          alt="Avatar"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 flex-grow">{name}</h3>
      <p className="text-base text-gray-600 mb-4 flex-grow">{portfolioTitle}</p>
      {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-200 flex-shrink-0">
        View Profile
      </button> */}
      <RingButton link={href} text="View Profile" />
    </div>
  );
};

export default DeveloperProfileCard;
