import React from "react";

import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { colors } from "../theme";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import styles from "../theme/styles";

export default function Username(props) {
  let color = colors.primary;
  let item = props.item;
  let goToUser = props.goToUser;

  if (props.secondary) color = colors.secondary;

  return (
    <View style={[styles.row, { alignItems: "center" }]}>
    {item.bluriii === true ? null : (
      <View>
        <TouchableOpacity onPress={() => goToUser(item)}>
          <Text style={[styles.username]}>{item.username}</Text>
        </TouchableOpacity>
      </View>
    )}

    <TouchableOpacity>
      {item.bluriii === true ? null : item.status === true ? (
        <MaterialCommunityIcons
          style={item.bluriii === true ? null : { marginLeft: 5 }}
          name="check-decagram"
          size={20}
          color={colors.primary}
        />
      ) : null}
    </TouchableOpacity>
  </View>
  
    // <View style={[styles.row, { alignItems: "center" }]}>
    //   {item.bluriii === true ? null : (
    //     <View>
    //       <TouchableOpacity onPress={() => goToUser(item)}>
    //         <Text style={[styles.username]}>{item.username}</Text>
    //       </TouchableOpacity>
    //     </View>
    //   )}

    //   <TouchableOpacity>
    //     {item.status === true ? (
    //       <MaterialCommunityIcons
    //         style={item.bluriii === true ? null : { marginHorizontal: 5 }}
    //         name="check-decagram"
    //         size={20}
    //         color={colors.primary}
    //       />
    //     ) : null}
    //   </TouchableOpacity>
    // </View>
  );
}
