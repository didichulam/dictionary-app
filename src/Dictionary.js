import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function saveWord(event) {
    setWord(event.target.value);
  }

  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={searchWord}>
        <input
          type="search"
          placeholder="Search for a word"
          autoFocus="true"
          onChange={saveWord}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
