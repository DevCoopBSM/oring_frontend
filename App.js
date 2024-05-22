import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Pressable,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import axios from "axios";
import arrow from "./src/assets/arrow.png";

export default function Start() {
  const [stuNumber, setStuNumber] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeText = (inputStuNumber) => {
    setStuNumber(inputStuNumber);
  };

  const onSubmit = () => {
    console.log("학번:", stuNumber);
    setModalVisible(true);
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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={stuNumber}
          placeholder="ex) 1129"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("PDF")}
        >
          <Image style={styles.logo} source={arrow} />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>식별 코드 인식 실패</Text>
              <Text style={styles.modalText}>
                식별 코드를 다시 확인해주세요.
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>닫기</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 25,
    paddingRight: 25,
  },
  input: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#B9BBB9",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 24,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#F49E15",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonClose: {
    backgroundColor: "#F49E15",
    marginLeft: 20,
    marginTop: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitle: {
    marginBottom: 24,
    fontFamily: "NanumSquareOTF",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.20)",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 16,
    height: 14,
  },
});
