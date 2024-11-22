import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";

const PokemonsComponent = () => {
  const [pokemons, setPokemons] = useState<
    {
      pokedexId: string;
      strPokemon: string;
      strInstructions: string;
      strCategory: string;
    }[]
  >([]);

  const local = useLocalSearchParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
        const data = await response.json();
        setPokemons(data);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    })();
  }, []);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.pokedexId}>
          <h3>{pokemon.strPokemon}</h3>
          <p>{pokemon.strInstructions}</p>
          <p>Category: {pokemon.strCategory}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonsComponent;
