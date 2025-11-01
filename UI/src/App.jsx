import React from "react";
import OurTeam from "./components/section1/OurTeam";

function App() {
  const userProfile = [
    {
      img: "https://assets.nicepagecdn.com/11a8ddce/2057428/images/1.jpg",
      role: "Orthodontist",
      name: "Dr. Ethan Carter",
      description:
        "Experienced orthodontist dedicated to creating beautiful, confident smiles with advanced alignment care.",
    },
    {
      img: "https://assets.nicepagecdn.com/11a8ddce/2057428/images/2.jpg",
      role: "Pediatric Dentist",
      name: "Dr. Sarah Johnson",
      description:
        "Specializes in gentle and friendly dental care for children, ensuring positive experiences every visit.",
    },
    {
      img: "https://assets.nicepagecdn.com/11a8ddce/2057428/images/jhhhj6.jpg",
      role: "Oral Surgeon",
      name: "Dr. Michael Lee",
      description:
        "Performs advanced oral surgeries with precision and care, ensuring patient safety and comfort.",
    },
    {
      img: "https://assets.nicepagecdn.com/11a8ddce/2057428/images/yy.jpg",
      role: "Prosthodontist",
      name: "Dr. Olivia Davis",
      description:
        "Expert in restoring natural smiles with high-quality crowns, bridges, and cosmetic restorations.",
    },
    {
      img: "https://assets.nicepagecdn.com/11a8ddce/2057428/images/gffgfgg.jpg",
      role: "Endodontist",
      name: "Dr. Sophia Patel",
      description:
        "Focused on root canal treatments and preserving natural teeth through gentle and effective care.",
    },
    {
      img: "https://assets.nicepagecdn.com/11a8ddce/2057428/images/hghg.jpg",
      role: "Periodontist",
      name: "Dr. Liam Wilson",
      description:
        "Specialist in gum treatments and dental implants, helping patients maintain long-lasting oral health.",
    },
  ];

  return (
    <div>
      <OurTeam userData={userProfile} />
    </div>
  );
}

export default App;
