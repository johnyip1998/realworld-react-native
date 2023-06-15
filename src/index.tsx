import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function Main() {
  return (
    <View style={styles.container}>
      <Text>I am running this project with yarn package manager.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
