import React from "react";

type Props = {};

function CustomSolution({}: Props) {
  return (
    <section className="p-8">
      <div className=" max-w-7xl mx-auto relative rounded-2xl shadow-lg shadow-cyan-400 bg-gradient-to-br from-indigo-400 via-blue-400 to-cyan-400">
        <div className=" flex p-8 justify-between items-center">
            <h1 className=" text-white font-semibold text-4xl ">Want a custom Solution ?</h1>
            <button className=" text-cyan-400 shadow shadow-white bg-white px-8 py-3 font-bold rounded-3xl">Contact US</button>

        </div>
      </div>
    </section>
  );
}

export default CustomSolution;
