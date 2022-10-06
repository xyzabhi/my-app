import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.red}>-{"\u20B9"}600</Text>
      <Text style={styles.green}>+{"\u20B9"}900</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  red: {
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: "center",
    width: Dimensions.get("window").width,
    backgroundColor: "#ffd9d6",
    color: "red",
    fontFamily: "sans-serif",
    fontWeight: "900",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderTopColor: "black",
    borderTopWidth: 1,
  },
  green: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: "center",
    width: Dimensions.get("window").width,
    color: "green",
    backgroundColor: "#efffed",
    fontFamily: "sans-serif",
    fontWeight: "900",
  },
});
