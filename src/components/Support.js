import React from "react";

const Support = () =>{
    return(
        <div className="  bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900 font-serif p-3 w-[100%] h-[90vh] overflow-auto"> 
            <div className=" w-[65%] p-6 m-6 bg-transparent flex flex-col gap-9 mx-auto">
                <div className="flex flex-col p-3  bg-sky-100 rounded-sm gap-3">
                    <h2 className="  font-bold text-2xl bg-slate-500 text-center py-1 rounded-t-sm">Round Robin Scheduling Algorithm</h2>
                    <ol className="font-light">
                        <li>
                            <p className=" ">Round Robin is a CPU scheduling algorithm where each process is cyclically assigned a fixed time slot. It is the preemptive version of the First come First Serve CPU Scheduling algorithm.</p> 
                        </li>
                        
                    </ol>
                    <div className="flex w-[50%] gap-3 justify-center   mx-auto">
                        <a href="/simulators/roundrobbin" className=" p-2  font-bold bg-blue-400 text-white rounded-sm">Simulator</a>
                        <a href="/simulators/roundrobbin" className=" p-2  font-bold bg-blue-400 text-white rounded-sm">Theory  </a>
                    </div>
                    
                </div>
                <div className="flex flex-col p-3 bg-sky-100 rounded-sm gap-3">
                    <h2 className="  font-bold text-2xl bg-slate-500 text-center py-1 rounded-t-sm">Disk Scheduling Algorithm</h2>
                    <ol className="font-light">
                        <li>
                            <p className="  ">	Disk scheduling is done by operating systems to schedule I/O requests arriving for the disk. Disk scheduling is also known as I/O Scheduling. Multiple I/O requests may arrive by different processes and only one I/O request can be served at a time by the disk controller.
</p> 
                        </li>
                        
                    </ol>
                    <div className="flex w-[50%] gap-3 justify-center   mx-auto">
                        <a href="/simulators/disk" className=" p-2  font-bold bg-blue-400 text-white rounded-sm">Simulator</a>
                        <a href="/simulators/disk" className=" p-2  font-bold bg-blue-400 text-white rounded-sm">Theory  </a>
                    </div>
                    
                </div>
                <div className="flex flex-col p-3 bg-sky-100 rounded-sm gap-3">
                    <h2 className="  font-bold text-2xl bg-slate-500 text-center py-1 rounded-t-sm">Page Replacement Algorithm</h2>
                    <ol className="font-light">
                        <li>
                            <p className=" ">The MRU (Most Recently Used) page replacement algorithm is a method used in computer operating systems for managing memory. In the context of virtual memory systems, when the operating system needs to bring in a page from secondary storage (such as a hard disk) into RAM (Random Access Memory), and there is no free space in RAM, it must choose which page to evict from RAM to make room for the new page.</p> 
                        </li>
                        
                    </ol>
                    <div className="flex w-[50%] gap-3 justify-center   mx-auto">
                        <a href="/simulators/page" className=" p-2  font-bold bg-blue-400 text-white rounded-sm">Simulator</a>
                        <a href="/simulators/page" className=" p-2  font-bold bg-blue-400 text-white rounded-sm">Theory  </a>
                    </div>
                    
                </div>
                <div className="flex flex-col p-3 bg-sky-100 rounded-sm gap-3">
                    <h2 className="  font-bold text-2xl bg-slate-500 text-center py-1 rounded-t-sm">Banker's Deadlock Algorithm</h2>
                    <ol className="font-light">
                        <li>
                            <p className=" ">The Banker's algorithm is a deadlock avoidance algorithm used in operating systems to manage the allocation of resources to multiple processes in a way that prevents deadlock. Deadlock is a situation where two or more processes are unable to proceed because each is waiting for a resource held by the other.</p> 
                        </li>
                        
                    </ol>
                    <div className="flex w-[50%] gap-3 justify-center   mx-auto">
                        <a href="/simulators/banker" className=" p-2  font-bold bg-blue-400 text-white rounded-sm">Simulator</a>
                        <a href="/simulators/banker" className=" p-2  font-bold bg-blue-400 text-white rounded-sm">Theory  </a>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Support;