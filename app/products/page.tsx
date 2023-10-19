import React from "react";
import video from "@/assets/hero-video.gif";
import CustomSolution from "@/components/CustomSolution";
import commingsoon from '@/assets/commingsoon.jpg'

type Props = {};

function page({}: Props) {
  return (
    <main>
      <section className=" bg-hero">
        <div className="flex flex-col  max-w-7xl mx-auto justify-center items-center py-24 md:py-28 lg:py-44">
          <p className=" text-gray-400 font-semibold pt-1">
            Products / Drut AI
          </p>
          <p className=" text-gray-400 font-semibold pb-1">
            Nothing Artificial , Just Applied Intelligence.{" "}
          </p>
          <h1 className=" font-bold text-7xl text-white pt-2">
            Our{" "}
            <span className="text-transparent  bg-clip-text  bg-gradient-to-b from-white via-blue-400  to-blue-600">
              Products
            </span>
          </h1>

          <p className=" text-gray-400 py-4 text-center">
            We offer a wide range of products that are designed to help you in
            countless ways. See which solution is best for you.
          </p>
          <div className=" flex space-x-4 pt-8">
            <button className=" border-blue-500 px-7 hover:bg-gradient-to-b from-blue-400  to-blue-600 rounded-full py-3 text-white border-2">
              Request Custom Solution
            </button>
            <button className="  px-7 rounded-full py-3 text-white bg-gray-800/20 underline">
              Book Free Demo
            </button>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className=" max-w-7xl mx-auto flex flex-col justify-center  items-center py-24 ">
          <p>Portfolio</p>
          <h1 className=" font-semibold text-white text-6xl text-center pt-2">
            Some of our Speciality
            <br />
            <span className="text-transparent  bg-clip-text  bg-gradient-to-b from-cyan-400  to-blue-500">
              {" "}
              Integrations
            </span>
          </h1>
          <p className=" text-gray-300 py-4 max-w-3xl text-center pb-16">
            Fast delivered cutting edge integrations that suits your buisness
            your business needs, enabling seamless and efficient operations to
            stay ahead of the competition.
          </p>

          <img src={video.src} />
        </div>
      </section>
      <section>
        <div className="flex flex-col  max-w-7xl mx-auto justify-center items-center py-24 ">
          <p>Portfolio</p>
          <h1 className=" font-semibold text-6xl text-center pt-2">
            Products & Brands
            <br />
            <span className="text-transparent  bg-clip-text  bg-gradient-to-b from-cyan-400  to-blue-500">
              Built In House
            </span>
          </h1>
          <p className=" text-gray-800 py-4 max-w-3xl text-2xl text-center pb-16">
            Crafted with Precision, Powered by Innovation
          </p>

          <div className="max-w-7xl mx-auto bg-yellow-50 rounded-xl px-4 sm:px-6 lg:px-8 mt-6 py-12 lg:py-24">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div>
                  <div className=" rounded-lg bg-gray-100 mb-4">
                    <img
                      src="https://i.ibb.co/QdThsBM/Shoddh.png"
                      className="h-64 md:h-80 w-full object-cover rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                    />
                  </div>

                  <div className="flex -mx-2 mb-4"></div>
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                  Blogging Platform for the community around Artificial
                  Intelligence
                </h2>
                <p className="text-gray-500 text-sm">
                  By{" "}
                  <a href="#" className="text-indigo-600 hover:underline">
                    Drut.ai
                  </a>
                </p>

                <div className="flex items-center space-x-4 my-4">
                  <div className="flex-1">
                    <p className="text-rose-500 text-xl font-semibold">
                      Closed Beta | Invite Only
                    </p>
                    <p className="text-gray-400 text-sm">
                      Open Beta comming Soon
                    </p>
                  </div>
                </div>

                <p className="text-gray-500">{`Discover our AI Community Blogging Platform—a central hub for AI enthusiasts. Whether you're a seasoned expert or just starting out, this platform offers valuable insights, networking, and collaborative opportunities. Join us in shaping the future of AI knowledge sharing and connections.`}</p>

                <div className="flex py-4 space-x-4">
                  <a
                    href="https://www.shoddh.com"
                    type="button"
                    className=" px-6 py-4 font-semibold rounded-xl bg-black text-white"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
            
          </div>


          <div className="max-w-7xl mx-auto bg-yellow-50 rounded-xl px-4 sm:px-6 lg:px-8 mt-6 py-12 lg:py-24">
            <div className="flex flex-col md:flex-row -mx-4">
              
              <div className="md:flex-1 px-4">
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                  Model Hub 
                </h2>
                <p className="text-gray-500 text-sm">
                  By{" "}
                  <a href="#" className="text-indigo-600 hover:underline">
                    Drut.ai
                  </a>
                </p>

                <div className="flex items-center space-x-4 my-4">
                  <div className="flex-1">
                    <p className="text-rose-500 text-xl font-semibold">
                      Comming soon
                    </p>
                    <p className="text-gray-400 text-sm">
                      Closed Beta comming Soon
                    </p>
                  </div>
                </div>

                <p className="text-gray-500">
                   Model hub Contains a directory of pretrained Models for unique niche. It also acts as hub for custom model deployments .
                </p>

                <div className="flex py-4 space-x-4">
                  <a
                    href="https://www.modelhub.drut.ai"
                    type="button"
                    className=" px-6 py-4 font-semibold rounded-xl bg-black text-white"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <div>
                  <div className=" rounded-lg bg-gray-100 mb-4">
                    <img
                      src={commingsoon.src}
                      className="h-64 md:h-80 w-full object-cover rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                    />
                  </div>

                  <div className="flex -mx-2 mb-4"></div>
                </div>
              </div>
            </div>
            
          </div>


          <div className="max-w-7xl mx-auto bg-yellow-50 rounded-xl px-4 sm:px-6 lg:px-8 mt-6 py-12 lg:py-24">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div>
                  <div className=" rounded-lg bg-gray-100 mb-4">
                    <img
                      src={commingsoon.src}
                      className="h-64 md:h-80 w-full object-cover rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                    />
                  </div>

                  <div className="flex -mx-2 mb-4"></div>
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                  Data Hub
                </h2>
                <p className="text-gray-500 text-sm">
                  By{" "}
                  <a href="#" className="text-indigo-600 hover:underline">
                    Drut.ai
                  </a>
                </p>

                <div className="flex items-center space-x-4 my-4">
                  <div className="flex-1">
                    <p className="text-rose-500 text-xl font-semibold">
                      Comming Soon
                    </p>
                    <p className="text-gray-400 text-sm">
                      Closed Beta comming Soon
                    </p>
                  </div>
                </div>

                <p className="text-gray-500">
                {`The Data Hub hosts a directory of clean, publicly accessible datasets and serves as a centralized repository for custom DataStore. When coupled with Drut's powerful EDA engines, it swiftly generates valuable insights in mere seconds.`}</p>

                <div className="flex py-4 space-x-4">
                  <a
                    href="https://www.datahub.drut.ai"
                    type="button"
                    className=" px-6 py-4 font-semibold rounded-xl bg-black text-white"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <CustomSolution/>
    </main>
  );
}

export default page;
