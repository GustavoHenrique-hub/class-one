import React from "react";
import Dashboard from "./src/type-weather/pages/dashboard";
import Search from "./src/type-weather/pages/search";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Nunito-Bold": require("./src/type-weather/assets/fonts//Nunito-Bold.ttf"),
    "Nunito-ExtraBold": require("./src/type-weather/assets/fonts/Nunito-ExtraBold.ttf"),
    "Nunito-Regular": require("./src/type-weather/assets/fonts/Nunito-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return <Dashboard />;
}
