import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import axios from "axios";

export default function Start() {
  const [stuNumber, setStuNumber] = useState("");

  const onChangeText = (inputStuNumber) => {
    setStuNumber(inputStuNumber);
  };

  const onSubmit = () => {
    console.log("학번:", stuNumber);
    axios
      .post("http://10.150.150.39:8080/api/vote/voting", {
        stuNumber: stuNumber,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>총회 시작</Text>
      <Text style={styles.text}>시작 전, 학번을 입력해주세요!</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={stuNumber}
        placeholder="ex) 1129"
      />
      <Button title="제출" onPress={onSubmit} />
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
  text: {
    marginBottom: 12,
    color: "black",
    fontSize: 14,
    fontFamily: "NanumSquareOTF",
    fontWeight: "700",
    lineHeight: 20,
  },
  title: {
    marginTop: 16,
    marginBottom: 8,
    color: "black",
    fontSize: 22,
    fontFamily: "NanumSquareOTF",
    fontWeight: "800",
    lineHeight: 28,
  },
  input: {
    height: 40,
    paddingHorizontal: 8,
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 12,
    paddingBottom: 12,
  },
});
