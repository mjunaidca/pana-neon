import CoreCard from "@/components/CoreCard";
import { CORECOURSES } from "@/utlis/data";
export const CoreCourses = () => {
  return (
    <div className="flex w-full items-center justify-center flex-col text-center px-6  space-y-12 mt-16 pt-16">
      <div className="space-y-8 px-6 sm:px-8 md:px-12 lg:px-32">
        <h2>{CORECOURSES.head}</h2>
        <p>{CORECOURSES.description}</p>
      </div>
      <div>
        <div className="flex flex-col md:flex-row gap-6 ">
          {CORECOURSES.coreQuarters.map((quarter) => (
            <div
              key={quarter.id}
              className="flex flex-col md:flex-row md:basis-1/3 w-full"
            >
              <CoreCard
                id={quarter.id}
                heading={quarter.label}
                description={quarter.details}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
