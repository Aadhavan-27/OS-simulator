import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import Chart from 'chart.js/auto';

const DiskScheduler = () => {
  const [head, setHead] = useState(50);
  const [direction, setDirection] = useState('left');
  const [requestArray, setRequestArray] = useState('176, 79, 34, 60, 92, 11, 41, 114');
  const [output, setOutput] = useState('');
  const [seekSequenceChart, setSeekSequenceChart] = useState(null);

  const runSCAN = () => {
    let headVal = parseInt(head);
    let directionVal = direction;
    let requestVal = requestArray.split(',').map(Number);
    let size = requestVal.length;
    let diskSize = 200;
    let seekCount = 0;
    let distance, curTrack;
    let left = [], right = [];
    let seekSequence = [];
    if (directionVal === "left")
        left.push(0);
    else if (directionVal === "right")
        right.push(diskSize - 1);
    for (let i = 0; i < size; i++) {
        if (requestVal[i] < headVal)
            left.push(requestVal[i]);
        if (requestVal[i] > headVal)
            right.push(requestVal[i]);
    }
    left.sort(function(a, b){return a - b});
    right.sort(function(a, b){return a - b});
    let run = 2;
    while (run-- >0) {
        if (directionVal === "left") {
            for (let i = left.length - 1; i >= 0; i--) {
                curTrack = left[i]; seekSequence.push(curTrack); distance = Math.abs(curTrack - headVal); seekCount += distance; headVal = curTrack;
            }
            directionVal = "right";
        }
        else if (directionVal === "right") {
            for (let i = 0; i < right.length; i++) { curTrack = right[i];
                seekSequence.push(curTrack); distance = Math.abs(curTrack - headVal); seekCount += distance; headVal = curTrack;
            }
            directionVal = "left";
        }
    }
    let outputHtml = `<p>TOTAL NUMBER OF SEEK OPERATIONS = ${seekCount}</p>`;
    let sanitizedOutput = DOMPurify.sanitize(outputHtml);
    setOutput(sanitizedOutput);
    const chartData = {
      labels: seekSequence.map((_, index) => index + 1),
      datasets: [{label: 'Seek Sequence', data: seekSequence, fill: false, borderColor: 'rgb(75, 192, 192)',tension: 0.1 }]
    };
    if (seekSequenceChart && seekSequenceChart.data) {
        seekSequenceChart.data.labels = chartData.labels;
        seekSequenceChart.data.datasets[0].data = chartData.datasets[0].data;
        seekSequenceChart.update();
      } else {
        const ctx = document.getElementById('seekSequenceChart');
        const newChart = new Chart(ctx, { type: 'line', data: chartData, options: { scales: {
              x: { title: { display: true,text: 'Step'}},
              y: { title: { display: true,text: 'Disk Position'}}
            }
          }
        });
        setSeekSequenceChart(newChart);
      }
  };

  useEffect(() => {
    // Clean up chart instance when component unmounts
    return () => {
      if (seekSequenceChart) {
        seekSequenceChart.destroy();
      }
    };
  }, [seekSequenceChart]);

  return (
    <div className="w-[100%] h-[100vh] bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900 font-serif p-6 flex flex-col justify-center items-center">
      <h1 className="font-bold shadow-slate-800 text-white relative text-2xl p-2">Disk Scheduling Algorithm<h1 className="absolute top-[10px]  left-[11px] opacity-30 ">Disk Scheduling Algorithm</h1> </h1>

      <div className="container w-[55%] h-[100%] bg-white  px-4 py-8 rounded-lg overflow-x-auto">
        <div className="input-section">
          <label htmlFor="head" className="block mb-1">HEAD POSITION:</label>
          <input type="number" id="head" value={head} onChange={(e) => setHead(e.target.value)} className="w-full border-[2px] bg-green-100 border-black rounded-lg mb-2 p-2" />
          <label htmlFor="direction" className="block mb-1">INITIAL DIRECTION:</label>
          <select id="direction" value={direction} onChange={(e) => setDirection(e.target.value)} className="w-full border-[2px] bg-green-100 border-black rounded-lg mb-2 p-2">
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
          <label htmlFor="request" className="block mb-1">REQUEST ARRAY(Comma-Separated):</label>
          <input type="text" id="request" value={requestArray} onChange={(e) => setRequestArray(e.target.value)} className="w-full bg-green-100 border-[2px] border-black rounded-lg mb-2 p-2" />
          <button onClick={runSCAN} className="block mx-auto mt-4 px-6 py-2 bg-blue-500 text-white rounded-full cursor-pointer transition duration-300 hover:bg-blue-600">Run SCAN</button>
        </div>
        <div className="output-section mt-6">
          <div  dangerouslySetInnerHTML={{ __html: output }}></div>
          <canvas id="seekSequenceChart"  width="400" height="200"></canvas>
        </div>
      </div>
    </div>
  );
};

export default DiskScheduler;
