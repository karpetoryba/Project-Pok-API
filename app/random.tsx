import React from "react";
import PokemonCard from "@/components/pokemonCard";
import useGetPokemons from "@/hook/useGetPokemons";
import { Text, View, StyleSheet } from "react-native";

const PokemonsRandomScreen = () => {
  const pokemons = useGetPokemons();

  // Fonction pour récupérer un Pokémon de manière aléatoire
  const getRandomPokemon = () => {
    if (pokemons.length === 0) return null; // Vérifie que la liste n'est pas vide
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    return pokemons[randomIndex];
  };

  const randomPokemon = getRandomPokemon();

  if (!randomPokemon) {
    return <Text style={styles.errorText}>Loading Pokémon data...</Text>;
  }

  return (
    <View style={styles.container}>
      <PokemonCard
        id={randomPokemon.id}
        pokedexId={randomPokemon.pokedexId}
        name={randomPokemon.name}
        image={randomPokemon.image}
        sprite={randomPokemon.sprite}
        slug={randomPokemon.slug}
        stats={randomPokemon.stats}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f9fa",
    flex: 1,
  },
  recipeCard: {
    borderRadius: 8,
    backgroundColor: "#ffffff",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: "#6c757d",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});

export default PokemonsRandomScreen;
