import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [pokemon, setpokemon] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    setpokemon(response.data.results);
  };

  return (
    <div>
      <button onClick={getData}>clik me !!</button>
      <h1>{pokemon}</h1>
      {pokemon.map((elm, idx) => (
        <h1 key={idx}>{elm.name}</h1>
      ))}
    </div>
  );
};

export default App;
