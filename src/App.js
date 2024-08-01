import React from 'react';
import './App.css';
import Home from "./components/Home";
import Simulator from './components/Simulator';
import About from './components/About';
import Support from './components/Support';
import NotFound from './components/NotFound';
import Mainhandler from './components/Mainhandler';
import { Link } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import RoundRobbin from './components/RoundRobbin';
import Diagram from "./components/assets/diagram.png"
import DiskScheduler from './components/DiskScheduler';
import PageReplacement from './components/PageReplacement';
import BankerDeadlock from './components/BankerDeadlock';
// import image from './style/image.png'
function App() {

  return (

    <div className="flex flex-col  bg-sky-100 h-[100vh]  w-full   text-[20px]">

    <div className='bg-blue-100'>
    <nav className='p-2  w-fullfixed flex justify-around  items-center font-serif bg-gradient-to-b from-blue-500 to-blue-600'>
        <div className='flex gap-3 items-center relative justify-center '>
          {/* <img src={image} className='pl-2'/> */}
          <img className='h-[30px] absolute bottom-2.5 left-[-35px] ' src={Diagram}></img>
          <Link to="/" className='font-sans flex flex-row gap-11 h-10 justify-center  text-[22px] '>Operating system</Link>
        </div>
        <ul className='font-sans flex flex-row gap-11 h-10 justify-center  text-[22px] '>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us </Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/simulators">Simulator</Link>
          </li>
          
        </ul>
      </nav>
    </div>
      

    <Routes>
      <Route path="/" element={<Mainhandler />}>
      <Route index element={<Home/>}/>
      <Route path="/aboutus" element={<About />}/>
      <Route path="/support" element={<Support />}/>
      <Route path="/simulators" element={<Simulator />}/>
      <Route path="/simulators/roundrobbin" element={<RoundRobbin/>}/>
      <Route path="/simulators/disk" element={<DiskScheduler/>}/>
      <Route path="/simulators/page" element={<PageReplacement/>}/>
      <Route path="/simulators/banker" element={<BankerDeadlock/>}/>
      
      <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
