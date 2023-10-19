import CaseStudyUseCase from "@/components/CaseStudyUseCase";
import OneProcess from "@/components/OneProcess";

export default function Home() {
  return (
    <main className=" flex-grow">
      <section className=" bg-hero">
        <div className="flex flex-col  max-w-7xl mx-auto justify-center items-center py-24 md:py-28 lg:py-44">
          <p className=" text-gray-400 font-semibold pt-1">Drut AI</p>
          <p className=" text-gray-400 font-semibold pb-1">
            Nothing Artificial , Just Applied Intelligence.{" "}
          </p>
          <h1 className=" font-bold text-7xl text-white pt-2">
            Input{" "}
            <span className="text-transparent  bg-clip-text  bg-gradient-to-b from-white via-blue-400  to-blue-600">{`{Your Data}`}</span>
          </h1>
          <h1 className=" font-bold text-7xl text-white pb-2">
            Output{" "}
            <span className="text-transparent  bg-clip-text  bg-gradient-to-b from-white via-cyan-400  to-[#1bdea7]">{`{Valuable Insights}`}</span>
          </h1>
          <p className=" text-gray-400 py-4 text-center">
            We <span className="text-white">leverage data</span> and bleeding edge AI to enable <span className="text-white">SMART™️er</span> decision
            making for you. We combine <span className="text-white">cloud, big data, ML models, and domain
            experience</span> to ensure successful outcomes, predictable delivery, and
            <span className="text-white"> guaranteed ROI</span>
          </p>
          <div className=" flex space-x-4 pt-8">
            <button className=" border-blue-500 px-7 hover:bg-gradient-to-b from-blue-400  to-blue-600 rounded-full py-3 text-white border-2">Explore Products</button>
            <button className="  px-7 rounded-full py-3 text-white bg-gray-800/20 underline">Book Free Demo</button>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col  max-w-7xl mx-auto justify-center items-center py-24 ">
          <p>Portfolio</p>
          <h1 className=" font-semibold text-6xl text-center pt-2">Insights and Business Logic,<br />a <span className="text-transparent  bg-clip-text  bg-gradient-to-b from-cyan-400  to-blue-500">Winning Combination</span></h1>
          <p className=" text-gray-800 py-4 max-w-3xl text-center pb-16">
          Artificial Intelligence and SMART™️er Insights help us understand complex scenarios, but we{` don't`} stop there. Combine them with unique business logic to address your business needs.
          </p>

          {/* Use case and case studies */}
          <CaseStudyUseCase />

        </div>
      </section >

      <section  className=" bg-hero pt-28">
      <div className="flex flex-col  max-w-7xl mx-auto justify-center items-center  ">
          <p className=" text-white">How it works</p>
          <h1 className=" font-semibold text-white text-6xl text-center pt-2">One <span className="text-transparent  bg-clip-text  bg-gradient-to-b from-cyan-400  to-blue-500">Simplified </span>Process</h1>
          <p className=" text-gray-200 py-4 max-w-3xl text-center">
          Artificial Intelligence and SMART™️er Insights help us understand complex scenarios, but we {`don't`} stop there. Combine them with unique business logic to address your business needs.
          </p>

          {/* Use case and case studies */}
          <OneProcess />
        </div>


      </section>
      <section>
      <div className="max-w-7xl mx-auto w-full py-12 md:py-16 lg:py-20 text-center">
        <p className=" ">
          Our Offer
        </p>
        <h1 className=" font-semibold text-6xl text-center pt-2">Engage with <span className="text-transparent  bg-clip-text  bg-gradient-to-b from-cyan-400  to-blue-500">new <br /> & existing </span>customers</h1> 
        <h3 className=" text-2xl py-4">
          A global leader <br />
          in Generative AI and Data Science 
        </h3>
        <div className=" flex justify-between flex-wrap max-w-xs lg:max-w-4xl mx-auto py-10">
          <div className="  flex-grow ">
            <h1 className=" text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 text-5xl">
              15+
            </h1>
            <p className=" text-sm tracking-wide text-black/60">
              markets served
            </p>
          </div>
          <div className=" border-l-2  flex-grow ">
            <h1 className=" text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-400 text-5xl">
              100%
            </h1>
            <p className=" text-sm tracking-wide text-black/60">
            Success Rate
            </p>
          </div>
          <div className=" border-l-2  flex-grow ">
            <h1 className=" text-transparent  bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-500 text-5xl">
              98%
            </h1>
            <p className=" text-sm tracking-wide text-black/60">
            Client Satisfaction Score
            </p>
          </div>
          <div className=" border-l-2  flex-grow ">
            <h1 className=" text-transparent  bg-clip-text bg-gradient-to-r from-lime-400 to-lime-500 text-5xl">
              95%
            </h1>
            <p className=" text-sm tracking-wide text-black/60">
            Retention Rate
            </p>
          </div>
        </div>
      </div>
      </section>
      <section>
      <div className="bg-hero  flex ">
        <div className="max-w-7xl mx-auto w-full py-32 md:py-40 lg:py-52 text-center">
          <p className=" text-xs text-white tracking-wide font-bold">
            TECHNOLOGY POWERED BY DEEP LEARNING
          </p>
          <h3 className=" text-white text-5xl font-semibold max-w-4xl mx-auto py-8">
          Does your agency specialize in data-driven digital impressions for businesses?
          </h3>
          <p className=" text-white pb-8">
            See more about how we help you deliver out-of-this-world results.
          </p>
          <button className=" bg-blue-500 font-semibold text-sm px-10 py-4 text-white hover:bg-gradient-to-b from-cyan-400 to-blue-500 transform transition-all duration-500 rounded-full ease-in-out">
            For Agencies
          </button>
        </div>
      </div>
      </section>
    </main>
  );
}
