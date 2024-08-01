import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaInstagram, FaLinkedinIn,FaInstagramSquare } from "react-icons/fa";
import insta from "./assets/insta.png";
import linkin from "./assets/linkedin.png"
import "./organizer-card.css";

const OrganizerCard = ({name,rollno,photo,instagram,linkedin}) => {
  
  return (
    <div className="w-[250px] p-1 flex flex-col hover:shadow-lg shadow-black hover:scale-110 transition-all duration-100 items-center bg-blue-100  h-[300px] rounded-lg">
      <div className="h-[50%] pt-4">
        <img className="rounded-[50%]  bg-gradient-to-r p-[1px] from-teal-400 to-yellow-200  h-[100%] items-center" src={photo} alt="dfghsdjfh" />
      </div>
      <div className="h-[50%] justify-center items-center gap-3 flex flex-col">
        <span className="text-lg">{name}</span>
        <p className="  font-extralight ">{rollno}</p>
        <div className="flex gap-3">
        
        <a href={instagram} target="_blank" rel="noreferrer">
          <img src={insta} className="h-[25px]" alt="sfbn"></img>
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <img  className="h-[25px] " src={linkin} alt="vzbxnc"></img>
        </a>
          
        </div>
      </div>
    </div>
  );
};

export default OrganizerCard;
