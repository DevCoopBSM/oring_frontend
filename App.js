import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
export default function Start() {
  const [text, setText] = useState();
  const onChangeText = (inputText) => {
    setText(inputText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>총회 시작</Text>
      <Text style={styles.text}>시작 전, 학번을 기입해주세요!</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="ex) 1129"
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
    marginBottom: 12,
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 8,
    border: "2px #B9BBB9 solid",
  },
});
