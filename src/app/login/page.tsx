"use client";

import { useState, ChangeEvent, FormEvent } from "react";

const Login = () => {
  const [data, setData] = useState({ name: "", password: "" });

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      name: e.target.value,
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
    const { name, password } = data;

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });

    if (!res.ok) {
      throw new Error("APIR ROUTE ERROR");
    }

    const result = await res.json();

    console.log("Result From API route", result);
  };

  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Get Details</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleNameChange}
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
            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
      ;
    </div>
  );
};

export default Login;
