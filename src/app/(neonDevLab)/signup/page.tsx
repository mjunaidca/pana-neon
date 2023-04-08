"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

let initData = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  gender: "",
  date_of_birth: "",
  profile_title: "",
  about_me: "",
  image_url: "",
  github_link: "",
  best_project_title: "",
  best_project_description: "",
  skills: "",
  personal_website: "",
  linkedin_url: "",
  is_approved: false,
};

const SignUp = () => {
  const [data, setData] = useState(initData);
  const router = useRouter();

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      first_name: e.target.value,
    });
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      last_name: e.target.value,
    });
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      email: e.target.value,
    });
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      password: e.target.value,
    });
  }

  function handleGenderChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      gender: e.target.value,
    });
  }

  function handleDateOfBirthChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      date_of_birth: e.target.value,
    });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("FORM SUBMISSION DATA", data);

    const signupRequest = await fetch("/api/postdev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!signupRequest.ok) {
      throw new Error("APIR ROUTE ERROR");
    }

    const result = await signupRequest.json();

    if (result) {
      console.log("Success, refirectinh yo the login page");

      router.push("/login");
    }

    console.log("SIGNUP Result From API route", result);
  };

  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign UP</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              value={data.first_name}
              onChange={handleFirstNameChange}
              placeholder="John Doe"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              value={data.last_name}
              onChange={handleLastNameChange}
              placeholder="John Doe"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              value={data.email}
              onChange={handleEmailChange}
              placeholder="John Doe"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handlePasswordChange}
              placeholder="********"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gender
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="gender"
              id="gender"
              name="gender"
              value={data.gender}
              onChange={handleGenderChange}
              placeholder="Male/Female"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date Of Birth
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="Date"
              id="Date"
              name="date"
              value={data.date_of_birth}
              onChange={handleDateOfBirthChange}
              placeholder="Date Of Birth"
            />
          </div>

          <button
            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
