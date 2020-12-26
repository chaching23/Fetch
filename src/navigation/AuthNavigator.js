import React from "react";

import HomeScreen from "../screens/Home/HomeScreen";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
  }

  // {
  //   tabBarOptions: {
  //     style: {
  //       borderColor: "white",
  //     },
  //   },
  // }
);

export default createAppContainer(StackNavigator);
