"use client";
import React from "react";

const Home = () => {
  return (
    <>
      <h1
        className=" text-3xl font-black 
   text-primary-500 "
      >
        Welcome to the world of next js
      </h1>
      <button className="my-2 rounded-lg bg-blue-500 p-2  text-white hover:bg-blue-700 focus:outline-none focus:ring-blue-300  focus:active:bg-blue-800">
        Click me
      </button>

      <ul className="my-2 space-y-2">
        <li className="bg-white p-2 first:bg-yellow-100">ITEM 1</li>
        <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-300">
          ITEM 2
        </li>{" "}
        <li className="bg-white p-2 first:bg-yellow-100">ITEM 3</li>
      </ul>

      {/*  */}
      <div className=" m-10 rounded-lg bg-white px-6 py-8 shadow-xl   ring-1 ring-slate-900/5 dark:bg-black dark:shadow-md dark:ring-white/10">
        <h3 className="text-base font-medium  tracking-tight text-slate-900 dark:text-white">
          This is the Text Element
        </h3>

        <p className="dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est assumenda
          quod dolor vel, soluta numquam odio voluptates. Voluptatum eius,
          repellendus autem expedita exercitationem, porro ex necessitatibus,
          veritatis sed dicta reiciendis?
        </p>
        <button
          id="toggle-dark"
          className="
          mt-8 rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 "
          onClick={() => {
            document.body.classList.toggle("dark");
          }}
        >
          Toggle -dark mode
        </button>
        <div className="text-chesnut-300"> HELLO</div>
      </div>
    </>
  );
};

export default Home;
