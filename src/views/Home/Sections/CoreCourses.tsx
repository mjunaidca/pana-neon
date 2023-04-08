import { Q1Q3, Q1Q3Circle } from "@/components/CoreCard";
import { CORECOURSES } from "@/utlis/data";
export const CoreCourses = () => {
  return (
    <div className="flex w-full items-center justify-center flex-col text-center px-6 space-y-12 mt-16 py-16">
      <div className="space-y-8 px-6 sm:px-8 md:px-12 lg:px-32 ">
        <div>
          <h2>{CORECOURSES.head}</h2>
        </div>
        <div>
          <p>{CORECOURSES.description}</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row gap-6 mx-10 sm:mx-16 md:mx-4  ">
          {CORECOURSES.coreQuarters.map((quarter) => (
            <div
              key={quarter.id}
              className="flex flex-col md:flex-row md:basis-1/3 w-full px-3"
            >
              {/* <Q1Q3
                heading={quarter.label}
                description={quarter.details}
                id={quarter.id}
              /> */}
              <Q1Q3Circle
                details={quarter.details}
                quarter={quarter.label}
                key={quarter.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
