import React from "react";

import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { colors } from "../theme";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import Status from "./Status";
import styles from "../theme/styles";

export default function Astro(props) {
  let color = colors.primary;
  let item = props.item;
  let x = props.x;

  if (props.secondary) color = colors.secondary;

  return (
    <View>
    {item.bluriii === true ?null :
    item.status === false ? (
      <View style={{ borderRadius: 20, margin: 10, marginVertical: 5 }}>
        <Status x={x} />
      </View>
    ) : !item.profilePic ? (
      <FontAwesome5
        style={{ borderRadius: 20, margin: 10, marginVertical: 5 }}
        name="user-astronaut"
        size={25}
        color={colors.secondary}
      />
    ) : (
      <TouchableOpacity 
      onPress={() => goToUser(item)}
      >
        <Image
          style={[styles.roundImagePosts]}
          source={{ uri: item.profilePic }}
        />
      </TouchableOpacity>
    )}
  </View>

    // <View>
    //   {item.status === false ? (
    //     <View style={{ borderRadius: 20, margin: 10, marginVertical: 5 }}>
    //       <Status x={x} />
    //     </View>
    //   ) : !item.profilePic || item.bluriii === true ? (
    //     <FontAwesome5
    //       style={{ borderRadius: 20, margin: 10, marginVertical: 5 }}
    //       name="user-astronaut"
    //       size={25}
    //       color={colors.secondary}
    //     />
    //   ) : (
    //     <TouchableOpacity onPress={() => goToUser(item)}>
    //       <Image
    //         style={[styles.roundImagePosts]}
    //         source={{ uri: item.profilePic }}
    //       />
    //     </TouchableOpacity>
    //   )}
    // </View>
  );
}
