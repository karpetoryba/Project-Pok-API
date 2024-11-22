import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
// Ce code contrôle la navigation dans l'application à l'aide d'onglets.
//Chaque écran de l'application est associé à un onglet spécifique,
//et RootLayout est responsable de leur organisation et de leurs options d'affichage.

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bug-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pokemonliste"
        options={{
          title: "Liste",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="arrow-forward-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="random"
        options={{
          title: "Random",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="arrow-forward-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
