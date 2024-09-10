import { useEffect, useState } from "react";
import axios from "axios";

const DisplayPokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const callPoke = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <p className="pageTitle">THE POKEMON API</p>
      <button onClick={callPoke}>GET A LIST</button>
    </>
  );
};

export default Test;
