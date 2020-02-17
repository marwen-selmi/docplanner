import React from "react";
import WorldCarldS4 from "./WorldCardS4";

export default function RightSection4() {
  let x = [
    {
      img: "flag.png",
      title: "Leader in 10 countries",
      paragraph:
        "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil,Colombia, Argentina and Chile "
    },

    {
      img: "visits.png",
      title: "1.5 million appointments",
      paragraph: "booked last month"
    },
    {
      img: "patients.png",
      title: "30 million unique patients",
      paragraph: "visit us every month"
    },
    {
      img: "doctors.png",
      title: "2 million active doctors",
      paragraph: "trust in our solutions"
    }
  ];
  return (
    <div className="right-section4">
      {x.map((y, i) => (
        <WorldCarldS4
          key={i}
          title={y.title}
          paragraph={y.paragraph}
          img={y.img}
        />
      ))}
    </div>
  );
}
