import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const callPoke = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => {
        const results = response.data.results;
        console.log(response);
        setPokemon(results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <p className="pageTitle">THE POKEMON API</p>
        <button onClick={callPoke}>GET THE LIST</button>
        {pokemon.map((p, index) => (
          <div key={index} className="pokemonList">
            <p className="pokemonName">
              #{index + 1} - {p.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
