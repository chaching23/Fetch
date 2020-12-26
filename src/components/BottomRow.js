import React from "react";
import styles from "../theme/styles";
import { AntDesign, Entypo } from "@expo/vector-icons";
import moment from "moment";
import VideoPlayer from "../inView/VideoPlayer";
import { TouchableOpacity, View, Alert, Text, Image } from "react-native";
import { colors } from "../theme";

import { FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function BottomRow(props) {
  let color = colors.primary;

  if (props.secondary) color = colors.secondary;

  return (
    <View style={[styles.bottomRow]}>
      <View
        style={[
          styles.row,
          {
            justifyContent: "space-around",
          },
        ]}
      >
        <View
          style={[
            styles.row,
            {
              alignSelf: "flex-start",
              justifyContent: "space-around",
            },
          ]}
        >
          <Text style={{ color: "#5C5858", paddingTop: 5 }}>
            {moment(props.item.date).startOf("minute").fromNow()}{" "}
          </Text>
        </View>

        <View
          style={[
            styles.row,
            {
              alignSelf: "flex-start",
              justifyContent: "space-around",
            },
          ]}
        >
          <TouchableOpacity
            style={[styles.row, styles.center, { marginHorizontal: 5 }]}
            onPress={() => {
              props.navigation.navigate("Show", props.item);
            }}
          >
            <Image
              style={styles.homeButtons}
              source={require("../assets/Chat.png")}
            />
            <Text style={{ color: "black" }}>
              {props.item.commentsCount == undefined
                ? "0"
                : props.item.commentsCount}{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.row,
            {
              alignSelf: "flex-end",
              justifyContent: "space-around",
            },
          ]}
        >

        {/* <View> */}
          <TouchableOpacity
            style={[styles.row, styles.center, { marginHorizontal: 7.5
              , width:25, height:25 }]}
            onPress={() => {
              props.item.dislikes.includes(props.user.uid)
                ? null
                : props.blastPost(props.item);
            }}
          >
            <Ionicons
              name="ios-rocket"
              size={20}
              color={
                props.item.blasts.includes(props.user.uid)
                  ? colors.primary
                  : colors.darkGrey
              }
            />
          </TouchableOpacity>

          <Text style={{ color: "black", padding: 5 }}>
            {props.item.postBlastScore}
          </Text>

          <TouchableOpacity
            style={[styles.row, styles.center, {marginHorizontal: 7.5
              , width:25, height:25 }]}
            onPress={() => {
              props.item.blasts.includes(props.user.uid)
                ? null
                : props.dislikePost(props.item);
            }}
          >
            <Ionicons
              name="ios-rocket"
              size={20}
              color={
                props.item.dislikes.includes(props.user.uid)
                  ? colors.secondary
                  : colors.darkGrey
              }
              style={{ transform: [{ rotate: "180deg" }] }}
            />
          </TouchableOpacity>

          {props.user.uid === props.item.uid ? (
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  //title
                  "Caution",
                  //body
                  "are you sure you would like to delete ?",
                  [
                    {
                      text: "Yes",
                      onPress: () => props.deletePost(props.item),
                    },
                    {
                      text: "No",
                      style: "cancel",
                    },
                  ],
                  { cancelable: false }
                )
              }
            >
              <AntDesign
                color={"red"}
                style={{ margin: 5 }}
                name="delete"
                size={20}
              />
            </TouchableOpacity>
          ) : props.user.username === "k@$h" ? (
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  //title
                  "Caution",
                  //body
                  "are you sure you would like to delete ?",
                  [
                    {
                      text: "Yes",
                      onPress: () => props.deletePost(props.item),
                    },
                    {
                      text: "No",
                      style: "cancel",
                    },
                  ],
                  { cancelable: false }
                )
              }
            >
              <AntDesign
                color={"red"}
                style={{ margin: 5 }}
                name="delete"
                size={20}
              />
            </TouchableOpacity>
          ) : null}
        

        {/* <View>
            <Text>Total: 25</Text>
          </View>

          </View> */}
        </View>
        
      </View>
    </View>
  );
}
