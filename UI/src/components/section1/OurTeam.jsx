import React from "react";
import Card from "./Card/Card";

const OurTeam = (props) => {
  return (
    <div className="flex justify-center items-center bg-sky-100">
      <div className="grid grid-cols-3 justify-items-center gap-10">
        {props.userData.map(function (elm, idx) {
          return (
            <Card
              key={elm.idx}
              img={elm.img}
              role={elm.role}
              name={elm.name}
              description={elm.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
