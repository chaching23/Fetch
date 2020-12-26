import React from "react";
import {
  Text,
  Alert,
  View,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/Home/HomeScreen.js";

import { StackViewTransitionConfigs } from "react-navigation-stack";

import {
  Ionicons,
  Feather,
  FontAwesome,
  Octicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import { NavigationActions } from "react-navigation";
import * as Permissions from "expo-permissions";
import { colors } from "../theme";
import styles from "../theme/styles";
import { get } from "lodash";
import { connect } from "react-redux";

export const HomeNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
          title: "Home",

          headerTitle: (
            <View
              style={{
                marginLeft: Platform.OS === "ios" ? 0 : 100,
                // marginTop:10
                // width:Dimensions.get("window").width
              }}
            >
              <Text
                style={[
                  {
                    fontSize: 25,
                    color: colors.primary,
                    paddingHorizontal: 10,
                    fontFamily: "sfProBold",
                    //                     textShadowColor: colors.secondary,
                    // textShadowOffset: { width: -2, height: 2 },
                    // textShadowRadius: 10,
                  },
                ]}
                onPress={() =>
                  Alert.alert(
                    //title
                    ":} Welcome to bluriii {:",
                    //body
                    "1) the more clicks you get... the higher your score 🚀🤣☠️ \n 2) top 10% of users are influencers & are verified with a blue check mark ☑️\n 3) You can post & comment with the option of not showing your username 🙈🙉\n 4) Anonymous posts still increase your score, just as normal post  \n 🕵️‍♂️🕵️‍♀️\n 5) 😇 Play Safe & Goodluck 😈 \n **************************************** \n"
                  )
                }
              >
                bluriii
              </Text>
            </View>
          ),

          headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
              <FontAwesome
                style={{ marginLeft: 20 }}
                name={"camera"}
                color={colors.secondary}
                size={26}
              />
            </TouchableOpacity>
          ),
          headerRight: (
            <TouchableOpacity
              style={{
                // height:30, width:30,
                marginRight: 20,
              }}
              onPress={() => navigation.navigate("Rules")}
            >
              <Octicons name="info" size={26} color={colors.secondary} />
            </TouchableOpacity>
          ),
        }),
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          borderBottomColor: colors.lightGray,
          borderBottomWidth: 1,
          // backgroundColor: "black",
        },
      },
    }
  )
);
