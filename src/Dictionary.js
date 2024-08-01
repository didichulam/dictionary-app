import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function fetchMeaning(response) {
    setResults(response.data[0]);
  }

  function saveWord(event) {
    setWord(event.target.value);
  }

  function searchWord(event) {
    event.preventDefault();
    //documentation : https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(fetchMeaning);
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
      <Results data={results} />
    </div>
  );
}
