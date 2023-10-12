import React from "react";
import { View, Text } from "react-native";

const ActivityScreen = () => {
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
      <Text>ActivityScreen</Text>
    </View>
  );
};

export default ActivityScreen;
