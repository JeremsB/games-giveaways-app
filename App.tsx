import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import GamesList from "./screens/GamesList";
import { GiveawayDetail } from "./screens/GiveawayDetail";

export default function App() {
  const queryClient = new QueryClient();
  const Stack = createNativeStackNavigator();

  const mainTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <NavigationContainer theme={mainTheme}>
      <QueryClientProvider client={queryClient}>
        <LinearGradient
          colors={["purple", "cornflowerblue"]}
          style={styles.container}
          start={{ x: -0.1, y: -0.2 }}
          end={{ x: 0.7, y: 1 }}
        >
          <Stack.Navigator>
            <Stack.Screen
              name="Gamelist"
              component={GamesList}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Detail" component={GiveawayDetail} options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </LinearGradient>
        <StatusBar style="auto" />
      </QueryClientProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
