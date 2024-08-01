import React from "react";
import Pc from "./assets/vaibhav.jpg"
import Ayush from "./assets/ayush.jpg"
import Ronak from "./assets/ronak.jpg"
import Raj from "./assets/raj.jpg"
import Nemi from "./assets/Nemi.jpg"
// import asset from "./assets",
import OrganizerCard from "./organizerCard.js";
const About = () =>{
    const data = [
        {
            name: "Vaibhav Rank",
            rollno: "22BCP183",
            photo : Pc,
            instagram:"https://www.instagram.com/____vaibhav_patel_/#",
            linkedin:"https://www.linkedin.com/in/vaibhav-rank-366958302/#  "
        },
        {
            name: "Aayush Gondaliya",
            rollno: "22BCP195",
            photo : Ayush,
            instagram:"https://www.linkedin.com/in/aayush-gondaliya/",
            linkedin:"https://www.linkedin.com/in/aayush-gondaliya/"
            
        },
        {
            name: "Raj Patel",
            rollno: "22BCP190",
            photo : Raj,
            instagram:"https://www.instagram.com/rajpatel.3_/",
            linkedin:"https://www.linkedin.com/in/raj-patel-0ba564291/"
            
        },
        {
            name: "Nemi Shah",
            rollno: "22BCP196",
            photo : Nemi,
            instagram:"https://www.instagram.com/nemi_shah_29/",
            linkedin:"https://www.linkedin.com/in/nemi-shah-a75873288/"
            
        },
        {
            name: "Ronak Panchal",
            rollno: "22BCP192",
            photo : Ronak,
            instagram:"https://www.instagram.com/ronak_panchal_021",
            linkedin:"https://www.linkedin.com/in/ronak-panchal-98720a317"
            
        }
    ]
    return(
        <div className="w-[100%] h-[90vh] bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900  font-serif flex flex-col justify-center items-center text-2xl  font-extrabold">
            <div className="flex flex-wrap gap-7 justify-center items-center">
               {/* Map over the organizers array and render OrganizerCard for each organizer */}
                {data.map((data, index) => (
                    <OrganizerCard key={index} {...data} />
                ))}
            </div>
        </div>
    )
}

export default About;