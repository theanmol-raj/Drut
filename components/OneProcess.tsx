"use client";
import React, { useState } from "react";
import i1 from "@/assets/OneSimplifiedProcess/spin_1.png";
import i2 from "@/assets/OneSimplifiedProcess/spikes_1.png";
import i3 from "@/assets/OneSimplifiedProcess/Drut-removebg-preview.png";
import i4 from "@/assets/OneSimplifiedProcess/spin_2.png";
import { BeakerIcon ,GlobeAltIcon ,GlobeAmericasIcon,ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import i5 from '@/assets/OneSimplifiedProcess/icons/i1c.svg'
import i9 from '@/assets/OneSimplifiedProcess/globe.gif'
type Props = {};

function F1() {
  return (
    <div className="relative">
      <img src={i1.src} className=" animate-spin  duration-700" />
      <div className=" absolute flex justify-center items-center  h-[250px] rounded-full  aspect-square z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className=" p-[1px] bg-gradient-to-br from-transparent to-white via-white/50 h-full w-full rounded-full flex justify-center items-center">
          <div className="h-full w-full bg-black rounded-full flex justify-center items-center">
            <p className="text-transparent  bg-clip-text  bg-gradient-to-b from-cyan-500  to-lime-400 text-6xl font-black">
              Drut
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function F2() {
  return (
    <div className="relative">
      <img src={i2.src} className="h-full " />
      <div className=" absolute flex justify-center scale-75 items-center  h-full rounded-full  aspect-square z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" relative">
          <img className="" src={i3.src} />
          <img className="absolute top-0 z-20 animate-spin" src={i4.src} />
        </div>
      </div>
    </div>
  );
}

function F3(){
    return <div className="relative">
    <img src={i1.src} className=" animate-spin  duration-700" />
    <div className=" absolute flex justify-center items-center  h-[250px] rounded-full  aspect-square z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <img src={i5.src} className=" rounded-full"/>
    </div>
  </div>
}

function F4(){
    return <div className="relative">
    <img src={i1.src} className=" animate-spin  duration-700" />
    <div className=" absolute flex justify-center items-center  h-[250px] rounded-full  aspect-square z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <img src={i9.src} className=" rounded-full"/>
    </div>
  </div>
}


function OneProcess({}: Props) {
  const [active, setActive] = useState<number>(0);

  const data = [
    {
      heading: "Input",
      icon: <ArrowRightCircleIcon className="h-6 w-6 mt-4 text-cyan-400" />,
      glow: (
        <span className="text-transparent  bg-clip-text  bg-gradient-to-b from-white via-blue-400  to-blue-600">{`{Your Data}`}</span>
      ),
      data: "The process starts with inputting visual content. WowYow’s Platform can analyze video files, live footage, images, or text, and easily access content via real time feeds, uploads, cameras, API /SDK integrations, and more.",
      component: <F1 />,
    },
    {
      heading: "Drut's AI Platform",
      icon: <BeakerIcon className="h-6 w-6 mt-4 text-cyan-500" />,
      data: "Then once the process is initiated and the content is in our Platform, WowYow’s computer vision and AI get to work analyzing the content. ",
      component: <F2 />,
    },
    {
      heading: "Output",
      icon: <GlobeAmericasIcon className="h-6 w-6 mt-4 text-blue-500" />,
      glow: (
        <span className="text-transparent  bg-clip-text  bg-gradient-to-b from-white via-cyan-400  to-[#1bdea7]">{`{Valuable Insights}`}</span>
      ),
      data: "The next step in the process is the output. To create true value, we go a step further than the competition, taking unstructured data, structuring it, and applying it for business use.",
      component: <F3 />,
    },
    {
      heading: "Apply AI Solution",
      icon: <GlobeAltIcon className="h-6 w-6 mt-4 text-blue-400" />,
      data: "The last step in the process is to apply the valuable metadata and business logic to real world applications.",
      component: <F4 />,
    },
  ];

  return (
    <div className=" max-w-5xl  w-full max-w-auto grid grid-cols-2 py-20">
      <div>
        {data?.map((item: any, index: number) => (
          <div key={index} className=" flex space-x-4 border-b border-gray-300/30 py-4 pb-6">
            <div className={`${index === active ? '' : 'grayscale text-opacity-70 opacity-75'}`}>{item.icon}</div>
            <div>
              <h1
                onClick={() => setActive(index)}
                className="font-semibold text-3xl text-white pt-2 cursor-pointer"
              >
                {item.heading} {item.glow}
              </h1>
              {index === active && <p className='text-white/50 py-4 text-sm'>{item.data}</p>}
            </div>
          </div>
        ))}
      </div>
      <div>{data?.map((item: any, index: number) => (
          <div key={index} className={`${index != active ? ' hidden' : 'flex'}`}>
              {item.component}
          </div>
        ))}</div>
    </div>
  );
}

export default OneProcess;
