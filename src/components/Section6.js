import React from "react";
import Section6Card from "./Section6Card";

export default function Section6() {
  let cardcity = [
    { img: "warsaw.png", p: "warsaw" },
    { img: "barcelona.png", p: "Barcelona" },
    { img: "istanbul.png", p: "Istanbul" },
    { img: "rome.png", p: "Rome" },
    { img: "mexico-city.png", p: "Mexico City" },
    { img: "curitiba.png", p: "Curitiba" }
  ];
  return (
    <div className="section6">
      {cardcity.map((el, i) => (
        <Section6Card key={i} src={el.img} paragraphe={el.p} />
      ))}
    </div>
  );
}
