import React from "react";
import d1 from "@/assets/OneSimplifiedProcess/dlvenn.svg";
import h1 from "@/assets/hubs/1.png";
import h2 from "@/assets/hubs/2.png";
import {
  BoltIcon,
  BellAlertIcon,
  ChartPieIcon,
} from "@heroicons/react/20/solid";

type Props = {};

function page({}: Props) {
  return (
    <main className=" flex-grow">
      <section className=" bg-hero">
        <div className="flex flex-col  max-w-7xl mx-auto justify-center items-center py-24 md:py-28 lg:py-44">
          <p className=" text-gray-400  font-light text-sm pt-1">
            Technology / Drut AI
          </p>
          <p className=" text-gray-400 font-semibold pb-1">
            Nothing Artificial , Just Applied Intelligence.{" "}
          </p>
          <h1 className=" font-bold text-7xl text-white pt-2">
            AI Excellence{" "}
            <span className="text-transparent  bg-clip-text  bg-gradient-to-b from-white via-blue-400  to-blue-600">
              Beyond Imagination
            </span>
          </h1>
          <h1 className=" font-bold text-7xl text-white pb-2">
            Anticipate{" "}
            <span className="text-transparent  bg-clip-text  bg-gradient-to-b from-white via-cyan-400  to-[#1bdea7]">
              Transform, Excel!
            </span>
          </h1>
          <p className=" text-gray-400 py-4 text-center">
            We <span className="text-white">leverage data</span> and bleeding
            edge AI to enable <span className="text-white">SMART™️er</span>{" "}
            decision making for you. We combine{" "}
            <span className="text-white">
              cloud, big data, ML models, and domain experience
            </span>{" "}
            to ensure successful outcomes, predictable delivery, and
            <span className="text-white"> guaranteed ROI</span>
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
      <section>
        <div className=" mx-auto max-w-7xl text-center py-12 md:py-16 lg:py-24 ">
          <h2 className=" text-4xl font-medium">All in on Deep Learning.</h2>
          <h2 className=" text-4xl pt-2  text-transparent  bg-clip-text  bg-gradient-to-r from-blue-500 via-cyan-500 to-lime-500 font-medium">
            Ahead of the competition
          </h2>
          <p className=" text-lg pt-4 max-w-2xl mx-auto text-black/80">
            In 2020, Drut became the first significant DSP to use Deep Learning
            algorithms throughout all of its technology, offering our clients an
            immediate competitive advantage and assisting them in budget
            optimisation.
          </p>

          <div className=" grid grid-cols-1 lg:flex py-8 ">
            <div className=" flex flex-col justify-center ">
              <p className=" max-w-xs lg:text-left mx-auto text-black/80">
                A more advanced form of AI, which can learn from repeated
                patterns and improve over time, though still requires human
                programming to develop
              </p>
            </div>
            <div>
              <img src={d1.src} alt="" />
            </div>
            <div className=" flex flex-col justify-around ">
              <p className=" max-w-xs lg:text-left mx-auto text-black/80">
                Computer systems which can interpret context from data and make
                basic decisions
              </p>
              <p className=" max-w-xs lg:text-left mx-auto text-black/80">
                The most advanced form of AI technology. A fully self-improving
                system with extreme power which can leverage even unstructured
                and complex data
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-hero">
        <div className=" max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className={` py-24  `}>
            <p className=" text-gray-300/80  tracking-wide font-bold">
              Innovations
            </p>
            <h1 className=" text-white font-medium text-5xl pt-7">
              Innovations from the Drut Labs
            </h1>
            <p className=" text-transparent font-medium text-5xl pb-4  bg-clip-text bg-gradient-to-b from-cyan-400  to-blue-600">
              Drut Data & AI Console
            </p>
            <p className=" text-md text-gray-300 max-w-3xl">
              With an eye on the future, we design and build products inspired
              by modern social needs, creating solutions and Insights that your
              users actually want to engage with again and again.
            </p>
            <p className=" text-xl font-medium text-white pt-12 ">
              Data and Artificial Intelligence Services{" "}
            </p>
            <p className=" max-w-3xl text-gray-300 text-sm pt-4">
              Unlocking value from data and AI faster to help you scale and
              transform your digital business
            </p>
            <img
              src="https://images.unsplash.com/photo-1564325724739-bae0bd08762c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80&h=640"
              className=" pt-5  h-56 object-center w-full max-w-3xl object-bottom object-cover"
              alt=""
            />
            <p className=" text-xl font-medium text-white pt-12 ">
              Data Modernization Services{" "}
            </p>
            <p className=" max-w-3xl text-sm pt-4 text-gray-300">
              Make your data more valuable and create advanced data products for
              intelligent business decisions with the transformative powers of
              modernized data architecture in the cloud.
            </p>
            <img
              src="https://img1.wallspic.com/previews/8/3/6/8/3/138638/138638-red_and_white_bokeh_lights-x750.jpg"
              className=" pt-5  h-56 object-center w-full max-w-3xl object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className=" max-w-7xl mx-auto py-24">
        <p className="  tracking-wide font-bold pb-6">Hubs</p>
        <h1 className=" font-medium text-4xl">
          Drut.ai maintains open-for-all ,
        </h1>
        <p className=" text-transparent font-medium text-5xl  bg-clip-text bg-gradient-to-b from-cyan-400  to-blue-600">
          Data <span className="text-black">&</span> Model hubs
        </p>
        <div className=" grid grid-cols-2 gap-8 my-12">
          <div className=" bg-[#021321] flex flex-col justify-center px-12 py-28 rounded-2xl  overflow-clip  relative">
            <img src={h2.src} className=" absolute -top-20 -right-20" />
            <div className="">
              <span className="text-transparent  bg-clip-text   bg-gradient-to-b from-white via-blue-400  to-blue-600 text-4xl font-extrabold">
                Data Hub
              </span>
              <div className="flex py-6">
                <div>
                  <BoltIcon className="h-4 w-4 text-gray-100 mt-1 mr-1 " />
                </div>
                <div>
                  <h1 className="text-white font-bold">Solutions for</h1>
                  <p className=" text-sm text-gray-300">
                    BGKVuoiopkjoihoguifyudtbknhgLor uvblsk kvh phegcfuihofwug{" "}
                  </p>
                </div>
              </div>
              <div className="flex py-4">
                <div>
                  <BellAlertIcon className="h-4 w-4 text-gray-100 mt-1 mr-1 " />
                </div>
                <div>
                  <h1 className="text-white font-bold">Solutions for</h1>
                  <p className=" text-sm text-gray-300">
                    BGKVuoiopkjoihoguifyudtbknhgLor uvblsk kvh phegcfuihofwug{" "}
                  </p>
                </div>
              </div>
              <div className="flex py-4">
                <div>
                  <ChartPieIcon className="h-4 w-4 text-gray-100 mt-1 mr-1 " />
                </div>
                <div>
                  <h1 className="text-white font-bold">Solutions for</h1>
                  <p className=" text-sm text-gray-300">
                    BGKVuoiopkjoihoguifyudtbknhgLor uvblsk kvh phegcfuihofwug{" "}
                  </p>
                </div>
              </div>
            </div>
            <button className=" mt-6 absolute bottom-8 border-blue-500 px-7 hover:bg-gradient-to-b from-blue-400  to-blue-600 rounded-full py-3 text-white border-2" >Explore</button>
          </div>
          <div className=" bg-[#050a12] flex flex-col justify-center px-12 py-28 rounded-2xl  overflow-clip  relative">
            <img src={h1.src} className=" absolute animate-spin opacity-80 -top-20 -right-20" />
            <div className="">
              <span className="text-transparent  bg-clip-text   bg-gradient-to-b from-white via-cyan-400  to-lime-600 text-4xl font-extrabold">
                Model Hub
              </span>
              <div className="flex py-6">
                <div>
                  <BoltIcon className="h-4 w-4 text-gray-100 mt-1 mr-1 " />
                </div>
                <div>
                  <h1 className="text-white font-bold">Solutions for</h1>
                  <p className=" text-sm text-gray-300">
                    BGKVuoiopkjoihoguifyudtbknhgLor uvblsk kvh phegcfuihofwug{" "}
                  </p>
                </div>
              </div>
              <div className="flex py-4">
                <div>
                  <BellAlertIcon className="h-4 w-4 text-gray-100 mt-1 mr-1 " />
                </div>
                <div>
                  <h1 className="text-white font-bold">Solutions for</h1>
                  <p className=" text-sm text-gray-300">
                    BGKVuoiopkjoihoguifyudtbknhgLor uvblsk kvh phegcfuihofwug{" "}
                  </p>
                </div>
              </div>
              <div className="flex py-4">
                <div>
                  <ChartPieIcon className="h-4 w-4 text-gray-100 mt-1 mr-1 " />
                </div>
                <div>
                  <h1 className="text-white font-bold">Solutions for</h1>
                  <p className=" text-sm text-gray-300">
                    BGKVuoiopkjoihoguifyudtbknhgLor uvblsk kvh phegcfuihofwug{" "}
                  </p>
                </div>
              </div>
            </div>
            <button className=" mt-6 absolute bottom-8 border-cyan-500 px-7 hover:bg-gradient-to-b from-cyan-400  to-cyan-600 rounded-full py-3 text-white border-2" >Explore</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
