import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import emoji from "../assets/vote/4.png";
export default function Finish() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={emoji} />
      <Text style={styles.title}>총회 종료</Text>
      <Text style={styles.text}>모두 수고하셨습니다.</Text>
      <Text style={styles.text}>회의 내용 외에 의견이 있다면 알려주세요!</Text>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.SendBtn}
          onPress={() => navigation.navigate("Send")}
        >
          <Text style={styles.SendBtnText}>의견 보내기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.HomeBtn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.HomeBtnText}>홈으로 돌아가기</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 28,
    flexDirection: "row",
    gap: 8,
  },
  SendBtn: {
    backgroundColor: "#F49E15",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  SendBtnText: {
    color: "white",
    fontSize: 12,
    fontFamily: "NanumSquareOTF",
    fontWeight: "400",
    lineHeight: 16,
    wordWrap: "break-word",
  },
  HomeBtn: {
    borderWidth: 2,
    borderColor: "#B9BBB9",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  HomeBtnText: {
    color: "black",
    fontSize: 12,
    fontFamily: "NanumSquareOTF",
    fontWeight: "400",
    lineHeight: 16,
    wordWrap: "break-word",
  },
});
