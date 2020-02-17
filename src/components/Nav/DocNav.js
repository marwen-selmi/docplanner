import React from "react";
import "./DocNav.css";

export default function DocNav(props) {
  console.log(props);
  return (
    <nav>
      <div className="docplanner_img">
        <a href="#">
          <img
            src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
            alt="docplaner"
          />
        </a>
      </div>

      <ul className="docplanner_right">
        {props.navmenu.map((el, i) => (
          <li key={i} className="drop">
            <a href="#">{el.tag}</a>
            {el.subMenu ? (
              <ul className="dropdown-content">
                {el.subMenu.map((el, i) => (
                  <li key={i}>
                    <a href="#">{el}</a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
