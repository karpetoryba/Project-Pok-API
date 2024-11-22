// le hook est conçu pour sélectionner 6 types pokémon au hasard à partir d'une liste commune
import { useState, useEffect } from "react";
import useGetPokemons from "./useGetPokemons";
import { PokemonDTO } from "@/dto/PokemonDTO";

export default function useGetRandom6Pokemons() {
  const pokemons = useGetPokemons();
  const [selectedPokemons, setSelectedPokemons] = useState<PokemonDTO[]>([]);

  useEffect(() => {
    const shuffledPokemons = pokemons.sort(() => 0.5 - Math.random());
    setSelectedPokemons(shuffledPokemons.slice(0, 6));
  }, [pokemons]);

  return selectedPokemons;
}
