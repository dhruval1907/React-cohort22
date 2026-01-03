import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [pokemon, setpokemon] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    console.log(response.data.results[0].name);
    setpokemon(response.data.results[0].name);
  };

  return (
    <div>
      <h1>{pokemon}</h1>
      {pokemon.map(function(elm, idx) {
        return <h1 key={idx}>{elm}</h1>;
      })}
      <button
        onClick={() => {
          getData();
        }}
      >
        clik me !!
      </button>
    </div>
  );
};

export default App;
