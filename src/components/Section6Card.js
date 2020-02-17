import React from "react";

export default function Section6Card(props) {
  return (
    <div className="bottom-cards">
      <img src={require(`../Asserts/${props.src}`)} />
      <div className="see">
        <p>{props.paragraphe} </p>
        <button>SEE OPENINGS</button>
      </div>
    </div>
  );
}
