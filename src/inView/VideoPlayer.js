import React, { Component } from "react";
import styles from "../theme/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
  Button,
  View,
  Image,
  FlatList,
  Card,
  TouchableOpacity,
  Share,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import {
  getNextLikes,
  getNextDislikes,
  getNextWilds,
  getNextPosts,
  getCategory,
  deletePost,
  getPosts,
  getLikePosts,
  getDislikePosts,
  getWildPosts,
  likePost,
  unlikePost,
  dislikePost,
  undislikePost,
  wildPost,
  unwildPost,
  reportPost,
} from "../actions/post";
import { updateTab, getUser } from "../actions/user";
import debounce from "lodash/debounce";
import orderBy from "lodash/orderBy";
import { LinearGradient } from "expo-linear-gradient";
import { Video } from "expo-av";
import * as Permissions from "expo-permissions";
import PropTypes from "prop-types";
import InViewPort from "./InViewPort.js";

import { FontAwesome5 } from "@expo/vector-icons";
class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mute: false,
      shouldPlay: false,
      paused: false,
      inView: true,
    };
  }

  componentDidMount() {
    // this.props.navigation.isFocused()
    this._unsubscribe = this.props.navigation.addListener("didBlur", () => {
      this.setState({ ...this.state, inView: false });
    });

    this._subscribe = this.props.navigation.addListener("didFocus", () => {
      this.setState({ ...this.state, inView: true });
    });
  }

  componentWillUnmount() {
    this._unsubscribe.remove();
    this._subscribe.remove();
  }

  pauseVideo = () => {
    this.setState({ ...this.state, shouldPlay: false });
  };

  playVideo = () => {
    this.setState({ ...this.state, shouldPlay: true });
  };

  handlePlaying = (isVisible) => {
    isVisible ? this.playVideo() : this.pauseVideo();
  };

  handlePlayAndPause = () => {
    this.setState((prevState) => ({
      shouldPlay: !prevState.shouldPlay,
    }));
  };

  handleVolume = () => {
    this.setState((prevState) => ({
      mute: !prevState.mute,
    }));
  };

  render() {
    return (
      <View>
        <InViewPort
          onChange={this.handlePlaying}
          // isShouldPlay={this.state.shouldPlay}
          // _unsubscribe={this._unsubscribe}
          inView={this.state.inView}
          // isPaused={this.state.paused}
        >
          <View>
            <Video
              style={
                this.props.source[0].uri != null
                  ? styles.postVideo
                  : styles.none
              }
              source={this.props.source[0]}
              shouldPlay={this.state.shouldPlay}
              isMuted={this.state.mute}
              paused={this.state.paused}
              isLooping
              ref={(ref) => {
                this.video = ref;
              }}
              rate={1.0}
              volume={1.0}
              resizeMode="cover"
            />

            <View
              style={
                this.props.source[0].uri != null
                  ? styles.controlBar
                  : styles.none
              }
            >
              <MaterialIcons
                name={this.state.mute ? "volume-mute" : "volume-up"}
                size={45}
                color="white"
                onPress={this.handleVolume}
              />
            </View>

            <View
              style={
                this.props.source[0].uri != null ? styles.play : styles.none
              }
            >
              <MaterialIcons
                name={this.state.shouldPlay ? "pause" : "play-arrow"}
                size={45}
                color="white"
                onPress={this.handlePlayAndPause}
              />
            </View>

            {this.props.source[1] && this.props.source[1].uri ? (
              <Image
                style={
                  this.props.source[1].uri != null
                    ? styles.homeFeedPhoto
                    : styles.none
                }
                source={this.props.source[1]}
              />
            ) : null}
          </View>
        </InViewPort>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
