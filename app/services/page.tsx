import React from "react";
import CompatiblityGrid from '@/components/CompatiblityGrid'

type Props = {};

function page({}: Props) {
  return (
    <div>
      <section className=" bg-hero">
        <div className="flex flex-col  max-w-7xl mx-auto justify-center items-center py-24 md:py-28 lg:py-44">
          <p className=" text-gray-400  font-light text-sm pt-1">
            Services / Drut AI
          </p>
          <p className=" text-gray-400 font-semibold pb-1">
            Nothing Artificial , Just Applied Intelligence.{" "}
          </p>
          <h1 className=" font-bold text-7xl text-white pt-2">
            Solving today’s challenges while{" "}
          </h1>
          <h1 className=" font-bold text-7xl text-white pb-2">
            <span className="text-transparent  bg-clip-text  bg-gradient-to-b from-white via-cyan-400  to-[#1bdea7]">
              preparing for {`tomorrow's`}
            </span>
          </h1>
          <p className=" text-gray-400 py-4 text-center">
            {`Drut's worldwide renowned, cutting-edge support approach, which is
            focused on aggressively creating depth & breadth of expertise inside
            the core components of Data & AI success, which we refer to as
            "Foundational Components," is the foundation of the company's
            success.`}
          </p>
          <div className=" flex space-x-4 pt-8">
            <button className=" border-blue-500 px-7 hover:bg-gradient-to-b from-blue-400  to-blue-600 rounded-full py-3 text-white border-2">
              Explore Products
            </button>
            <button className="  px-7 rounded-full py-3 text-white bg-gray-800/20 underline">
              Book Free Demo
            </button>
          </div>
        </div>
      </section>
      <section className=" max-w-7xl mx-auto pb-4">
        <div className=" mx-auto max-w-7xl text-center py-12 md:py-16 lg:py-24 ">
          <h2 className=" text-4xl font-medium">All in on Deep Learning.</h2>
          <h2 className=" text-4xl pt-2  text-transparent  bg-clip-text  bg-gradient-to-r from-blue-500 via-cyan-500 to-lime-500 font-medium">
            Centers of Excellence
          </h2>
          <p className=" text-lg pt-4 max-w-4xl mx-auto text-black/80">
            {`Four top-notch Centers of Excellence support Drut Foundational Components, whose primary purpose is to act as a "lighthouse" for our Clients and our Foundational Components teams. This one-of-a-kind system of balancing makes sure that our employees and clients always have access to the most up-to-date understanding of the present while also being able to "look into the future" and make plans for the future.
        `}
          </p>
        </div>
        <div className=" grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 pb-12 lg:grid-cols-4">
          <div
            className=" h-[450px] flex justify-end bg-center flex-col p-9 relative rounded-2xl bg-no-repeat bg-cover"
            style={{
              backgroundImage: `URL('https://wallpaperaccess.com/full/5095850.jpg')`,
            }}
          >
            <div className=" bg-gradient-to-b absolute -top-2 from-white to-yellow-500 via-rose-500 max-w-max p-[2px] rounded-md">
              {" "}
              <div className=" rounded-md px-3 py-4 text-2xl font-bold bg-white">
                {" "}
                1
              </div>
            </div>
            <h1 className=" bg-white px-2 font-semibold text-xl ">
              Cloud & Data Engineering
            </h1>
          </div>
          <div
            className=" h-[450px] mt-12 flex justify-end bg-center flex-col p-9 relative rounded-2xl bg-no-repeat bg-cover"
            style={{
              backgroundImage: `URL('https://e1.pxfuel.com/desktop-wallpaper/846/423/desktop-wallpaper-business-people-50275-consulting.jpg')`,
            }}
          >
            <div className=" bg-gradient-to-b absolute -top-2 from-white to-yellow-500 via-rose-500 max-w-max p-[2px] rounded-md">
              {" "}
              <div className=" rounded-md px-3 py-4 text-2xl font-bold bg-white">
                {" "}
                2
              </div>
            </div>
            <h1 className=" bg-white px-2 font-semibold text-xl">
              Business Consulting
            </h1>
          </div>
          <div
            className=" h-[450px] flex justify-end bg-center flex-col p-9 relative rounded-2xl bg-no-repeat bg-cover"
            style={{
              backgroundImage: `URL('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5hbHl0aWNzfGVufDB8fDB8fHww&w=1000&q=80')`,
            }}
          >
            <div className=" bg-gradient-to-b absolute -top-2 from-white to-yellow-500 via-rose-500 max-w-max p-[2px] rounded-md">
              {" "}
              <div className=" rounded-md px-3 py-4 text-2xl font-bold bg-white">
                {" "}
                3
              </div>
            </div>
            <h1 className=" bg-white px-2 font-semibold text-xl">
              Analytics & Data Management
            </h1>
          </div>
          <div
            className=" h-[450px] mt-12 flex justify-end bg-center flex-col p-9 relative rounded-2xl bg-no-repeat bg-cover"
            style={{
              backgroundImage: `URL('https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/enterprise-service-management.jpeg?itok=j4bf4-X-')`,
            }}
          >
            <div className=" bg-gradient-to-b absolute -top-2 from-white to-yellow-500 via-rose-500 max-w-max p-[2px] rounded-md">
              {" "}
              <div className=" rounded-md px-3 py-4 text-2xl font-bold bg-white">
                {" "}
                4
              </div>
            </div>
            <h1 className=" bg-white px-2 font-semibold text-xl">
              Service Management
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-hero">
        <div className="max-w-7xl mx-auto">
        <CompatiblityGrid />
        </div>

      </section>
    </div>
  );
}

export default page;
