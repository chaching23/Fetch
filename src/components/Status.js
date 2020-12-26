import React from "react";

import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { colors } from "../theme";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import styles from "../theme/styles";

export default function Status(props) {
  let color = colors.primary;

  if (props.secondary) color = colors.secondary;

  return (
    <FontAwesome5
      // style={{ borderRadius: 20, margin: 10, marginVertical: 5 }}
      name="user-astronaut"
      size={25}
      color={
        props.x >= 0 && props.x < 5
          ? "#D1D0CE"
          : props.x >= 5 && props.x < 10
          ? "#EB8585"
          : props.x >= 10 && props.x < 15
          ? "#98FF98"
          : props.x >= 15 && props.x < 20
          ? "#FF99FF"
          : props.x >= 20 && props.x < 25
          ? "#00FFFF"
          : props.x >= 25 && props.x < 35
          ? "#0000FF"
          : props.x >= 35 && props.x < 45
          ? "#ADD8E6"
          : props.x >= 45 && props.x < 100
          ? "#800080"
          : props.x >= 100 && props.x < 150
          ? "#FFFF00"
          : props.x >= 150 && props.x < 200
          ? "#64E986"
          : props.x >= 200 && props.x < 300
          ? "#FF00FF"
          : props.x >= 300 && props.x < 400
          ? "#0000A0"
          : props.x >= 400 && props.x < 500
          ? "#43C6DB"
          : props.x >= 500 && props.x < 600
          ? "#808000"
          : props.x >= 600 && props.x < 1000
          ? "#EAC117"
          : props.x >= 1000 && props.x < 2000
          ? "#F87217"
          : props.x >= 2000 && props.x < 3000
          ? "#800000"
          : props.x >= 3000 && props.x < 4000
          ? "#FFFFCC"
          : props.x >= 4000 && props.x < 5000
          ? "#A23BEC"
          : props.x >= 6000 && props.x < 7000
          ? "#008080"
          : props.x >= 7000 && props.x < 9000
          ? "red"
          : props.x >= 9000 && props.x < 10000
          ? "black"
          : props.x >= 10000 && props.x < 15000
          ? "#82CAFF"
          : props.x >= 15000 && props.x < 20000
          ? "#FCDFFF"
          : props.x >= 20000 && props.x < 25000
          ? "#571B7E"
          : props.x >= 25000 && props.x < 30000
          ? "#98AFC7"
          : "#98FF98"
      }
    />
  );
}
