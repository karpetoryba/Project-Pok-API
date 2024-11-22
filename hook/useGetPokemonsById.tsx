//Ce hook est conçu pour obtenir des informations
//sur un pokémon spécifique à partir de son ID.

import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  pokedexId: number;
  name: string;
  image: string;
  sprite: string;
  slug: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
}
// Exporter le hook pour qu'il puisse être utilisé dans d'autres parties de l'application.
export default function useGetPokemonById() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  // Obtenir le paramètre `id` de la route actuelle en utilisant `useLocalSearchParams`.
  const { id } = useLocalSearchParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://pokebuildapi.fr/api/v1/pokemon/${id}`
      );
      const data = await response.json();

      setPokemon(data);
    })();
  }, [id]);

  return pokemon;
}
