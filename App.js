import { View, Text } from "react-native";
import { styles } from "./class/Style-Externo";


export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>INDMO</Text>

      <Text style={styles.text}>HELLO WOLRD!</Text>
    </View>
  );
}
