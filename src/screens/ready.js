import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import emoji from "../assets/vote/2.png";
export default function Ready() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={emoji} />
      <Text style={styles.title}>총회가 준비 중이에요!</Text>
      <Text style={styles.text}>
        시작 전, 총회 자료집 PDF를 읽어보는 건 어떨까요?
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PDF")}
      >
        <Text style={styles.buttonText}>PDF 다운받기</Text>
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
    marginTop: 8,
    marginBottom: 8,
    color: "black",
    fontSize: 16,
    fontFamily: "NanumSquareOTF",
    fontWeight: "400",
    lineHeight: 24,
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
  button: {
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
