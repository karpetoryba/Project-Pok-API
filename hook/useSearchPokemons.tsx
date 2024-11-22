//Ce crochet peut être utilisé pour rechercher
//des pokémons par nom ou selon d'autres critères.

import { useEffect, useState } from "react";

export default function useSearchPokemons(query: string) {
  const [pokemons, setPokemons] = useState<
    {
      id: string; // Используем id вместо pokedexId
      name: string; // Используем name вместо strPokemon
      image: string; // Поле для изображения
      type: string[]; // Типы покемонов
    }[]
  >([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://pokebuildapi.fr/api/v1/pokemon?search=${query}`
        );
        const data = await response.json();

        // Обрабатываем и нормализуем данные
        const normalizedPokemons = data.map((pokemon: any) => ({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.image,
          type: pokemon.types.map((type: any) => type.name), // Преобразуем типы
        }));

        setPokemons(normalizedPokemons);
      } catch (error) {
        console.error("Ошибка при загрузке покемонов:", error);
        setPokemons([]); // Устанавливаем пустой массив при ошибке
      }
    })();
  }, [query]);

  return pokemons;
}
