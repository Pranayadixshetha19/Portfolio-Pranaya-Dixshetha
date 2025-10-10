"use client"
import Left from "@/app/Leftsection/page";
import Image from "next/image";
import Right from "@/app/Rightsection/page";
import React, { useEffect, useState } from "react";


export default function Home() {
  const [activestate, setActivestate] = useState("main")
  
 
  return (
    <div id="main" >
      <div className="flex flex-col [@media(max-width:1320px)]:flex-col  lg:justify-between  py-5 text-white mx-auto min-h-screen max-w-screen-xl my-20 max-lg:px-5 max-lg:py-0">
        <div className="left flex-shrink-0 lg:w-[48%] lg:fixed lg:top-20 lg:left-[calc((100%-1280px)/2)]">
          <Left activestate={activestate} />
        </div>
        <div className="right z-50  lg:w-[52%]  lg:ml-[48%] lg:flex lg:gap-10 lg:justify-between  py-5 text-white mx-auto min-h-screen max-w-screen-xl  max-lg:py-0 max-lg:flex-col">
          <Right setActivestate={setActivestate} />
        </div>
      </div>

    </div>
   


  );
}

