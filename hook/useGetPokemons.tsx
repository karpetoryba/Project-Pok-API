//Ce hook est conçu pour obtenir une liste de tous les pokémon.
//Il peut envoyer une requête à l'API
//et retourner une liste de pokémon ou leurs données de base.

import { useEffect, useState } from "react";

const useGetPokemons = () => {
  // Créer un état `pokemons` pour stocker la liste des pokemons.
  // Par défaut, il s'agit d'un tableau vide.
  const [pokemons, setPokemons] = useState([]);
  //appeler une fonction asynchrone
  useEffect(() => {
    (async () => {
      const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon");

      const pokemons = await response.json();
      //// Mise à jour de l'état des `pokemons` en utilisant les données reçues de l'API
      setPokemons(pokemons);
    })();
  }, []);

  return pokemons;
};

export default useGetPokemons;
