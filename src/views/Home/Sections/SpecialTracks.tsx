import { SPECIALTRACKS } from "@/utlis/data";
import Accordion from "@/components/Accordian";
import Scroll from "@/assets/images/Scroll.png";
import Image from "next/image";

const SpecialTracks = () => {
  return (
    <div className="flex w-full items-center justify-center flex-col text-center px-6 space-y-12 mt-16 py-16">
      {/* <Image src={Scroll} alt="Scroll" /> */}
      <div className="space-y-8 px-6 sm:px-8 md:px-12 lg:px-32 ">
        <div>
          <h2>{SPECIALTRACKS.head}</h2>
        </div>
        <div>
          <p>{SPECIALTRACKS.description}</p>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex basis-1/5 w-full">
          <Image
            src={Scroll}
            alt="Scroll"
            className="object-contain h-full w-full"
          />
        </div>
        <div className="flex basis-4/5 w-full">
          <div className="max-w-xl w-full mx-auto">
            {SPECIALTRACKS.specialTracks.map((track) => (
              <Accordion
                title={track.Title}
                key={track.id}
                content={track.details}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialTracks;
