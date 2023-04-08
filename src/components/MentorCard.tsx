import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  url: string;
}

// const MentorCard = ({ name, url }: Props) => {
//   return (
//     <div>
//       <div className="items-center w-full justify-center flex flex-col space-y-3 bg-red-200">
//         <div>
//           <Image
//             alt={name}
//             src={url}
//             className="inline-block rounded-full ring-2 ring-white"
//             height={100}
//             width={100}
//           />
//         </div>
//         <div>
//           {" "}
//           <h4>{name}</h4>{" "}
//         </div>
//       </div>
//     </div>
//   );
// };

const MentorCard = ({ name, url }: Props) => {
  return (
    <div className=" bg-gray-50 ring-4 ring-red-700/80 shadow-lg rounded-lg overflow-hidden mx-20 sm:mx-16 md:mx-4 w-full md:w-60 my-4">
      <div className="relative h-32 md:h-40 w-full flex items-center justify-center p-4">
        <Image
          alt={name}
          src={url}
          className="rounded-full ring-4 ring-white"
          height={120}
          width={120}
        />
      </div>
      <div className="p-4 flex justify-center">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default MentorCard;
