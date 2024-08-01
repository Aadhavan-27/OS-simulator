import React from "react";
// import { Link, useLinkClickHandler } from "react-router-dom";
import th from "./assets/th.jpeg";
const Home = ()=>{

    //bg-[url(./style/keypc.jpeg)] motion-safe:animate-bounce  duration-50


    return(
        <div className="flex flex-col  justify-center pt-3 gap-5 font-serif h-full fixed w-[100vw]  m-auto  bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900  animate-once text-black     bg-no-repeat bg-cover items-center">
      <h1 className="font-bold shadow-slate-800 text-white motion-safe:animate-bounce  duration-50 relative text-3xl p-2">Disk/CPU Scheduling Algorithm<h1 className="absolute top-[10px]  left-[11px] opacity-30 ">Disk/CPU Scheduling Algorithm</h1> </h1>
            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-3 items-center w-[50%]">
                    <div className="font-sans text-white text-center text-balance text-2xl font-serif w-[50%]  ease-out hover:ease-in duration-500">
                    Explore scheduling algorithms in a virtual lab that includes algorithms such as
                    Round Robin, Disk Scheduling, Page Replacement, Bankers Deadlock.
                    </div>
                    <div className=" ease-in hover:ease-out duration-300  transition">
                        <a href="./simulators"  className="p-2 text-lg font-bold font-serif bg-gray-700 text-white rounded-md font-2xl hover:bg-blue-700 hover:text-gray-100 hover:shadow-md">Run Simulator</a>
                    </div>
                </div>
                <div className="w-[50%] font-serif">  
                    <img className="" src={th}/>
                </div>
            </div>
        </div>
    )
}

export default Home;