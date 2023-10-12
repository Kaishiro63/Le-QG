import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const RegisterScreen = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleScreenPress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, backgroundColor: "#EFF9FE", display: "flex", alignItems: "center" }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 80, marginBottom: 80 }}>
          Créer un compte
        </Text>
        <View style={styles.containerForm}>
          <View>
            <View style={styles.containerInput}>
              <Text style={{ marginLeft: 10, marginBottom: 10 }}>Numero de téléphone</Text>
              <TextInput
                style={styles.input}
                onChangeText={(num) => setPhone(num)}
                value={phone}
                placeholder="Phone"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.containerInput}>
              <Text style={{ marginLeft: 10, marginBottom: 10 }}>Username</Text>
              <TextInput
                style={styles.input}
                onChangeText={(num) => setUsername(num)}
                value={username}
                placeholder="username"
              />
            </View>
            <View style={styles.containerInput}>
              <Text style={{ marginLeft: 10, marginBottom: 10 }}>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={(num) => setPassword(num)}
                value={password}
                placeholder="Password"
                keyboardType="text"
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Creer un compte</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: "#D9DADE",
    borderWidth: 1,
    width: 300,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  buttonStyle: {
    marginTop: 25,
    borderRadius: 50,
    height: 50,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#53BFF8",
  },
  containerForm: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    height: "40%",
  },
  passwordForgotView: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: 20,
  },
});
export default RegisterScreen;
