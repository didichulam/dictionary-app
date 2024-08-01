import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <h2>{props.data.word}</h2>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning data={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
