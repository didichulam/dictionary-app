import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.data.partOfSpeech}</h3>
      {props.data.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <div className="definition">{definition.definition}</div>
              <div className="example">{definition.example}</div>
            </p>
          </div>
        );
      })}
      <Synonyms synonyms={props.data.synonyms} />
    </div>
  );
}
