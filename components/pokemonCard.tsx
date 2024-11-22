import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
// interface - pour la structure de notre obect
interface PokemonCardProps {
  id: number;
  pokedexId: number;
  name: string;
  image: string;
  sprite: string;
  slug: string;
  stats: {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  id,
  pokedexId,
  name,
  image,
  sprite,
  slug,
  stats,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.pokedexId}>#{pokedexId}</Text>
      </View>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.stats}>
        <Text style={styles.statsTitle}>Stats</Text>
        <Text style={styles.statText}>Attack: {stats.attack}</Text>
        <Text style={styles.statText}>Defense: {stats.defense}</Text>
        <Text style={styles.statText}>
          Special Attack: {stats.special_attack}
        </Text>
        <Text style={styles.statText}>
          Special Defense: {stats.special_defense}
        </Text>
        <Text style={styles.statText}>Speed: {stats.speed}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#000",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: "#FFD700",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFD700",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
  },
  pokedexId: {
    fontSize: 18,
    color: "#FFF",
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginVertical: 8,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#FFD700",
  },
  stats: {
    marginTop: 8,
    width: "100%",
    paddingTop: 8,
    borderTopWidth: 1,
    borderColor: "#FFD700",
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#FFD700",
  },
  statText: {
    fontSize: 14,
    color: "#FFF",
  },
});

export default PokemonCard;
