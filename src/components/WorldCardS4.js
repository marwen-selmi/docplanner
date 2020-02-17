import React from "react";

export default function WorldCardS4(props) {
  return (
    <div class="worldcard">
      <img src={require(`../Asserts/${props.img}`)} />
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
    </div>
  );
}
