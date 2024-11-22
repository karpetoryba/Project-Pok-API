import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import PokemonCard from "@/components/pokemonCard";
import useGetPokemonById from "@/hook/useGetPokemonsById";

const PokemonPage = () => {
  const pokemon = useGetPokemonById();
  //si la variable pokemon a une valeur fausse
  if (!pokemon) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFD700" />
        <Text style={styles.loadingText}>Loading Pokémon...</Text>
      </View>
    );
  }

  return (
    <View style={{ marginTop: 16 }}>
      <PokemonCard
        id={pokemon.id}
        pokedexId={pokemon.pokedexId}
        name={pokemon.name}
        image={pokemon.image}
        sprite={pokemon.sprite}
        slug={pokemon.slug}
        stats={pokemon.stats}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#000",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#FFD700",
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  loadingText: {
    fontSize: 16,
    marginTop: 8,
    color: "#FFD700",
  },
});

export default PokemonPage;
