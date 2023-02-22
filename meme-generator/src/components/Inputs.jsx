import React from "react";
import Image from "./Image";
import memesData from "../memesData";

const Inputs = () => {
  function getData() {
    console.log(memesData.data.memes[Math.floor(Math.random() * 100)].name);
  }

  return (
    <div>
      <div className="grid mx-auto grid-cols-2 gap-4 mt-4 mb-2">
        <input
          type="text"
          placeholder="Shut up"
          class="mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
        />
        <input
          type="text"
          placeholder="and take my money"
          class="mt-1  blockpx-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
        />
        <button
          onClick={getData}
          class=" col-span-2 mx-auto
      w-[100%] py-2 text-white font-medium rounded-md max-w-2xl my-2
      bg-gradient-to-r from-[#672280] to-[#A626D3] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..."
        >
          Get a new meme image
        </button>
      </div>

      <Image />
    </div>
  );
};

export default Inputs;
