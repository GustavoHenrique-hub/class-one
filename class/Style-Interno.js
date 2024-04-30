import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";


export default function App() {

  const [fontsLoaded] = useFonts({
    'Jacquard12Charted-Regular': require('./assets/fonts/Jacquard12Charted-Regular.ttf'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>INDMO</Text>

      <Text style={styles.text}>HELLO WOLRD!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    fontFamily: 'Jacquard12Charted-Regular'
  },
  text: {
    paddingTop: 20,
    fontSize: 30,
    color: "yellow",
    fontFamily: 'Jacquard12Charted-Regular'
  },
});
