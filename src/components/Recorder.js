import React, { useState, useEffect } from "react";
import styles from "../theme/styles";
import { SafeAreaView } from "react-native-safe-area-context";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { NavigationEvents } from "react-navigation";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import { get } from "lodash";
import { Video, Audio } from "expo-av";
import { RNVoiceRecorder } from "react-native-voice-recorder";
import {
  getTrending,
  clearPic,
  clearVideo,
  clearPost,
  updateCategory,
  updateDescription,
  updateLocation,
  uploadPost,
  updatePhoto,
  updateVideo,
  blurSwitch,
  updateAudio,
} from "../actions/post";
import {
  Switch,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import { uploadPhoto, uploadVideo, uploadAudio } from "../actions";
const { width, height: winHeight } = Dimensions.get("window");
import Button from "./Button";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../theme";
import audioPlay from "../assets/bg.gif";
import audioPause from "../assets/bg.png";
import audioPlayW from "../assets/wg.gif";
import audioPauseW from "../assets/wg.png";

import { transcode } from "react-native-audio-transcoder";
const recordingSettings = {
  android: {
    extension: ".m4a",
    outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
    audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
    sampleRate: 44100,
    numberOfChannels: 2,
    bitRate: 128000,
  },
  ios: {
    extension: ".m4a",
    outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
    audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
    sampleRate: 44100,
    numberOfChannels: 2,
    bitRate: 128000,
    linearPCMBitDepth: 16,
    linearPCMIsBigEndian: false,
    linearPCMIsFloat: false,
  },
};

const Recorder = (props) => {
  const [recording, setRecording] = useState(null);
  const [recordedSound, setRecordedSound] = useState(null);
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(null);
  const [recorded, setRecorded] = useState(false);
  const [soundPosition, setSoundPosition] = useState(null);
  const [soundDuration, setSoundDuration] = useState(null);

  useEffect(() => {
    Audio.setIsEnabledAsync(true);
    return function cleanup() {
      Audio.setIsEnabledAsync(false);
    };
  }, []);

  useEffect(() => {
    console.log("props.stateChanged", props.stateChanged);
    if (props.stateChanged) {
      onClearRecord();
      props.resetStateChanged();
    }
  }, [props.stateChanged]);

  useEffect(() => {
    const current = Number(_getRecordingTimestamp());
    if (isRecording && current > 14) {
      onRecordEnd();
    }
  }, [recordingDuration]);

  const _updateScreenForRecordingStatus = (status) => {
    if (status.canRecord) {
      setIsRecording(status.isRecording);
      setRecordingDuration(status.durationMillis);
    } else if (status.isDoneRecording) {
      setIsRecording(false);
      setRecordingDuration(status.durationMillis);

      //if (!this.state.isLoading) {
      // this._stopRecordingAndEnablePlayback();
      // }
    }
  };

  function _getMMSSFromMillis(millis) {
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

    // return padWithZero(minutes) + ":" + padWithZero(seconds);
  }

  function _getRecordingTimestamp() {
    if (recordingDuration != null) {
      return `${_getMMSSFromMillis(recordingDuration)}`;
    }
    return `${_getMMSSFromMillis(0)}`;
  }
  function _getPlaybackTimestamp() {
    // alert(this.recordedSound);
    if (
      recordedSound != null &&
      soundPosition != null &&
      soundDuration != null
    ) {
      return `${_getMMSSFromMillis(soundPosition)} / ${_getMMSSFromMillis(
        soundDuration
      )}`;
    }
    return `${_getMMSSFromMillis(0)} / ${_getMMSSFromMillis(
      recordingDuration
    )}`;
  }
  const _updateScreenForSoundStatus = (status) => {
    if (status.isLoaded) {
      setSoundDuration(status.durationMillis);
      setSoundPosition(status.positionMillis);
      setIsPlaying(status.isPlaying);
    } else {
      setSoundDuration(null);
      setSoundPosition(null);

      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };

  const onRecord = async () => {
    const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if (status === "granted") {
      if (recordedSound !== null) {
        await recordedSound.unloadAsync();
        recordedSound.setOnPlaybackStatusUpdate(null);
        setRecordedSound(null);

        setRecorded(false);
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: false,
        staysActiveInBackground: true,
      });
      if (recording !== null) {
        recording.setOnRecordingStatusUpdate(null);
        // await recording.stopAndUnloadAsync();
        setRecording(null);
      }
      await Audio.setIsEnabledAsync(false);
      await Audio.setIsEnabledAsync(true);
      const _recording = new Audio.Recording();
      await _recording.prepareToRecordAsync(recordingSettings);
      _recording.setOnRecordingStatusUpdate(_updateScreenForRecordingStatus);

      await _recording.startAsync();
      setRecording(_recording);
    }
  };

  const onRecordEnd = async () => {
    try {
      await recording.stopAndUnloadAsync();
    } catch (error) {
      // Do nothing -- we are already unloaded.
    }

    const info = await FileSystem.getInfoAsync(recording.getURI());
    const audio = { uri: recording.getURI() };
    setAudio(audio);
    setRecorded(true);
    props.attachAudio(audio);
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      playsInSilentLockedModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true,
    });
    const { sound, status } = await recording.createNewLoadedSoundAsync(
      {
        isLooping: true,
        isMuted: false,
        volume: 1,
      },
      _updateScreenForSoundStatus
    );
    setRecordedSound(sound);
  };

  const onPlayPausePressed = () => {
    if (recordedSound != null) {
      if (isPlaying) {
        recordedSound.pauseAsync();
      } else {
        recordedSound.playAsync();
      }
    }
  };

  const onClearRecord = async () => {
    console.log(recording, recordedSound);
    //const recStatus = await recording.getStatusAsync();
    //const soundStatus = await recordedSound.getStatusAsync();
    // if (recordedSound) {
    //   await recordedSound.unloadAsync();
    // }

    // if (recording) {
    //   await recording.stopAndUnloadAsync();
    // }
    await Audio.setIsEnabledAsync(false);
    await Audio.setIsEnabledAsync(true);
    props.attachAudio(null);
    setRecordedSound(null);
    setRecording(null);
    setIsRecording(false);
    setIsPlaying(false);
    setAudio(null);
    setRecordingDuration(null);
    setSoundDuration(null);
    setRecorded(false);
  };

  return (
    <View
      style={[
        styles.row,
        {
          justifyContent: "space-around",
          position: "relative",
        },
      ]}
    >
      {recorded ? (
        <View
          style={{
            position: "absolute",
            top: -190,
            left: -100,
            right: 0,

            width: width + 200,
            paddingVertical: 10,
            paddingHorizontal: 80,
            paddingTop: 10,

            backgroundColor: "white",
          }}
        >
          <View style={{ height: 125, overflow: "hidden" }}>
            {isPlaying ? (
              <Image
                style={{ top: -25, resizeMode: "cover", alignSelf: "center" }}
                source={audioPlayW}
              ></Image>
            ) : (
              <View>
                <Image style={{ top: -40 }} source={audioPauseW}></Image>
              </View>
            )}
          </View>

          <View
            style={[
              styles.row,
              {
                width: width - 50,
                justifyContent: "space-between",
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
              <TouchableOpacity onPress={onPlayPausePressed}>
                <FontAwesome
                  name={isPlaying ? "pause" : "play"}
                  size={24}
                  color={colors.secondary}
                  style={{ marginLeft: 10, padding: 5 }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={[
                styles.row,
                {
                  alignSelf: "flex-end",
                  justifyContent: "space-around",
                  padding: 5,
                },
              ]}
            >
              <TouchableOpacity onPress={onClearRecord}>
                <FontAwesome name={"trash"} size={24} color="red" />
              </TouchableOpacity>
              <Text
                style={{
                  color: colors.primary,
                  fontWeight: "bold",
                  marginRight: 10,
                  padding: 5,
                }}
              >
                {_getPlaybackTimestamp()}
              </Text>
            </View>
          </View>
        </View>
      ) : null}

      <TouchableOpacity
        style={[styles.row]}
        onPress={isRecording ? onRecordEnd : onRecord}
      >
        <FontAwesome
          name={isRecording ? "pause" : "microphone"}
          size={26}
          color="red"
          color={colors.secondary}
        />
        <Text
          style={{
            color: colors.primary,
            padding: 2.5,
            marginLeft: 5,
            fontWeight: "bold",
          }}
        >
          {_getRecordingTimestamp()}/15
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Recorder;
