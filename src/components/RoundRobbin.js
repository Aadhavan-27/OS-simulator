import React, { useState } from "react";

const RoundRobbin = () => {
    const [TableData, setTableData] = useState([
        { id: 1, AT: 0, BT: 0, Ct:0, Tat:0, Wt:0 },
        { id: 2, AT: 0, BT: 0, Ct:0, Tat:0, Wt:0 },
        { id: 3, AT: 0, BT: 0, Ct:0, Tat:0, Wt:0 },
        { id: 4, AT: 0, BT: 0, Ct:0, Tat:0, Wt:0 }
    ]);
    const [GC,setGC] = useState([]);
    const [avgTat,setAvgTat] = useState();
    const [avfWt,setAvgWt] = useState();
    const changeHandler = (id, field, newValue) => {
        const updatedData = TableData.map(item => {
        if (item.id === id) {
            return { ...item, [field]: newValue };
        }
        return item;
        });
        setTableData(updatedData);
    };
    const [Qt,setQt] = useState(4);
    const Data = TableData;
    let minID = 1; 
    let min = TableData[0].AT;
    const GanntChart = [];
    function Quntumhandler(event){
        const tempdata = event.target.value;
        setQt(tempdata);
    }
    function GchrtToGanttch(Gchart){
        let j=0;
        for(let i = 0;i<Gchart.length;i++){
            GanntChart.push({aid:j,id:Gchart[i],count:1});
            while(Gchart[i] === Gchart[i+1]){
                GanntChart[j].count += 1;
                i++;
            }
            j++;
        }
        
        setGC(GanntChart);
    }


    // function clickhandler() {
    //     let invalidEntry;
    //     for (const item of TableData) {
    //         if (item.AT === 0 && item.BT === 0) {
    //             invalidEntry = true;
    //             break; // Exit loop if invalid entry found
    //         }
    //     }
    
    //     // Display alert if an invalid entry is found
    //     if (invalidEntry) {
    //         alert("Enter valid scheduling details..");
    //         return;
    //     }
        
    //     const Gchart = [];
    //     const rQ = [];

    //     TableData.forEach((item) => {
    //         if (item.AT < min) {
    //             minID = item.id;
    //             min = item.AT;
    //         }
    //     });

    //     // Remove the initial push of minID from rQ
    //     rQ.push(minID);
    //     console.log("Data:", Data);
    //     console.log("rQ:", rQ);
    //     console.log("Gchart:", Gchart);
    
    //     // Sort processes by arrival time
    //     const sortedData = Data.slice().sort((a, b) => a.AT - b.AT);
    //     console.log("Sorted DATA:",sortedData);
    //     let currentTime = 0;
    //     let remainingProcesses = sortedData.length;
    
    //     // Initialize remaining burst time for each process
    //     const remainingBT = sortedData.map(item => item.BT);
    //     // Initialize queue to keep track of processes ready for execution
    //     const readyQueue = [];
    
    //     // Continue scheduling until all processes are completed
    //     while (remainingProcesses > 0) {
    //         // Iterate through the sorted processes
    //         for (let i = 0; i < sortedData.length; i++) {
    //             const process = sortedData[i];
    //             const index = Data.findIndex(item => item.id === process.id);
    
    //             // Execute process if it has arrived and has remaining burst time
    //             if (process.AT <= currentTime && remainingBT[index] > 0) {
    //                 // Push process ID to ready queue
    //                 readyQueue.push(process.id);
    //             }
    //         }
    
    //         // If there are processes ready for execution
    //         if (readyQueue.length > 0) {
    //             // Execute each process in the ready queue for the time quantum or until completion
    //             for (const processId of readyQueue) {
    //                 const index = Data.findIndex(item => item.id === processId);
    //                 const executionTime = Math.min(Qt, remainingBT[index]);
    //                 // Push process ID to Gchart for each unit of execution time
    //                 for (let j = 0; j < executionTime; j++) {
    //                     Gchart.push(processId);
    //                 }
    //                 // Update remaining burst time
    //                 remainingBT[index] -= executionTime;
    //                 // Update current time
    //                 currentTime += executionTime;
    //                 // If process is completed, decrement remainingProcesses
    //                 if (remainingBT[index] === 0) {
    //                     Data[processId-1].Ct = currentTime;
    //                     Data[processId-1].Tat = currentTime-Data[processId-1].AT;
    //                     Data[processId-1].Wt = currentTime-Data[processId-1].BT;
    //                     setTableData(Data);
    //                     remainingProcesses--;
    //                 }
    //             }
    //             // Clear ready queue
    //             readyQueue.length = 0;
    //         } else {
    //             // Move current time to the next arrival
    //             currentTime = sortedData.find((process) => process.AT > currentTime )?.AT || currentTime + 1;
    //         }
    //     }
    //     let sumTat = 0;
    //     let sumwt = 0;
    //     for(let i=0;i<4;i++){
    //         sumTat+= TableData[i].Tat;
    //         sumwt+=TableData[i].Wt;
    //     }       
    //     GchrtToGanttch(Gchart);
    //     setAvgTat(sumTat/4.0);
    //     setAvgWt(sumwt/4.0);
    // }
    
    function clickhandler() {
    let invalidEntry;
    for (const item of TableData) {
        if (item.AT === 0 && item.BT === 0) {
            invalidEntry = true;
            break; // Exit loop if invalid entry found
        }
    }
    // Display alert if an invalid entry is found
    if (invalidEntry) {
        alert("Enter valid scheduling details..");
        return;
    }
    const Gchart = [];
    const rQ = [];
    TableData.forEach((item) => {
        if (item.AT < min) {
            minID = item.id;
            min = item.AT;
        }
    });
    rQ.push(minID);
    console.log("Data:", Data);
    console.log("rQ:", rQ);
    console.log("Gchart:", Gchart);
    const sortedData = Data.slice().sort((a, b) => a.AT - b.AT);
    console.log("Sorted DATA:",sortedData);
    let currentTime = 0;
    let remainingProcesses = sortedData.length;
    const remainingBT = sortedData.map(item => item.BT);
    const readyQueue = [];
    while (remainingProcesses > 0) {
        for (let i = 0; i < sortedData.length; i++) {
            const process = sortedData[i];
            const index = Data.findIndex(item => item.id === process.id);
            if (process.AT <= currentTime && remainingBT[index] > 0) {
                readyQueue.push(process.id);
            }
        }
        if (readyQueue.length > 0) {
            for (const processId of readyQueue) {
                const index = Data.findIndex(item => item.id === processId);
                const executionTime = Math.min(Qt, remainingBT[index]);
                for (let j = 0; j < executionTime; j++) {
                    Gchart.push(processId);
                }
                remainingBT[index] -= executionTime;
                currentTime += executionTime;
                if (remainingBT[index] === 0) {
                    Data[index].Ct = currentTime; // Update completion time
                    Data[index].Tat = currentTime - Data[index].AT; // Update turnaround time
                    Data[index].Wt = Data[index].Tat - Data[index].BT; // Update waiting time
                    setTableData([...Data]); // Update state
                    remainingProcesses--; // Decrement remaining processes
                } else {
                    readyQueue.push(processId);
                }
            }
            readyQueue.length = 0;
        } else {
            currentTime = sortedData.find((process) => process.AT > currentTime )?.AT || currentTime + 1;
        }
    }
    let sumTat = 0;
    let sumWt = 0;
    Data.forEach((item) => {
        sumTat += item.Tat;
        sumWt += item.Wt;
    });
    setAvgTat(sumTat / Data.length);
    setAvgWt(sumWt / Data.length);
    GchrtToGanttch(Gchart);
}

    
    
    

    return (
        <div className="flex flex-col bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900 h-full  w-[100%] justify-center items-center gap-3 font-serif text-[20px]">
            <h1 className="font-bold shadow-slate-800 text-white relative text-2xl p-2">Round Robin Process Scheduling Algorithm<h1 className="absolute top-[10px]  left-[11px] opacity-30 ">Round Robin Process Scheduling Algorithm</h1> </h1>
            <div className="bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-3 hover:shadow-lg">
                <table className="bg-slate-200 shadow-black  border-spacing-x-0">
                    <thead>
                        <tr>
                            <th className= " bg-blue-600 p-2">Processes</th>
                            <th className= " bg-blue-500 p-2">Arrival time</th>
                            <th className= " bg-blue-400 p-2">Burst time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TableData.map(item => (
                            <tr key={item.id}>
                                <td className=" bg-lime-200 border-[1px]">P<sub>{item.id}</sub></td>
                                <td>
                                    <input
                                    className=" bg-green-300 text-center border-[1px] "
                                        type="number"
                                        onChange={e =>
                                            changeHandler(
                                                item.id,
                                                "AT",
                                                parseInt(e.target.value)
                                            )
                                        }
                                        value={item.AT}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className=" bg-green-300 text-center border-[1px]"
                                        onChange={e =>
                                            changeHandler(
                                                item.id,
                                                "BT",
                                                parseInt(e.target.value)
                                            )
                                        }
                                        value={item.BT}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex flex-col text-[25px] items-center gap-2 ">
                    <div className="flex gap-3 ">   
                        <label>Quantum Time:</label>
                        <input type="number" onChange={Quntumhandler} placeholder="Enter the Quantum time" className=" bg-teal-100 text-[15px] h-8 align-middle pl-2 pr-2 m-auto  rounded-sm"></input>
                        <label>mS</label>    
                    </div>
                    <button onClick={clickhandler} className="bg-gradient-to-r from-sky-400 to-indigo-600 w-[fit-content]  p-1 rounded-md">Submit Data</button>
                </div>
                <div className="bg-white flex flex-col items-center justify-center bg-transparent">
                    <div className="flex gap-1">
                    {<div>Gannt Chart</div> && GC.map((item) => (
                        <div className="flex flex-col  rounded-sm items-center gap-0 ">
                            <div className=" w-[50px] font-serif bg-cyan-400 border-[1px] rounded-sm  m-auto border-black">P{item.id}</div>
                            <div className="pl-[35px]">{item.count}</div>
                        </div>
                        
                    ))}
                    </div>
                    <div >
                        <p className="border-[2px] mb-1 border-blue-800 p-1 rounded-sm bg-blue-100">Avg Tat: {avgTat}</p>
                        <p className="border-[2px] border-blue-800 p-1 rounded-sm bg-blue-100">Avg Wt: {avfWt}</p>
                    </div>
                </div>
                <p className=" font-extralight ">*the starting time is always zero</p>
            </div>
        </div>
    );
};

export default RoundRobbin;
