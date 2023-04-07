import { OUTCOME } from "@/utlis/data";
import DesktopArrow from "@/assets/images/DesktopArrow.png";
import MobileArrow from "@/assets/images/MobileArrow.png";
import Image from "next/image";
const OutCome = () => {
  return (
    <div className="flex w-full items-center justify-start flex-col md:flex-row text-center space-x-3 space-y-8 pt-16">
      <div className="flex basis-1/3 w-full justify-center">
        <h2>{OUTCOME.head}</h2>
      </div>
      <div>
        <div className="md:flex hidden py-2 fill-slate-700/5">
          {" "}
          <Image src={DesktopArrow} alt="arrow" />
        </div>
        <div className="flex md:hidden py-2">
          <Image src={MobileArrow} alt="arrow" width={38} height={37} />
        </div>
      </div>
      <div className="flex basis-2/3 w-full">
        <p>{OUTCOME.description}</p>{" "}
      </div>
    </div>
  );
};

export default OutCome;
