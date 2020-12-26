import React, { Component } from "react";
import styles from "../../theme/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";

import {
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
  Share,
  Alert,
  ActivityIndicator,
  Picker,
  Dimensions,
  Platform,
  Button,
  TextInput,
} from "react-native";

import { isEqual } from "lodash";

import {
  getUsers,
  getTrans,
  signup,
  uploadPost,
  updateScore,
  getUser,
} from "../../actions/user";

import { colors } from "../../theme";

import LinkModal from "../../components/LinkModal";

class FlatListHome extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      itemId: undefined,
      textAmount: "",
      textTo: "",
    };
  }

  componentDidMount() {}

  componentWillUnmount() {
    this.setState({ ...this.state, getMore: "none" });
  }

  handlePlayAndPause = () => {};

  handleVolume = () => {};

  blastPost = (post) => {
    const { uid } = this.props.user;
    if (post.blasts.includes(uid)) {
      this.props.unblastPost(post, "HOME", this.props.refresh);
    } else {
      this.props.blastPost(post, "HOME", this.props.refresh);
    }
  };

  dislikePost = (post) => {
    const { uid } = this.props.user;
    if (post.dislikes.includes(uid)) {
      this.props.undislikePost(post, "HOME", this.props.refresh);
    } else {
      this.props.dislikePost(post, "HOME", this.props.refresh);
    }
  };

  reportPost = (post) => {
    this.props.reportPost(post);
    alert("Post has been Flagged. Thank you!");
  };

  deletePost = (post) => {
    this.props.deletePost(post);
    this.props.getPosts();
    this.props.navigation.navigate("Home");
  };

  goToUser = (user) => {
    console.log("here");
    // this.props.getUser(user);
    this.props.navigation.navigate("Profile");
  };

  toggleModal = (item) => {
    this.setState({ selectedItem: item });
  };

  clearState = () => {
    this.setState({ ...this.state, getMore: "" });
  };

  render() {
    let screenWidth = Dimensions.get("window").width;
    let screenHeight = Dimensions.get("window").height;

    const { selectedItem } = this.state;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <FlatList
          ref={this.props.customRef}
          refreshing={false}
          data={this.props.data}
          onEndReachedThreshold={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            const x = item.totalScore;

            return (
              <View
                style={{
                  paddingVertical: 1,
                  borderBottomWidth: 1,
                  borderColor: colors.lightGray,
                }}
              >
                {/* <FullPost
                  item={item}
                  x={x}
                  selectedButton={this.props.selectedButton}
                  navigation={this.props.navigation}
                  user={this.props.user}
                  deletePost={this.deletePost}
                  blastPost={this.blastPost}
                  dislikePost={this.dislikePost}
                  reportPost={this.reportPost}
                  goToUser={this.goToUser}
                  toggleModal={(item) => this.toggleModal(item)}
                  textAmount={this.props.textAmount}
                  textTo={this.props.textTo}
                /> */}

                <View
                  style={{
                    backgroundColor: "white",
                    padding: "2%",
                    borderRadius: 5,
                  }}
                >
                  <View>
                    <View style={[styles.row, styles.space]}>
                      <View style={[styles.row, styles.center]}>
                        <View style={{ flex: 1 }}>
                          <View style={[styles.row, { alignItems: "center" }]}>
                            {this.props.selectedButton === "A" ? (
                              <View style={[styles.row]}>
                                <TouchableOpacity
                                  onPress={() => goToUser(item)}
                                >
                                  <Text
                                    style={[styles.username, { padding: 10 }]}
                                  >
                                    {item.name}{" "}
                                    <Text
                                      style={[
                                        styles.username,
                                        { color: "red" },
                                      ]}
                                    >
                                      {" "}
                                      Total balance:{" "}
                                    </Text>{" "}
                                    ${item.balance}
                                  </Text>
                                </TouchableOpacity>

                                <TextInput
                                  // value={this.state.textTo}
                                  onChangeText={(textTo) => {
                                    this.setState({ textTo });
                                  }}
                                  placeholder=" from "
                                  // placeholderTextColor="grey"
                                  placeholderTextColor={"grey"}
                                  style={styles.font}
                                  numberOfLines={1}
                                  maxLength={12}
                                  required
                                  style={[
                                    styles.category,
                                    {
                                      width: "17%",
                                      padding: 10,
                                      borderColor: "red",
                                      borderWidth: 1,
                                    },
                                  ]}
                                />

                                <MaterialIcons
                                  name="send"
                                  size={24}
                                  color="black"
                                  style={[
                                    {
                                      padding: 5,
                                    },
                                  ]}
                                />

                                <TextInput
                                  // value={this.state.textAmount}
                                  onChangeText={(textAmount) => {
                                    this.setState({ textAmount });
                                  }}
                                  placeholder=" $$$ "
                                  // placeholderTextColor="grey"
                                  placeholderTextColor={"grey"}
                                  style={styles.font}
                                  numberOfLines={1}
                                  maxLength={12}
                                  required
                                  style={[
                                    styles.category,
                                    {
                                      width: "17%",
                                      padding: 10,
                                      borderColor: "red",
                                      borderWidth: 1,
                                    },
                                  ]}
                                />

                                <Button
                                  onPress={() =>
                                    this.props.uploadPost(
                                      item.name,
                                      this.state.textAmount,
                                      this.state.textTo
                                    ) &&
                                    this.props.updateScore(
                                      item.uid,
                                      this.state.textAmount,
                                      this.state.textTo
                                    )
                                  }
                                  title="ADD"
                                  color="green"
                                />
                              </View>
                            ) : (
                              <TouchableOpacity>
                                <Text style={[styles.username]}>
                                  {item.to}{" "}
                                  <Text
                                    style={[styles.username, { color: "red" }]}
                                  >
                                    paid{" "}
                                  </Text>
                                  ${item.points}{" "}
                                  <Text
                                    style={[styles.username, { color: "red" }]}
                                  >
                                    to{" "}
                                  </Text>
                                  {item.name}
                                  <Text
                                    style={[styles.username, { color: "red" }]}
                                  >
                                    {" "}
                                    on{" "}
                                  </Text>
                                  {
                                    moment(item.date).format("MM/DD hh A")
                                    // .startOf("minute")
                                    // .fromNow()
                                  }{" "}
                                </Text>
                              </TouchableOpacity>
                            )}

                            <View style={{ flex: 1 }} />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />

        <LinkModal
          selectedItem={selectedItem}
          clear={() => this.setState({ selectedItem: null })}
          reportPost={this.reportPost}
        />
      </View>
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
    allTimeFeed: state.allTimeFeed,

    modal: state.modal,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlatListHome);
