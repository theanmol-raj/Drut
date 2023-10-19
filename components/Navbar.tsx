"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Props = {};

function Navbar({}: Props) {
  const [prevScrollPosition, setPrevScrollPosition] = useState<number>(0);
  const [visable, setVisable] = useState<boolean>(true);
  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    if (
      currentScrollPosition > prevScrollPosition &&
      currentScrollPosition > 500
    ) {
      setVisable(false);
    } else {
      setVisable(true);
    }
    if (currentScrollPosition > 500) {
      setVisable(false);
    }
    setPrevScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const NavbarItems = [
    { text: "Home", link: "/" },
    { text: "Technology", link: "/technology" },
    { text: "Products", link: "/products" },
    { text: "Services", link: "/services" },
    { text: "About", link: "/about-us" },
    { text: "Contact", link: "/contact" },
  ];
  const [notification ,setNotification] = useState<boolean>();

  useEffect(()=>{
    setTimeout( ()=>setNotification(false) ,10000)
  },[])

  return (
    <div
      className={`   z-50 ${
        visable
          ? " text-white bg-black "
          : " bg-white border-b text-black w-screen fixed top-0  "
      } transition duration-150 `}
    >
      {notification && <div className="p-2 bg-gradient-to-r from-cyan-500 text-white text-center to-lime-400">
        DRUT Native token #MUDRA will be offered on 15 August 2023
      </div>}
      <div className=" flex justify-between items-center w-full max-w-[90rem] py-4 mx-auto">
        
          <Link href={`/`}>
            <h1 className=" font-bold text-3xl">
              <span className="  text-transparent  bg-clip-text  bg-gradient-to-b from-cyan-500  to-lime-400">
                Drut
              </span>
              .ai
            </h1>
          </Link>
        
        <div className=" flex justify-between items-center space-x-4 text-white text-sm">
          {NavbarItems.map((x, y) => (
            <Link
              key={y}
              href={x.link}
              className={` ${
                visable ? "text-white" : " text-black"
              } hover:text-transparent py-4 border-b-2 border-transparent  bg-clip-text hover:bg-lime-300 font-medium cursor-pointer tracking-widest`}
            >
              {x.text}
            </Link>
          ))}
        </div>
        <div className=" flex space-x-4 items-center ">
          <button className="  rounded-full py-2 px-6 bg-gray-300/20">Login / Signup</button>
          <button className="  rounded-full text-white py-2 px-6 bg-gradient-to-b from-lime-400 to-cyan-600">Book a call</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
