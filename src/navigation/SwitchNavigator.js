import React from "react";
import AuthNavigator from "./AuthNavigator.js";
import { PostNavigator } from "./StackNavigator";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from "../screens/Home/HomeScreen";

import { createStackNavigator } from "react-navigation-stack";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../theme";
import styles from "../theme/styles";

import {
  Ionicons,
  Feather,
  FontAwesome,
  Octicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";


const SwitchNavigator = createSwitchNavigator(
  {
   
    Home: HomeScreen,

  },

  {
    initialRouteName: "Home",
  }
);

export default SwitchNavigator;
