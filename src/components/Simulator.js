import React from "react";

const Simulator = ()=>{
    
    return(
        <div className="w-[100%] h-[90vh] bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900  animate-once text-black       flex flex-col justify-center items-center text-2xl font-serif font-extrabold overflow-x-hidden absolute  gap-3  text-[20px] ">
            <div className="flex flex-col gap-2 max-w-[400px]">
                <a className="bg-blue-300 p-3 hover:shadow-gray-500 hover:scale-110 hover:bg-sky-400 shadow-md  rounded-md  text-sky-800 " href="/simulators/roundrobbin">Round Robin Algorithm</a>
                <a className="bg-blue-300 p-3 hover:shadow-gray-500 hover:scale-110 hover:bg-sky-400 shadow-md rounded-md text-sky-800 " href="/simulators/disk">Disk Scheduling Algorithm</a>
                <a className="bg-blue-300 p-3 hover:shadow-gray-500 hover:scale-110 hover:bg-sky-400 shadow-md rounded-md  text-sky-800 " href="/simulators/page">Page Replacement Algorithm</a>
                <a className="bg-blue-300 p-3 hover:shadow-gray-500 hover:scale-110 hover:bg-sky-400 shadow-md rounded-md text-sky-800 " href="/simulators/banker">Bankers Deadlock Algorithm</a>    
                 

            </div>
                      
        </div>
    );
};

export default Simulator;