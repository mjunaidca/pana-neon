"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

let initData: Partial<Developer> = {};

interface Developer {
  date_of_birth: string;
  profile_title: string;
  about_me: string;
  image_url: string;
  github_link: string;
  best_project_title: string;
  best_project_description: string;
  skills: string;
  personal_website: string;
  linkedin_url: string;
}

const EditorProfile = ({ params }: { params: { dev_id: any } }) => {
  const id = params.dev_id;
  console.log(id);

  const router = useRouter();

  const [data, setData] = useState<Partial<Developer>>(initData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("FORM SUBMISSION DATA", data);

    const Submission = await fetch(`/api/patchdev/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (Submission.ok) {
      console.log("Profile updated successfully");
      router.push(`./devlab/${id}`);
    } else {
      console.log("An error occurred while updating the profile");
    }

    const SubmissionResponse = await Submission.json();

    console.log("Submission Result From API route", SubmissionResponse);
  };

  return (
    <div className="container  mx-auto py-8 min-h-screen my-16 ">
      <h1 className="text-2xl font-bold mb-6 text-center">Edit Profile</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg  mx-auto bg-white p-8 rounded-md shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Profile Title
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            name="profile_title"
            value={data.profile_title || ""}
            onChange={handleInputChange}
            placeholder="Full Stack Developer"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            About Me
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="textarea"
            name="about_me"
            value={data.about_me || ""}
            onChange={handleInputChange}
            placeholder="Add a short bio about yourself"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Best Project Title
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            name="best_project_title"
            value={data.best_project_title || ""}
            onChange={handleInputChange}
            placeholder="What is your best project?"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Best Project Description
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            name="best_project_description"
            value={data.best_project_description || ""}
            onChange={handleInputChange}
            placeholder="Add details about your project"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Skills
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            name="skills"
            value={data.skills || ""}
            onChange={handleInputChange}
            placeholder="Share your skillset"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Profile Image
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="url"
            name="image_url"
            value={data.image_url || ""}
            onChange={handleInputChange}
            placeholder="Add your image url from any smc platform or cloud"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            GitHub Link
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="url"
            name="github_link"
            value={data.github_link || ""}
            onChange={handleInputChange}
            placeholder="Share your GitHub Link"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            LinkedIn Link
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="url"
            name="linkedin_url"
            value={data.linkedin_url || ""}
            onChange={handleInputChange}
            placeholder="Share your LinkedIn URL"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Personal Website
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="url"
            name="personal_website"
            value={data.personal_website || ""}
            onChange={handleInputChange}
            placeholder="Share your Portfolio/Website Link"
          />
        </div>

        <button
          className="w-full bg-gray-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
          type="submit"
        >
          Save Changes
        </button>
      </form>
      <p className="text-xs text-gray-500 text-center mt-4">
        Your profile will appear on DevLab after admin approval. Meanwhile, you
        can log in and edit your profile.
      </p>
    </div>
  );
};

export default EditorProfile;
