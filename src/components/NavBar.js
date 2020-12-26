import React from "react";
import styles from "../styles";

import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from "react-native";
import { colors } from "../theme";

const { width, height: winHeight } = Dimensions.get("window");

export default function NavBar(props) {
  let color = colors.primary;

  if (props.secondary) color = colors.secondary;

  return (
    <View style={[styles.row, { zIndex: 1 }]}>
      <TouchableOpacity
        style={[styles.buttonTabs, styles.center, { width: width * 0.17 }]}
        onPress={() => this.onIndexChange(0)}
        ref={(component) => (this.touchable = component)}
      >
        <Text
          style={[
            styles.bold,
            {
              color: props.state === "A" ? colors.primary : "#ACAFB8",
            },
          ]}
        >
          NEW
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonTabs,
          styles.row,
          styles.center,
          { width: width * 0.25 },
        ]}
        onPress={() => this.onIndexChange(1)}
      >
        <Text
          style={[
            styles.bold,
            {
              color: props.state === "E" ? colors.primary : "#ACAFB8",
            },
          ]}
        >
          BLAST-OFF
          {/* 🚀 */}
        </Text>

        {/* <Ionicons  color= { 'blue' }  name='ios-rocket' size={18} /> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonTabs,
          styles.row,
          styles.center,
          { width: width * 0.17 },
        ]}
        onPress={() => this.onIndexChange(2)}
      >
        <Text
          style={[
            styles.bold,
            {
              color: props.state === "B" ? colors.primary : "#ACAFB8",
            },
          ]}
        >
          LIKE
          {/* {" "} */}
        </Text>
        {/* <Text style={{ fontSize: 13 }}>💘</Text> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonTabs,
          styles.row,
          styles.center,
          { width: width * 0.17 },
        ]}
        onPress={() => this.onIndexChange(3)}
      >
        <Text
          style={[
            styles.bold,
            {
              color: props.state === "C" ? colors.primary : "#ACAFB8",
            },
          ]}
        >
          {/* {" "} */}
          FAILED
          {/* 🤡 */}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonTabs,
          styles.row,
          styles.center,
          { width: width * 0.17 },
        ]}
        onPress={() => this.onIndexChange(4)}
      >
        <Text
          style={[
            styles.bold,
            {
              color: props.state === "D" ? colors.primary : "#ACAFB8",
            },
          ]}
        >
          WILD
          {/* 😈 */}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
