import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function fetchPhotos(response) {
    setPhotos(response.data.photos);
  }
  function fetchMeaning(response) {
    setResults(response.data[0]);
  }

  function saveWord(event) {
    setWord(event.target.value);
  }

  function searchWord() {
    //documentation : https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(fetchMeaning);

    let pexelsApiKey =
      "1ja8q5Wz07M7XxN8rDdyQn1sYjH5AK0gUdTN1Pek4bufoL3By0AcfYez";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;

    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(fetchPhotos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }

  function load() {
    setLoaded(true);
    searchWord();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a word"
              autoFocus={true}
              onChange={saveWord}
              className="space"
              defaultValue={props.defaultWord}
            />
            <input type="submit" value="Search" className="button" />
          </form>
        </section>
        <Results data={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
