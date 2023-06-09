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
  is_approved: null,
};

const Login = () => {
  const [data, setData] = useState(initData);
  const router = useRouter();

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("FORM SUBMISSION DATA", data);
    const { email, password } = data;

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("APIR ROUTE ERROR To LOGIN");
    }

    const result = await res.json();

    if (result) {
      console.log(result[0].dev_id);
    }

    router.push(`/edit/${result[0].dev_id}`);

    console.log("Result From API route", result);
  };

  return (
    <div>
      <div className="container mx-auto py-8 min-h-screen justify-center items-center my-16">
        <h1 className="text-2xl font-bold mb-6 text-center">Developer Login</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        >
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

          <button
            className="w-full bg-gray-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      ;
    </div>
  );
};

export default Login;
