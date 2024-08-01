import React from "react";
import { Outlet } from "react-router-dom";

const Mainhandler = () => {
    return(
        <div className="h-[90%] w-[100%]">
            <Outlet></Outlet>
        </div>
    );
}

export default Mainhandler;