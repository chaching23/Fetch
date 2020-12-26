import React from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import { createAppContainer, NavigationEvents } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  HomeNavigator,
  SearchNavigator,
  ActivityNavigator,
  PostNavigator,
  ProfileNavigator,
} from "./StackNavigator";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { createStackNavigator } from "react-navigation-stack";
import { colors } from "../theme";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,

      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Home",
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity
            onPress={() => {
              if (navigation.state.index === 0) {
                const navigationInRoute = navigation.getChildNavigation(
                  navigation.state.routes[0].key
                );

                if (
                  !!navigationInRoute &&
                  navigationInRoute.isFocused() &&
                  !!navigationInRoute.state.params &&
                  !!navigationInRoute.state.params.scrollToTop
                ) {
                  navigationInRoute.state.params.scrollToTop();
                } else {
                  navigation.navigate("Home");
                }
              }
              navigation.popToTop();
            }}
          >
            {focused ? (
              <Image
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                  // borderRadius: SIZE / 4,
                  // marginBottom: "50%",
                }}
                source={require("../assets/Home.png")}
              />
            ) : (
              <Image
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                }}
                source={require("../assets/Home-o.png")}
              />
            )}
          </TouchableOpacity>
        ),
      }),
    },

    Search: {
      screen: SearchNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Explore",
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            {focused ? (
              <Image
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                  // borderRadius: SIZE / 4,
                  // marginBottom: "50%",
                }}
                source={require("../assets/Compass.png")}
              />
            ) : (
              <Image
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                }}
                source={require("../assets/Compass-o.png")}
              />
            )}
          </TouchableOpacity>
        ),
      }),
    },
    PostFake: {
      screen: () => {
        return null;
      },

      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Post",

        tabBarIcon: ({ focused }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Post");
            }}
            // underlayColor="#2882D8"
            // style={{
            //   alignItems: "center",
            //   justifyContent: "center",
            //   width: 40,
            //   height: 40,
            //   borderRadius: 40 / 4,
            //   marginBottom: "100%",
            // }}
          >
            <Image
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 80,
                height: 80,
                borderRadius: 80 / 4,
                marginBottom: "50%",
              }}
              source={require("../assets/rocket-button3.png")}
            />
          </TouchableOpacity>
        ),
      }),
    },
    Activity: {
      screen: ActivityNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Activity ",
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Activity")}>
            <View>
              {focused ? (
                <Image
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 25,
                    height: 25,
                    // borderRadius: SIZE / 4,
                    // marginBottom: "50%",
                  }}
                  source={require("../assets/Bell.png")}
                />
              ) : (
                <Image
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 25,
                    height: 25,
                  }}
                  source={require("../assets/Bell-o.png")}
                />
              )}
            </View>
          </TouchableOpacity>
        ),
      }),
    },

    MyProfile: {
      screen: ProfileNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "My Profile",
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity onPress={() => navigation.navigate("MyProfile")}>
            {focused ? (
              <Image
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                  // borderRadius: SIZE / 4,
                  // marginBottom: "50%",
                }}
                source={require("../assets/User.png")}
              />
            ) : (
              <Image
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                }}
                source={require("../assets/User-o.png")}
              />
            )}
          </TouchableOpacity>
        ),
      }),
    },
  },

  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#262F56",
      inactiveTintColor: "#262F56",
      style: {
        // paddingTop: 10,
        height: 60,
        backgroundColor: "#EDF1FA",
        // backgroundColor: "black",

        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // borderTopWidth: 0,
      },
    },
  }
);

export default createAppContainer(
  createStackNavigator(
    {
      TabNavigator: {
        screen: TabNavigator,
      },
      Post: {
        screen: PostNavigator,
      },
    },
    {
      headerMode: "none",
      mode: "modal",
    }
  )
);
