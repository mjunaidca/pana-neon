import MentorCard from "@/components/MentorCard";
import { INSTRUCTORS } from "@/utlis/data";

const Instructors = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center space-y-12 mt-32 ">
      <div>
        <h2>{INSTRUCTORS.head} </h2>
      </div>
      <div className="flex flex-wrap justify-around  basis-1/4  w-full">
        {INSTRUCTORS.mentors.map((mentor: any) => (
          <div key={mentor.id}>
            <MentorCard name={mentor.name} url={mentor.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
