import * as React from "react";
import { StatusBar } from "expo-status-bar";
import * as Progress from "react-native-progress";
import { RadioButton } from "react-native-paper";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export default function Finish() {
  const [checked, setChecked] = React.useState("first");
  return (
    <View style={styles.container}>
      <Progress.Bar
        style={styles.progressBar}
        progress={0.3}
        width={350}
        color="#F49E15"
      />
      <Text style={styles.title}>첫번째 안건</Text>
      <Text style={styles.text}>
        여기는부가설명이들어갈거고요 저기위에두번째안건이라쓰인곳은 안건주제가
        들어갈텐데음글쎄요그만큼들어갈까
        어머님들엄청길게써서이거쭉쭉쭉쭉쭉들어가야할거같은데 음 원래 이런거 다
        직접 쳐봐야 얼마나 될지 안느거 아시죠 짧게 쓸수도 잇긴해 근데
        혹시모르잖음
      </Text>
      <View style={styles.buttons}>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="agree"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text style={styles.radioButtonText}>동의합니다</Text>
        </View>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="disagree"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text style={styles.radioButtonText}>반대합니다</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("vote")}
      >
        <Text style={styles.buttonText}>투표하기</Text>
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
    paddingLeft: 28,
    paddingRight: 28,
    textAlign: "center",
    color: "black",
    fontSize: 16,
    fontFamily: "NanumSquareOTF",
    fontWeight: "400",
    lineHeight: 24,
    wordWrap: "break-word",
  },
  title: {
    color: "black",
    fontSize: 22,
    fontFamily: "NanumSquareOTF",
    fontWeight: "800",
    lineHeight: 28,
    wordWrap: "break-word",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#F49E15",
    paddingVertical: 16,
    paddingHorizontal: 156,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontFamily: "NanumSquareOTF",
    fontWeight: "400",
    lineHeight: 16,
    wordWrap: "break-word",
  },
  progressBar: {
    marginBottom: 80,
  },
  buttons: {
    marginTop: 100,
    display: "flex",
    gap: 8,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontFamily: "NanumSquareOTF",
    color: "black",
  },
});
