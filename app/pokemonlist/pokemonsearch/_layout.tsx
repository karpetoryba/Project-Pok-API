import { Stack } from "expo-router";

export default function PokemonsLayout() {
  return (
    <Stack>
      <Stack.Screen name="search/[query]" options={{ title: "Recherche" }} />
      <Stack.Screen
        name="(tabs)"
        options={{ title: "Tabs", headerShown: false }}
      />
    </Stack>
  );
}
