import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import GamesList from "./screens/GamesList";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LinearGradient
        colors={["purple", "cornflowerblue"]}
        style={styles.container}
        start={{ x: -0.1, y: -0.2 }}
        end={{ x: 0.7, y: 1 }}
      >
        <GamesList />
        <StatusBar style="auto" />
      </LinearGradient>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
