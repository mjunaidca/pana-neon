import { BlackButton } from "@/components/Buttons";
import { DEVLAB } from "@/utlis/data";
import Image from "next/image";
import DeveloperProfileCard from "@/components/DeveloperProfileCard";
import { Developer } from "@/types";

const allDevs = async () => {
  const res = await fetch("http://localhost:3000/api/getdev", {
    next: { revalidate: 3 },
  });

  if (!res.ok) {
    throw new Error("failed to get Developer Data");
  }

  const data = await res.json();

  return data;
};

const DevLab = async () => {
  const developers: Developer[] = await allDevs();
  console.log(developers);
  const Approve_Dev = developers.filter((dev) => dev.is_approved === true);

  return (
    <div className="flex flex-col min-h-screen  justify-start items-center w-full  mt-16 ">
      <div className="flex flex-col justify-center items-center w-full py-8 space-y-6 text-center">
        <div>
          {" "}
          <h1> {DEVLAB.head} </h1>
        </div>
        <div className="pt-3">
          {" "}
          <h4> {DEVLAB.subHead} </h4>
        </div>
        <div>
          {" "}
          <BlackButton
            link="./login"
            key={DEVLAB.head}
            text={DEVLAB.btnText}
          />{" "}
        </div>
      </div>
      <div className="flex flex-wrap gap-6 bg-gray-50  items-stretch justify-center w-full border-black/50 rounded-sm  border-4 border-t-8 py-8 mt-8">
        {Approve_Dev.map((dev: Developer) => (
          <div
            key={dev.dev_id}
            className="flex flex-wrap mx-auto px-6 basis-full sm:px-0 sm:basis-1/3 md:basis-1/4 xl:basis-1/5 w-full items-stretch"
          >
            {
              <DeveloperProfileCard
                avatar={dev.image_url}
                name={dev.first_name + " " + dev.last_name}
                portfolioTitle={dev.profile_title}
                href={`./devlab/${dev.dev_id}`}
              />
            }
          </div>
        ))}
      </div>
      {/* <div className="flex flex-wrap gap-6 bg-blue-200  items-stretch justify-center w-full pt-8 mt-8">
        {developers.map((dev: Developer) => (
          <div
            key={dev.dev_id}
            className="flex flex-wrap mx-auto px-6 basis-full sm:px-0 sm:basis-1/3 md:basis-1/4 xl:basis-1/5 w-full items-stretch"
          >
            {
              <DeveloperProfileCard
                avatar="https://pbs.twimg.com/profile_images/1183639342956367877/71Sh5fhw_400x400.jpg"
                name={dev.first_name + " " + dev.last_name}
                portfolioTitle={dev.profile_title}
                href={dev.personal_website}
              />
            }
          </div>
        ))}
      </div> */}
      {/* <div className="flex flex-wrap">
        {developers
          .filter((dev: Developer) => dev.is_approved === true)
          .map((dev: Developer) => (
            <div
              key={dev.dev_id}
              className="flex mx-auto flex-wrap px-6 basis-full sm:px-0 sm:basis-1/3 md:basis-1/4 xl:basis-1/5"
            >
              <DeveloperProfileCard
                avatar="https://pbs.twimg.com/profile_images/1183639342956367877/71Sh5fhw_400x400.jpg"
                name={dev.first_name + " " + dev.last_name}
                portfolioTitle={dev.profile_title}
                href={dev.personal_website}
              />
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default DevLab;
