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

const LoginScreen = ({navigation}) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleScreenPress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, backgroundColor: "#EFF9FE", display: "flex", alignItems: "center" }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 80, marginBottom: 90 }}>
          Bienvenue
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
              <Text style={{ marginLeft: 10, marginBottom: 10 }}>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={(num) => setPassword(num)}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity style={styles.passwordForgotView}>
              <Text style={{ color: "#53BFF8" }}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%" }}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={{ color: "white", fontWeight : 'bold' }}>Se connecter</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
              <Text style={{ marginHorizontal: 10, color: "gray" }}>or</Text>
              <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.buttonStyleCreateAccount}>
              <Text style={{ color: "black", fontWeight : 'bold' }}>Creer un compte</Text>
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
    borderRadius: 50,
    height: 50,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#53BFF8",
  },
  buttonStyleCreateAccount: {
    borderRadius: 50,
    height: 50,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
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
export default LoginScreen;
