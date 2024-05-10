import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import emoji from "./src/assets/vote/3.png";
export default function Start() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={emoji} />
      <Text style={styles.title}>총회 시작</Text>
      <Text style={styles.text}>2024년 5월 28일자 총회가 시작 되었습니다!</Text>
      <Text style={styles.text}>
        학생들은 안내에 따라 투표를 진행해 주세요.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("start")}
      >
        <Text style={styles.buttonText}>투표 시작하기</Text>
      </TouchableOpacity>
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
    color: "black",
    fontSize: 14,
    fontFamily: "NanumSquareOTF",
    fontWeight: "700",
    lineHeight: 20,
    wordWrap: "break-word",
  },
  title: {
    marginTop: 16,
    marginBottom: 8,
    color: "black",
    fontSize: 22,
    fontFamily: "NanumSquareOTF",
    fontWeight: "800",
    lineHeight: 28,
    wordWrap: "break-word",
  },
  button: {
    marginTop: 16,
    backgroundColor: "#F49E15",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontFamily: "NanumSquareOTF",
    fontWeight: "400",
    lineHeight: 16,
    wordWrap: "break-word",
  },
});
