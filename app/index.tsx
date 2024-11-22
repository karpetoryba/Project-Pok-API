import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import useGetRandom6Pokemons from "@/hook/useGetRandom6Pokemons";
import useGetRandom6GeneralTypes from "@/hook/useGetRandom6GeneralTypes";

// Composant pour afficher 6 Pokémon aléatoires avec une barre de recherche
const RandomPokemons = () => {
  const router = useRouter();
  const randomPokemons = useGetRandom6Pokemons();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState(randomPokemons);

  React.useEffect(() => {
    setFilteredPokemons(
      randomPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, randomPokemons]);

  if (randomPokemons.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Chargement...</Text>
      </View>
    );
  }

  return (
    <View>
      <TextInput
  style={styles.searchInput}
  placeholder="Rechercher un Pokémon"
  placeholderTextColor="#555"
  value={searchQuery}
  onChangeText={setSearchQuery}
/>
<TouchableOpacity
  style={styles.button}
  onPress={() => router.push(`/pokemonlist`)}
>
  <Text style={styles.buttonText}>Rechercher</Text>
</TouchableOpacity>
      ))}
    </View>
  );
};

// Composant pour afficher les Pokémon par type général
const RandomTypesPokemons = () => {
  const router = useRouter();
  const randomTypes = useGetRandom6GeneralTypes();

  if (randomTypes.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Chargement...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={randomTypes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push(`/pokemonlist/pokemondetails/${item.id}`)}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={styles.pokemonName}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

// Composant principal avec mise en page
export default function RootLayout() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/p.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Bienvenue dans le monde des Pokémon</Text>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => router.push(`/random`)}
          >
            Voir ton Pokémon
          </Text>
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>6 Pokémon aléatoires</Text>
        <RandomPokemons />
        <Text style={styles.sectionTitle}>6 Types de Pokémon</Text>
        <RandomTypesPokemons />
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push(`/pokemonlist`)}
        >
          <Text style={styles.buttonText}>Voir la liste des Pokémon</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 Pokémon App. Tous droits réservés.
        </Text>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    backgroundColor: "#FFC107",
    borderBottomWidth: 2,
    borderBottomColor: "#FFB300",
  },
  logo: {
    width: 120,
    height: 120,
  },
  scrollContent: {
    padding: 15,
    paddingBottom: 60,
  },
  searchInput: {
    flex: 1,
    height: 45,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#FFF",
    backgroundColor: "#1E1E1E",
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#FFC107",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    backgroundColor: "#1E1E1E",
    borderWidth: 1,
    borderColor: "#FFC107",
    shadowColor: "#FFC107",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  pokemonName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFC107",
  },
  pokemonType: {
    fontSize: 14,
    color: "#AAAAAA",
  },
  title: {
    marginTop: 10,
    fontSize: 22,
    color: "#FFC107",
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
    color: "#FFF",
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: "#FFC107",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#121212",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
    color: "#AAA",
  },
  footer: {
    padding: 10,
    backgroundColor: "#1E1E1E",
    borderTopWidth: 1,
    borderTopColor: "#FFC107",
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#FFC107",
  },
});
