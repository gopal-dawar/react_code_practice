import React from "react";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const jobData = [
    {
      id: 1,
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      company: "Amazon",
      date: "5 days ago",
      role: "Web Developer",
      jobType: "Part Time",
      level: "Senior Level",
      salary: "$1230/hr",
      location: "Pune",
    },
    {
      id: 2,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzAm1zvZuFboxzOS73NfeLfMX5pg4uFtGivQ&s",
      company: "Microsoft",
      date: "2 days ago",
      role: "Frontend Engineer",
      jobType: "Full Time",
      level: "Junior Level",
      salary: "$950/hr",
      location: "Bangalore",
    },
    {
      id: 3,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSV7Hxcxl15KubCyHNbRgX7wnINoeShmbqrw&s",
      company: "Google",
      date: "1 week ago",
      role: "React Developer",
      jobType: "Internship",
      level: "Fresher",
      salary: "$500/hr",
      location: "Hyderabad",
    },
    {
      id: 4,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      company: "Apple",
      date: "3 days ago",
      role: "UI/UX Designer",
      jobType: "Contract",
      level: "Mid Level",
      salary: "$1100/hr",
      location: "Mumbai",
    },
    {
      id: 5,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_N_logo.svg",
      company: "Netflix",
      date: "4 days ago",
      role: "Backend Developer",
      jobType: "Full Time",
      level: "Senior Level",
      salary: "$1400/hr",
      location: "Chennai",
    },
    {
      id: 6,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Tesla_Motors_wordmark.svg",
      company: "Tesla",
      date: "1 day ago",
      role: "Full Stack Developer",
      jobType: "Full Time",
      level: "Mid Level",
      salary: "$1200/hr",
      location: "Delhi",
    },
    {
      id: 7,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      company: "IBM",
      date: "6 days ago",
      role: "Software Tester",
      jobType: "Part Time",
      level: "Junior Level",
      salary: "$800/hr",
      location: "Noida",
    },
    {
      id: 8,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/0e/Adobe_Corporate_logo.svg",
      company: "Adobe",
      date: "3 days ago",
      role: "Frontend Developer",
      jobType: "Contract",
      level: "Senior Level",
      salary: "$1300/hr",
      location: "Pune",
    },
    {
      id: 9,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Intel_logo_%282020%29.svg",
      company: "Intel",
      date: "2 weeks ago",
      role: "Java Developer",
      jobType: "Full Time",
      level: "Mid Level",
      salary: "$1000/hr",
      location: "Ahmedabad",
    },
    {
      id: 10,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/LinkedIn_logo_initials.png",
      company: "LinkedIn",
      date: "2 days ago",
      role: "ReactJS Developer",
      jobType: "Remote",
      level: "Fresher",
      salary: "$700/hr",
      location: "Remote",
    },
  ];

  return (
    <div>
      <div className="row">
        {jobData.slice(0, 5).map((data) => {
          return (
            <Card
              key={data.id}
              location={data.location}
              salary={data.salary}
              level={data.level}
              role={data.role}
              jobType={data.jobType}
              brandLogo={data.brandLogo}
              company={data.company}
              date={data.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
