import React from "react";

import { TouchableOpacity, View, Modal, Text, Clipboard } from "react-native";
import * as Linking from "expo-linking";
import { colors } from "../theme";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

export default function LinkModal(props) {
  let selectedItem = props.selectedItem;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={selectedItem != null}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={{
              ...styles.openButton,
              backgroundColor: "white",

              marginBottom: 20,
            }}
            onPress={() => {
              props.clear();
              const newLink = Linking.makeUrl(`post/${selectedItem.id}`, {
                postId: selectedItem.id,
              });

              Clipboard.setString(newLink);
            }}
          >
            <Text style={[styles.textStyle, { color: colors.darkBlue }]}>
              Copy & Share Link
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.openButton,
              backgroundColor: colors.secondary,
              backgroundColor: "white",
            }}
            onPress={() => {
              props.reportPost(selectedItem);
              props.clear();
            }}
          >
            <Text style={[styles.textStyle, { color: colors.secondary }]}>
              Report Post
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.clear();
            }}
            style={{
              position: "absolute",
              alignSelf: "flex-end",
              padding: 10,
            }}
          >
            <AntDesign name="closecircle" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
