import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <main>
        <section className=" bg-hero">
        <div className="flex flex-col  max-w-7xl mx-auto justify-center items-center py-24 md:py-28 lg:py-44">
          <p className=" text-gray-400 font-semibold pt-1">Drut AI</p>
          <p className=" text-gray-400 font-semibold pb-1">
            Nothing Artificial , Just Applied Intelligence.{" "}
          </p>
          <h1 className=" font-bold text-center text-7xl text-white pt-2">
          Our mission is to {" "}<br/>
            <span className="text-transparent  bg-clip-text text-7xl  bg-gradient-to-b from-white via-blue-400  to-blue-600">deliver cost-effective</span>
          </h1>
          <h1 className=" font-bold text-7xl text-white pb-2">
          and easily accessible {" "}<br/>
            <span className="text-transparent  bg-clip-text  bg-gradient-to-b from-white via-cyan-400  to-[#1bdea7]">Applied AI Solutions.</span>
          </h1>
          
          
        </div>
      </section>
    </main>
  )
}

export default page