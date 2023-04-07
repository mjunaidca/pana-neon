import PanaLogo from "@/assets/images/pana-logo.png";
import { NAVBARITEMS } from "@/utlis/data";
import Image from "next/image";
import Link from "next/link";
import { NavBarItem } from "@/types";
import { BlackButton, RingButton } from "@/components/Buttons";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center max-h-20 h-full border-b-2 border-b-gray-100 py-2 sticky">
      <div className="flex space-x-12 md:space-x-20 items-center">
        <Link href="/">
          <Image src={PanaLogo} alt="Pana Logo" className="object-cover w-32" />
        </Link>
        <div className="flex space-x-8 md:space-x-10 text-gray-600 font-medium text-base ">
          {NAVBARITEMS.map((item: NavBarItem) => (
            <div key={item.label} className="hover:text-gray-900 ">
              <Link href={item.href}>{item.label}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center text-base space-x-6">
        <div>
          <RingButton text="Developers" link="/" />
        </div>
        <div>
          <BlackButton text="Apply" link="/" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
