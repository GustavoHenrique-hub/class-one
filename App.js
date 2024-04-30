import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          fontWeight: "bold",
          color: "white",
        }}
      >
        INDMO
      </Text>

      <Text
        style={{
          paddingTop: 20,
          fontSize: 30,
          color: "yellow",
        }}
      >
        HELLO WOLRD!
      </Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     marginHorizontal: 16,
//   },
//   title: {
//     textAlign: "center",
//     marginVertical: 8,
//   },
//   fixToText: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: "#FFFFF",
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });
