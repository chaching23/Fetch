import React, { useState, useEffect } from "react";
import styles from "../theme/styles";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import moment from "moment";
import VideoPlayer from "../inView/VideoPlayer";
import { Audio } from "expo-av";
import {
  TouchableOpacity,
  View,
  Alert,
  Text,
  Image,
  Modal,
  Dimensions,
} from "react-native";

import { getUser } from "../actions/user";

import { colors } from "../theme";
import Astro from "./Astro";
import BottomRow from "./BottomRow";
import { get } from "lodash";
import { RNVoiceRecorder } from "react-native-voice-recorder";
import audioPlay from "../assets/bg.gif";
import audioPause from "../assets/bg.png";
import audioPlayW from "../assets/wg.gif";
import audioPauseW from "../assets/wg.png";
import { BlurView } from "expo-blur";

import InViewPort from "../inView/InViewPort";
import useNavigationChange from "../utils/useNavigationChange";
import Username from "./Username";

const { width, height: winHeight } = Dimensions.get("window");

export default function FullPost(props) {
  // state = { modalVisible: false };
  let item = props.item;
  let index = props.index;
  let user = props.user;
  let navigation = props.navigation;
  let x = props.x;
  //let soundObj = new Audio.Sound();

  let reportPost = props.reportPost;
  let goToUser = props.goToUser;
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [state, setState] = useState({});

  useNavigationChange(props, async () => {
    await Audio.setIsEnabledAsync(false);
    await Audio.setIsEnabledAsync(true);
  });

  const initializeSound = async () => {
    await Audio.setIsEnabledAsync(true);
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
    });
    try {
      const { sound: soundObj, status } = await Audio.Sound.createAsync(
        { uri: item.postAudio },
        {},
        updateScreenForSoundStatus
      );
      setSound(soundObj);
    } catch (error) {}
  };
  useEffect(() => {
    if (item.postAudio) {
      initializeSound();
    }
    return () => {
      console.log("unmounted");
      if (sound) {
        console.log("unloaded==>>>>");
        sound.unloadAsync();
        setSound(null);
      }
    };
  }, []);

  /*useEffect(() => {
    const unsub = navigation.addListener("focus", (e) => {
      console.log("got here==>>>>", e);
    });
    return unsub;
  }, [navigation]);*/

  const updateScreenForSoundStatus = (status) => {
    if (status.isLoaded) {
      setIsPlaying(status.isPlaying);
      return setState({
        loaded: true,
        soundDuration: status.durationMillis,
        soundPosition: status.positionMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        rate: status.rate,
        muted: status.isMuted,
        volume: status.volume,
        shouldCorrectPitch: status.shouldCorrectPitch,
        isPlaybackAllowed: true,
      });
    } else {
      console.log("could not loaded");
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
      return setState({
        soundDuration: null,
        soundPosition: null,
        isPlaybackAllowed: false,
      });
    }
  };

  const playAudio = async () => {
    if (sound) {
      await Audio.setIsEnabledAsync(false);
      await Audio.setIsEnabledAsync(true);
      setIsPlaying(true);

      sound.playAsync();
      sound.setIsLoopingAsync(true);
    }
  };

  const stopAudio = () => {
    if (sound) {
      setIsPlaying(false);
      sound.stopAsync();
    }
  };

  function getPlaybackTimestamp() {
    // alert(this.recordedSound);
    if (state.soundPosition != null && state.soundDuration != null) {
      return `${getMMSSFromMillis(state.soundPosition)} / ${getMMSSFromMillis(
        state.soundDuration
      )}`;
    }
    return `${getMMSSFromMillis(0)} / ${getMMSSFromMillis(0)}`;
  }

  function getMMSSFromMillis(millis) {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    // const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = (number) => {
      const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
      return string;
    };
    return padWithZero(seconds);
    // padWithZero(minutes) + ":" +
    // padWithZero(seconds);
  }

  return (
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
                {props.selectedButton === "A" ? (
                  <TouchableOpacity onPress={() => goToUser(item)}>
                    <Text style={[styles.username]}>
                      {item.name}{" "}
                      <Text style={[styles.username, { color: "red" }]}>
                        {" "}
                        Total balance:{" "}
                      </Text>{" "}
                      ${item.balance}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity>
                    <Text style={[styles.username]}>
                      {item.name}{" "}
                      <Text style={[styles.username, { color: "red" }]}>
                        paid{" "}
                      </Text>
                      ${item.points}{" "}
                      <Text style={[styles.username, { color: "red" }]}>
                        to{" "}
                      </Text>
                      {item.to}
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
  );
}
