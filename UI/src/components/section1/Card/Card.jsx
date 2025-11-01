import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Card = (props) => {
  return (
    <div className="p-7 w-80  bg-white">
      <div className="imgs">
        <img className="w-full h-full object-cover" src={props.img} alt="" />
      </div>
      <div className="info text-center py-2">
        <h2 className="text-black-800 p-1">{props.role}</h2>
        <h3 className="text-black font-bold text-2xl p-1">{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div className="icons flex justify-around px-5">
        <Facebook
          size={35}
          className="bg-sky-300 p-2 text-white rounded-full"
        />
        <Instagram
          size={35}
          className="bg-sky-300 p-2 text-white rounded-full"
        />
        <Linkedin
          size={35}
          className="bg-sky-300 p-2 text-white rounded-full"
        />
      </div>
    </div>
  );
};

export default Card;
