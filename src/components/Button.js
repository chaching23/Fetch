import React from "react";

import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { colors } from "../theme";

export default function Button(props) {
  let color = colors.primary;

  if (props.secondary) color = colors.secondary;
  if (props.facebook) color = "#4267B2";

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={StyleSheet.flatten([
          styles.container,
          {
            backgroundColor: color,
            shadowColor: "#00f",
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowRadius: 4,
            shadowOpacity: 0.3,
          },
        ])}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 24 }}>
          {props.title.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    // textShadowColor: "blue",
    // textShadowOffset: { width: -2, height: 2 },
    // textShadowRadius: 10,
    // paddingHorizontal: 25,
  },
});
