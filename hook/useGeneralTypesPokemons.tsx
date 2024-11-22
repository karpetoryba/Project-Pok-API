// hook est conçu pour extraire les données Pokémon de l'API
//et gérer le processus de chargement des données.

import { useState, useEffect } from "react";

const useGeneralTypesPokemons = () => {
  const [pokemons, setPokemons] = useState([]); // Liste des Pokémon
  const [loading, setLoading] = useState(true); // État de chargement

  useEffect(() => {
    // Fonction asynchrone pour récupérer les données des Pokémon
    const fetchPokemons = async () => {
      // Lancer la requête vers l'API des Pokémon
      const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon");

      // Récupérer les données au format JSON
      const data = await response.json();
      setPokemons(data); // Stocker les données dans l'état

      setLoading(false); // Changer l'état de chargement après la fin de la requête
    };

    fetchPokemons(); // Appel de la fonction de récupération
  }, []); // Ce useEffect s'exécute une seule fois, lors du montage du composant

  return { pokemons, loading };
};

export default useGeneralTypesPokemons;
