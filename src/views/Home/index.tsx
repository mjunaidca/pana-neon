import { CoreCourses } from "./Sections/CoreCourses";
import HeroHead from "./Sections/HeroHead";
import Instructors from "./Sections/Instructors";
import NutShell from "./Sections/NutShell";
import OutCome from "./Sections/OutCome";

const Home = () => {
  return (
    <div>
      <HeroHead />
      <OutCome />
      <Instructors />
      <CoreCourses />
      <NutShell />
    </div>
  );
};

export default Home;
