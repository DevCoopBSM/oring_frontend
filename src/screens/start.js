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
import arrow from "../assets/arrow.png";

export default function Start({ navigation }) {
  const [stuCode, setStuCode] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeText = (inputStuCode) => {
    setStuCode(inputStuCode);
  };

  const onSubmit = () => {
    console.log("Sending data to server: ", { stuCode });
    axios
      .post("https://oring.bsm-aripay.kr/api/auth/login", { stuCode: stuCode })
      .then((response) => {
        console.log("Server response: ", response.data);
        // 서버 응답 데이터가 예상하는 형식인지 확인
        if (response.data && response.data.stuNumber) {
          // 응답 데이터가 올바르면 "Ready" 화면으로 이동
          navigation.navigate("Ready");
        } else {
          // 응답 데이터가 예상한 형식이 아니면 실패로 처리
          console.log("Login failed: ", response.data);
          setModalVisible(true);
        }
      })
      .catch((error) => {
        if (error.response) {
          // 서버가 응답했지만, 상태 코드가 범위 2xx 이외인 경우
          console.error("Error response: ", error.response.data);
          console.error("Error status: ", error.response.status);
          console.error("Error headers: ", error.response.headers);
        } else if (error.request) {
          // 요청이 만들어졌지만, 서버로부터 응답을 받지 못한 경우
          console.error("Error request: ", error.request);
        } else {
          // 요청을 설정하는 중에 발생한 에러
          console.error("Error message: ", error.message);
        }
        console.error("Error config: ", error.config);
        setModalVisible(true);
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
          value={stuCode}
          placeholder="ex) 1129"
        />
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
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
                식별 코드를 다시 확인해주세요
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
    flex: 1,
    padding: 10,
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
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
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
