import { View, Text, StyleSheet } from "react-native";


export default function App() {

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
  },
  text: {
    paddingTop: 20,
    fontSize: 30,
    color: "yellow",
  },
});
