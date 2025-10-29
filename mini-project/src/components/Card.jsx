import React from "react";
import "../components/Card.css";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="top">
          <div className="brandLogo">
            <img src={props.brandLogo} alt="logo" />
          </div>
          <div className="save">
            Save <Bookmark size={18} />
          </div>
        </div>
        <div className="middle">
          <div className="brandName">
            <div className="company">{props.company}</div>
            <div className="date">{props.date}</div>
          </div>
          <div className="heading">{props.role}</div>
          <div className="jobroll">
            <h3>{props.jobType}</h3>
            <h3>{props.level}</h3>
          </div>
        </div>
        <div className="bottom">
          <div className="paywithlocation">
            <div className="pay">{props.salary}</div>
            <div className="city">{props.location}</div>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default Card;
