import React from "react";
import "./App.css";
import DocNav from "./components/Nav/DocNav";
import Section1 from "./components/Section1";
import Section2 from "./components/w/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Footer from "./components/Footer";
function App() {
  let nav = [
    { tag: "Home", subMenu: null },
    { tag: "Concat", subMenu: null },
    {
      tag: "Service",
      subMenu: [
        "Marketing & PR",
        "Customer Success & Sales",
        "IT, Product, Design & UX",
        "Finance & Administration"
      ]
    }
  ];

  return (
    <div className="App">
      <DocNav navmenu={nav} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}

export default App;
