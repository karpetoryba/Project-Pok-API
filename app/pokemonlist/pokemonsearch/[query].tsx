import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import useSearchPokemons from "@/hook/useSearchPokemons";

export default function PokemonSearchScreen() {
  const { query } = useLocalSearchParams(); // Получаем параметр из URL
  const router = useRouter(); // Для навигации
  const [searchQuery, setSearchQuery] = useState<string>(query || ""); // Инициализация строки запроса
  const pokemons = useSearchPokemons(searchQuery); // Используем кастомный хук для получения данных

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    // Обновляем URL при изменении строки запроса
    router.replace(`/pokemonlist/query?query=${text}`);
  };
  //
  return (
    <View style={styles.page}>
      {/* Поле ввода для поиска */}
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Rechercher un Pokémon..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={handleSearchChange}
        />
      </View>

      {/* Список покемонов */}
      <FlatList
        data={pokemons}
        style={styles.pokemonList}
        contentContainerStyle={styles.pokemonListContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.pokemonCard}
            onPress={() => router.push(`/pokemons/${item.id}`)} // Переход на страницу покемона
          >
            <Image source={{ uri: item.image }} style={styles.pokemonImage} />
            <Text style={styles.pokemonText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Aucun Pokémon trouvé.</Text>
        }
      />
    </View>
  );
}

// Стили компонента
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#FFC107",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: "#FFF",
    backgroundColor: "#1E1E1E",
  },
  pokemonList: {
    flex: 1,
  },
  pokemonListContainer: {
    paddingBottom: 16,
  },
  pokemonCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    borderColor: "#FFC107",
    borderWidth: 1,
    backgroundColor: "#1E1E1E",
    padding: 10,
  },
  pokemonImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  pokemonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});
