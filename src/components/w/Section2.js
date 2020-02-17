import React from "react";
import Cards from "./Cards";

export default function Section2() {
  let thetwocards = [
    {
      title: "For patients",
      description:
        "Find a doctor, book a visit and solve any health-related doubt ",
      sousitem: ["Choose country", "Argentina"],
      img: "https://www.docplanner.com/img/screen-marketplace@2x.png ",
      class: "forpatient"
    },
    {
      title: "For doctors",
      description: "Save time managing visits and cut no-shows by half ",
      img: "https://www.docplanner.com/img/screen-saas@2x.png ",
      class: "fordoctor"
    }
  ];
  return (
    <div className="section2">
      {thetwocards.map((el, i) => (
        <Cards
          key={i}
          textp={el.title}
          descriptionh1={el.description}
          options={el.sousitem}
          to={el.img}
          classname={el.class}
        />
      ))}
    </div>
  );
}

// <div className="section2">
// <Cards
//   textp="For patients"
//   texth1="Find a doctor, book a visit and solve any health-related doubt"
//   options={selectcontent}
//   to="https://www.docplanner.com/img/screen-marketplace@2x.png"
// />
// <Cards
//   textp="For doctors"
//   texth1="Save time managing visits and cut no-shows by half"
//   to="https://www.docplanner.com/img/screen-saas@2x.png"
// />
// </div>
