import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
export default function Start() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>총회 시작</Text>
      <Text style={styles.text}>시작 전, 학번을 기입해주세요!</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
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
});
