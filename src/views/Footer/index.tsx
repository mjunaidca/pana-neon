import Image from "next/image";
import Link from "next/link";
import PanaLogo from "@/assets/images/pana-logo.png";
import { NAVBARITEMS } from "@/utlis/data";
import { BlackButton } from "@/components/Buttons";
import IconText from "@/components/IconText";
import { SOCIALMEDIA } from "@/utlis/data";

const Footer = () => {
  return (
    <div className="pt-8 text-white md:pt-22">
      <div className="flex flex-col w-full">
        <div>
          <div className="flex justify-around items-center flex-row">
            <div className="flex">
              <Link href="/">
                <Image
                  src={PanaLogo}
                  alt="panaverse logo"
                  height={250}
                  width={180}
                />
              </Link>
            </div>

            <div className="bg-gray-300 w-0.5 h-32 my-3 hidden md:block" />

            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col md:flex-row  ">
                {NAVBARITEMS.map((nav) => (
                  <div key={nav.label}>
                    <Link href={nav.href}>
                      <p className="p-2 flex text-xs justify-between  md:text-base font-medium text-gray-600 hover:text-red-500 md:font-bold">
                        {nav.label}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="flex flex-col">
                <div className="flex items-center py-2 space-x-6">
                  {SOCIALMEDIA.map((smc: any) => (
                    <div key={smc.name} className=" text-gray-700">
                      <IconText link={smc.link} Icon={smc.icon} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 h-0.5 w-full my-3" />

        <div className="flex justify-center items-center">
          <p className="text-xs md:text-sm">2023 © PANAVERSE DAO - Junaid</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
