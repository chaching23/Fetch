import React, { Component } from "react";
import styles from "../../theme/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  EvilIcons,
  MaterialIcons,
  Octicons,
  Feather,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  SimpleLineIcons,
} from "@expo/vector-icons";
import {
  Text,
  View,
  Image,
  FlatList,
  Card,
  TouchableOpacity,
  TouchableNativeFeedback,
  Alert,
  ActivityIndicator,
  Picker,
  Dimensions,
  Platform,
  Button,
  TextInput,
} from "react-native";
import {
  getUsers,
  getTrans,
  signup,
  uploadPost,
  updateScore,
  getUser,
} from "../../actions/user";

import FlatListHome from "./FlatListHome";
const { width, height: winHeight } = Dimensions.get("window");

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import moment from "moment";
import { AdMobBanner } from "expo-ads-admob";

import { TabView, SceneMap } from "react-native-tab-view";
import { colors } from "../../theme";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

const initialLayout = { width: Dimensions.get("window").width };

class Home extends React.Component {
  state = {
    index: 0,
    selectedButton: "A",
    refresh: "REFRESH",
    getMore: "getNextPosts",
    animating: true,
    posts: "new",
    textUser: "",
    textTrans: "",
    textAmount: "",
    textTo: "",
  };

  componentDidMount() {
    this.props.getUsers();
    this.props.getTrans();
  }

  scrollToTop = () => {
    if (this.state.index === 0) {
      this.news.scrollToOffset({ animated: true, offset: 0 });
    }

    if (this.state.index === 1) {
      this.blast.scrollToOffset({ animated: true, offset: 0 });
    }
  };

  onIndexChange = (i) => {
    switch (i) {
      case 0:
        this.setState({ ...this.state, selectedButton: "A" });
        break;
      case 1:
        this.setState({ ...this.state, selectedButton: "E" });
        break;
      case 2:
        this.setState({ ...this.state, selectedButton: "B" });
        break;

      default:
        break;
    }

    this.setState(
      {
        index: i,
      },
      () => {
        if (i === 0) {
          if (this.props.newFeed.feed === null) {
            this.props.getUsers();
          }
          this.setState({
            ...this.state,
            refresh: "REFRESH",
            getMore: "getNextNew",
            animating: true,
          });
        }
        if (i === 1) {
          this.setState({
            ...this.state,
            refresh: "REFRESH_HOT",
            getMore: "getNextHot",
            animating: true,
          });
          if (this.props.hotFeed === null) {
            this.props.getTrans();
          }
        }
      }
    );
  };

  NewFeed = () => {
    return (
      <FlatListHome
        customRef={(e) => {
          this.news = e;
        }}
        color={colors.primary}
        user={this.props.user}
        navigation={this.props.navigation}
        data={this.props.newFeed ? this.props.newFeed.feed : []}
        selectedButton={this.state.selectedButton}
        textAmount={this.state.textAmount}
        textTo={this.state.textTo}
      ></FlatListHome>
    );
  };

  HotFeed = () => {
    return (
      <FlatListHome
        customRef={(e) => {
          this.blast = e;
        }}
        color={colors.primary}
        user={this.props.user}
        navigation={this.props.navigation}
        data={this.props.hotFeed ? this.props.hotFeed.feed : []}
        selectedButton={this.state.selectedButton}
      ></FlatListHome>
    );
  };

  render() {
    const { userFeed, transFeed, allTimeFeed } = this.props;

    const routes = [
      { key: "first", title: "new" },
      { key: "second", title: "Hot" },
    ];

    const renderScene = SceneMap({
      first: this.NewFeed,
      second: this.HotFeed,
    });

    return (
      <TabView
        onTabPress={({ route, preventDefault }) => {
          this.scrollToTop;
        }}
        renderTabBar={(props) => {
          return (
            <View style={[styles.center, { marginTop: 50 }]}>
              <View
                style={[
                  styles.row,
                  {
                    borderBottomWidth: 1,
                    borderColor: colors.lightGray,
                    width: width,
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    styles.buttonTabs,
                    styles.center,
                    styles.row,
                    { width: screenWidth * 0.45, marginLeft: 30 },
                  ]}
                  onPress={() => this.onIndexChange(0) && this.props.getUsers()}
                  ref={(component) => (this.touchable = component)}
                >
                  <MaterialIcons
                    name="new-releases"
                    size={15}
                    color={
                      this.state.selectedButton === "A"
                        ? colors.primary
                        : "#ACAFB8"
                    }
                  />
                  <Text
                    style={[
                      styles.bold,
                      styles.font,
                      {
                        color:
                          this.state.selectedButton === "A"
                            ? colors.primary
                            : "#ACAFB8",
                      },
                    ]}
                  >
                    Users
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.buttonTabs,
                    styles.row,
                    styles.center,
                    { width: screenWidth * 0.45 },
                  ]}
                  onPress={() => this.onIndexChange(1) && this.props.getTrans()}
                >
                  <MaterialIcons
                    name="whatshot"
                    size={16}
                    color={
                      this.state.selectedButton === "E"
                        ? colors.primary
                        : "#ACAFB8"
                    }
                  />
                  <Text
                    style={[
                      styles.bold,
                      styles.font,
                      {
                        color:
                          this.state.selectedButton === "E"
                            ? colors.primary
                            : "#ACAFB8",
                      },
                    ]}
                  >
                    Trasnactions
                  </Text>
                </TouchableOpacity>
              </View>

              {this.state.selectedButton === "A" ? (
                <View
                  style={[
                    styles.textCategoryNoPhoto,
                    {
                      width: "100%",
                      flexWrap: "wrap",
                      borderColor: "#EDF1FA",
                      borderBottomWidth: 1,
                    },
                  ]}
                >
                  <EvilIcons name="plus" size={24} color={"red"} />
                  <TextInput
                    onFocus={this.categoryHandleFocus}
                    onBlur={this.categoryOnBlur}
                    value={this.state.textUser}
                    onChangeText={(textUser) => {
                      this.setState({ textUser });
                    }}
                    placeholder=" add a new user "
                    // placeholderTextColor="grey"
                    placeholderTextColor={"grey"}
                    style={styles.font}
                    numberOfLines={1}
                    maxLength={12}
                    required
                    style={[styles.category, { width: "50%" }]}
                  />

                  <TouchableOpacity
                    onPress={() => this.props.signup(this.state.textUser)}
                    title="ADD"
                    color="red"
                  >
                    <Text>ADD</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          );
        }}
        // swipeEnabled
        navigationState={{ index: this.state.index, routes }}
        renderScene={renderScene}
        onIndexChange={this.onIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getUsers,
      getTrans,
      signup,
      uploadPost,
      updateScore,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user,

    newFeed: state.newFeed,
    hotFeed: state.hotFeed,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
