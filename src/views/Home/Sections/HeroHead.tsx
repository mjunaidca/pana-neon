import { HEADER, HEADERDESCRTIPTION } from "@/utlis/data";
import { BlackButton, RingButton } from "@/components/Buttons";
import Image from "next/image";
import Avatar from "@/assets/images/Avatar.png";
const HeroHead = () => {
  return (
    <div className="">
      <div className="  my-16 sm:my-24 lg:my-28 border-dotted border-x-2 border-gray-200 flex flex-col items-center max-w-7xl">
        <div className="border-dotted border-y-2 w-full border-gray-200 m-10 flex justify-center text-center px-3 sm:px-0 py-7">
          <h1>{HEADER}</h1>
        </div>
        <div className="border-dotted border-b-2 w-full border-gray-200 text-center flex justify-center px-4 py-3 pb-10">
          <h4>{HEADERDESCRTIPTION}</h4>
        </div>
        <div className="border-dotted border-b-2 w-full border-gray-200 flex justify-center flex-col basis-1/3 md:flex-row">
          <div className="border-dotted border-r-2 w-full flex justify-center pt-2 ">
            {" "}
            {/* <Image
              alt="Metaverse Developer"
              src={Avatar}
              className="sm:w-1/2 w-1/3"
            />{" "} */}
          </div>
          <div className="border-dotted border-r-2 w-full flex  justify-center gap-8 text-lg lg:text-xl pt-12 pb-14">
            <div>
              {" "}
              <BlackButton link="/" text="Apply Now" />{" "}
            </div>
            <div>
              {" "}
              <RingButton link="/" text="Dev Lab" />{" "}
            </div>
          </div>
          <div className="w-full "></div>
        </div>
      </div>
    </div>
  );
};

export default HeroHead;
