import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import emoji from "./src/assets/vote/5.png";
export default function Develop() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={emoji} />
      <Text style={styles.title}>아직 개발 중이에요!</Text>
      <Text style={styles.text}>정식 배포까지 조금만 더 기다려 주세요. :)</Text>
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
    marginTop: 8,
    color: "black",
    fontSize: 14,
    fontFamily: "NanumSquareOTF",
    fontWeight: "700",
    lineHeight: 20,
    wordWrap: "break-word",
  },
  title: {
    marginTop: 16,
    color: "black",
    fontSize: 22,
    fontFamily: "NanumSquareOTF",
    fontWeight: "800",
    lineHeight: 28,
    wordWrap: "break-word",
  },
});
