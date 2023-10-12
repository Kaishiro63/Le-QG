import React from "react";
import { View, Text } from "react-native";

const LoginScreen = ({ navigation }) => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: randomColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text onPress={() => navigation.navigate("Dashboard")}>Login</Text>
    </View>
  );
};

export default LoginScreen;
