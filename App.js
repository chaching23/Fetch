import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import SwitchNavigator from "./src/navigation/SwitchNavigator.js";
import reducer from "./src/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);
import db from "./src/config/firebase";
import { decode, encode } from "base-64";
import { YellowBox } from "react-native";
import _ from "lodash";
import { AppLoading } from "expo";
import * as Linking from "expo-linking";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppIntroSlider from "react-native-app-intro-slider";
import AsyncStorage from "@react-native-community/async-storage";
import { colors } from "./src/theme";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}



function Demo(props) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function load() {
      const post = await db
        .collection("posts")
        .where("id", "==", _.get(props, "navigation.state.params.id"))
        .get();
      if (post.docs.length > 0) {
        props.navigation.setParams({ item: post.docs[0] });
        setItem(post.docs[0]);
      } else {
        props.navigation.goBack();
      }
    }
    load();
  }, []);

  if (!item) return <AppLoading />;

  return <Show navigation={props.navigation} />;
}

Demo.navigationOptions = {
  headerMode: "shown",
  title: "Show",
  headerStyle: {
    backgroundColor: "white",
  },
  headerTitle: (
    <Text
      style={{
        fontSize: 30,
        color: colors.primary,
        fontWeight: "bold",

        paddingHorizontal: 25,

        fontFamily: "sfProBold",
      }}
    >
      bluriii
    </Text>
  ),

  headerLeft: (
    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <Ionicons
        style={styles.icon}
        name={"ios-arrow-back"}
        size={30}
        color={"black"}
      />
    </TouchableOpacity>
  ),
};

const MainNavigator = createAppContainer(
  createStackNavigator(
    {
      switch: {
        screen: SwitchNavigator,
        navigationOptions: {
          headerMode: "none",
          headerShown: false,
        },
      },
      post: { screen: Demo, path: "post/:id" },
    },
    {
      headerMode: "screen",
    }
  )
);

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
    showRealApp: false,
  };

  async componentDidMount() {
    const value = await this.getData();
    if (value) {
      this.setState({ showRealApp: true });
    }
    await Font.loadAsync({
      // snell: require("./src/assets/fonts/Snell.ttf"),
      snellB: require("./src/assets/fonts/SnellB.otf"),

      sfPro: require("./src/assets/fonts/SFProDisplay-Regular.ttf"),
      sfProBold: require("./src/assets/fonts/SFProOTF/SF-Pro-Display-Bold.otf"),
    });

    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.style = { fontFamily: "sfPro" };

    this.setState({ fontsLoaded: true });
  }

  storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@bluriii_onBoarded", value);
    } catch (e) {}
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@bluriii_onBoarded");
      if (value !== null) {
        return value;
      }
    } catch (e) {}
  };

  _renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _keyExtractor = (item) => item.title;

  _onDone = () => {
    this.setState({ showRealApp: true });
    this.storeData("true");
  };

  render() {
    const prefix = Linking.makeUrl("/");

    if (this.state.fontsLoaded == false) return <AppLoading />;

    return (
      <SafeAreaProvider>
        <Provider store={store}>
        
            <MainNavigator uriPrefix={prefix} />
     
   
        
        </Provider>
      </SafeAreaProvider>
    );
  }
}
