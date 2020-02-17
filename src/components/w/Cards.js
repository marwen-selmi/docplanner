import React from "react";

export default function Cards(props) {
  return (
    <div className={props.classname}>
      <p>{props.textp}</p>
      <h1>{props.descriptionh1}</h1>
      {props.options && (
        <select>
          {props.options.map((el, i) => (
            <option key={i}>{el} </option>
          ))}
        </select>
      )}
      <img class="computer" src={props.to} />
    </div>
  );
}

// export default function Cards(props) {
//   return (
//     <div className="forpatient">
//       <p>{props.textp}</p>
//       <h1>{props.texth1}</h1>
//       {props.options && (
//         <select>
//           {props.options.map((el, i) => (
//             <option key={i}>{el} </option>
//           ))}
//         </select>
//       )}
//       {/* {false && <h1>azerty</h1>} */}

//       <img class="computer" src={props.to} />
//     </div>
//   );
// }
