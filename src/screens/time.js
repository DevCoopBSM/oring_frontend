import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import emoji from "./src/assets/vote/1.png";
export default function Time() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={emoji} />
      <Text style={styles.text}>총회까지 남은 시간</Text>
      <Text style={styles.time}>00:03:12:54</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    marginTop: 16,
    color: "black",
    fontSize: 14,
    fontFamily: "NanumSquareOTF",
    fontWeight: "700",
    lineHeight: 20,
    wordWrap: "break-word",
  },
  time: {
    marginTop: 8,
    color: "black",
    fontSize: 32,
    fontFamily: "NanumSquareOTF",
    fontWeight: "800",
    lineHeight: 40,
    wordWrap: "break-word",
  },
});
