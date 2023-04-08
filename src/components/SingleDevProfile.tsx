import Image from "next/image";
import { Developer } from "@/types";

type DeveloperProfileProps = {
  developer: Developer;
};

export const SingleDevProfile: React.FC<DeveloperProfileProps> = ({
  developer,
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="md:w-1/3 md:pr-8 mb-8 md:mb-0">
        <Image
          src={developer.image_url}
          alt={`${developer.first_name} ${developer.last_name}`}
          className="rounded-full w-40 h-40 object-cover object-center mx-auto md:mx-0"
          width={160}
          height={160}
        />

        <h2 className="text-2xl font-medium my-4 text-center md:text-left">
          {developer.first_name} {developer.last_name}
        </h2>
        <div className="flex justify-center md:justify-start">
          {developer.github_link && (
            <a
              href={developer.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl mx-2 hover:underline"
            >
              Github
            </a>
          )}
          {developer.linkedin_url && (
            <a
              href={developer.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl mx-2 hover:underline"
            >
              LinkedIn
            </a>
          )}
          {developer.personal_website && (
            <a
              href={developer.personal_website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl mx-2 hover:underline"
            >
              Website
            </a>
          )}
        </div>
      </div>
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold mb-4">{developer.profile_title}</h2>
        <div className="flex flex-wrap mb-4">
          <span className="px-2 py-1 rounded-full bg-gray-200 text-gray-800 mr-2 mb-2">
            {developer.skills}
          </span>
        </div>
        <p className="text-lg mb-4">{developer.about_me}</p>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">
            Best Project: {developer.best_project_title}
          </h3>
          <p className="text-lg">{developer.best_project_description}</p>
        </div>
      </div>
    </div>
  );
};
