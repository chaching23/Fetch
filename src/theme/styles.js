import { StyleSheet, Dimensions } from "react-native";
const { width, height: winHeight } = Dimensions.get("window");
import { colors } from ".";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff'
  },

  font: {
    fontFamily: "sfProBold",
  },

  flex: {
    flex: 1,
  },

  adWidth: {
    width: width,
  },

  terms: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  activityWidth: {
    width: width * 0.85,
  },

  activityWidthPic: {
    width: width * 0.75,
  },

  introTitle: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  intoText: {
    color: "#fff",
    fontSize: 20,
  },
  introImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  space: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  spaceA: {
    justifyContent: "space-between",
  },
  spaceAround: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  left: {
    alignItems: "flex-start",
  },
  rightRight: {
    justifyContent: "flex-end",
  },

  right: {
    alignItems: "flex-end",
  },
  row: {
    flexDirection: "row",
  },
  bold: {
    fontWeight: "bold",
  },
  white: {
    color: "#fff",
  },
  gray: {
    color: "#adadad",
  },
  none: {
    display: "none",
  },
  small: {
    fontSize: 10,
  },
  input: {
    width: width * 0.9,
    margin: 15,
    padding: 15,
    alignSelf: "center",
    // borderColor: "#EDF1FA",
    // borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    backgroundColor: "#EDF1FA",
  },

  commentInput: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    // backgroundColor: "#F4F4F9",
  },

  commentBox: {
    borderColor: "grey",
    borderWidth: 0.5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 25,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    width: "95%",
    flexDirection: "row",
    backgroundColor: "white",
  },

  commentSend: {
    marginLeft: 10,

    width: 50,
    height: 50,

    padding: 10,

    // backgroundColor: "red",
  },

  facebookButton: {
    backgroundColor: "#3b5998",
    marginTop: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#3b5998",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  borderUsername: {
    width: "85%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    // textAlign: 'center',
  },
  border: {
    width: width * 0.85,
    margin: "2.5%",
    padding: "2.5%",
    fontSize: 16,

    borderColor: "#edf1fa",
    borderBottomWidth: 1,
    textAlign: "center",
  },

  signUpBorder: {
    width: width * 0.85,
    margin: "2.5%",
    padding: "2.5%",
    fontSize: 16,

    textAlign: "center",
  },

  dateBorder: {
    width: width * 0.85,

    margin: ".5%",
    padding: ".5%",
    // margin: 5,
    // padding: 6,
    // fontSize: 16,

    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    // textAlign: 'center',
  },

  postBorder: {
    // width: '95%',
    // margin: 5,
    // padding: 5,
    // fontSize: 16,
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
  },

  postVideo: {
    width: width,
    height: winHeight / 1.75,
  },
  homeFeedPhoto: {
    width: width,
    height: winHeight / 2,
    resizeMode: "contain",
  },

  postPhoto: {
    width: width,
    height: winHeight / 2,
    resizeMode: "cover",
  },
  postPhotoPreview: {
    width: width,
    height: winHeight / 2,
    resizeMode: "cover",
    marginBottom: 100,
  },

  postVideoPreview: {
    width: width,
    height: winHeight / 1.75,
    marginBottom: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    // backgroundColor: "white",
    backgroundColor: colors.primary,

    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  roundImagePosts: {
    width: 35,
    height: 35,
    borderRadius: 25,
    margin: 10,
    marginVertical: 5,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  homeButtons: {
    width: 20,
    height: 20,
    margin: 5,
    // marginVertical: 5,
  },

  wave: {
    width: 30,
    height: 30,
    margin: 20,
    // marginVertical: 5,
  },

  astro: {
    // width: 30,
    // height: 30,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 15,
    // backgroundColor: '#adadad'
  },

  astroActivity: {
    width: 25,
    // height: 30,
    borderRadius: 15,
    marginLeft: 5,
    // paddingTop: 5,
    // marginHorizontal: 15,
    // backgroundColor: '#adadad'
  },

  roundImageActivity: {
    width: 40,
    height: 40,
    borderRadius: 20,
    // padding:'5%',
    // margin: 10,
    // marginVertical: 5,
    // backgroundColor: '#adadad'
  },

  activityImage: {
    width: 45,
    height: 45,
    // borderRadius: 15,
    // padding:'5%',
    // margin: 10,
    // marginVertical: 5,
    // backgroundColor: '#adadad'
  },

  roundImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
    // backgroundColor: '#adadad'
  },

  roundImagePic: {
    width: 20,
    height: 20,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#adadad",
  },

  roundImageProfile: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 10,
    // backgroundColor: '#adadad'
  },

  astroProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10,
    paddingTop: 10,
    // backgroundColor: '#adadad'
  },

  squareLarge: {
    width: width * 0.33,
    height: 125,
    margin: 1,
    // backgroundColor: '#d3d3d3'
  },

  progress_container: {
    borderWidth: 6,
    borderColor: "#333",
    backgroundColor: "#ccc",
  },
  progress_status: {
    color: "#333",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },

  cameraButton: {
    // height: 125,
    // width: 125,
    borderRadius: 50,
    alignSelf: "center",
    // backgroundColor: '#fff',
    marginBottom: 50,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    backgroundColor: "white",

    // borderColor: 'white',
    // textShadowColor: 'blue',
    // textShadowOffset: {width: -2, height: 2},
    // textShadowRadius: 10,
    // paddingHorizontal: 25
  },

  buttonUsername: {
    marginRight: 50,
    marginTop: 500,
    paddingTop: 3,
    alignItems: "center",
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,

    width: 75,
    height: 25,

    backgroundColor: "white",
    // flex:1

    // borderColor: 'white',
    // textShadowColor: 'blue',
    // textShadowOffset: {width: -2, height: 2},
    // textShadowRadius: 10,
    // paddingHorizontal: 25
  },
  buttonSmall: {
    margin: 10,
    marginBottom: 0,
    padding: 5,
    alignItems: "center",
    // borderColor: '#d3d3d3',
    // borderWidth: 1,
    borderRadius: 5,
    width: 125,
    backgroundColor: "#BDEDFF",
  },

  buttonNoUser: {
    margin: 10,
    marginBottom: 0,
    padding: 5,
    // alignItems: 'center',
    // borderColor: '#d3d3d3',
    // borderWidth: 1,
    borderRadius: 5,
    width: 125,
    backgroundColor: "#BDEDFF",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonTabs: {
    margin: 2,
    marginBottom: 0,
    padding: 5,
    // paddingLeft: 20,
    alignItems: "center",
    borderColor: "#d3d3d3",
    // borderBottomWidth: 3,
    // borderBottom: 3,

    borderRadius: 5,
    width: "24%",
  },

  searchScreenButtonTabs: {
    margin: 2,
    marginBottom: 0,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "#d3d3d3",
    // borderBottomWidth: 3,
    // borderBottom: 3,

    borderRadius: 5,
    width: "33%",
  },

  searchCategory: {
    margin: 2,
    marginBottom: 0,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 5,
    width: "45%",
  },
  searchButtonTabs: {
    margin: 5,
    marginBottom: 0,
    padding: 5,
    alignItems: "center",
    // borderColor: '#d3d3d3',
    // borderWidth: 1,
    // borderRadius: 5,
    width: "40%",
    // backgroundColor: "#BDEDFF",
  },

  ShowButton: {
    margin: 5,
    marginBottom: 0,
    padding: 5,
    alignItems: "center",
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    width: "60%",
    backgroundColor: "#91dee1",
  },

  photoButton: {
    margin: 5,
    marginBottom: 0,
    padding: 5,
    alignItems: "center",
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    width: "30%",
    backgroundColor: "#91dee1",
  },

  photoIcon: {
    margin: 5,
    marginBottom: 0,
    padding: 5,
    alignItems: "center",
  },

  textCategoryNoPhoto: {
    // borderBottomWidth: 1,

    padding: 15,
    // marginHorizontal: 10,

    height: 50,
    width: "100%",
    flexDirection: "row",
  },

  textAreaNoPhoto: {
    padding: 15,

    marginHorizontal: 20,

    // height: "35%",
    // width: "90%",
    flexDirection: "row",
  },

  poster: {
    // borderColor: 'blue',
    // borderWidth: .5,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    height: 50,
    width: "60%",
    flexDirection: "row",
    backgroundColor: "#FFD9E2",
  },
  trendingCategory: {
    // borderColor: 'red',
    // borderWidth: .5,
    padding: 8.5,
    // margin: 5,
    backgroundColor: "#F4F4F9",
    marginHorizontal: 5,
    // marginVertical: 10,
    // marginBottom:5,
    marginTop: 7.5,
    borderRadius: 10,
    // height: '25%',
    // width: '25%',
    // flexDirection: 'row',
  },

  textLengthWidth: {
    padding: 10,
    // margin: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    height: "83%",
    width: "90%",
  },

  textAreaBio: {
    borderColor: colors.secondary,
    borderWidth: 0.5,
    padding: 15,
    // margin: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    height: "65%",
    width: "90%",
    flexDirection: "row",
  },

  textAreaPhoto: {
    borderColor: "grey",
    borderWidth: 0.5,
    padding: 15,
    marginTop: 10,
    borderRadius: 20,
    height: 120,
    width: "90%",
    flexDirection: "row",
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  showBottomRow: {
    borderBottomWidth: 1.5,
    borderColor: "#BDDFFF",
  },
  postDescription: {
    fontSize: 15,
    marginHorizontal: 10,
    // fontFamily: "sfProBold",
  },

  username: {
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "sfProBold",
    color: colors.darkBlue,
  },

  searchUsername: {
    fontSize: 16,
    fontWeight: "bold",
  },

  searchCat: {
    fontSize: 16,
    fontWeight: "bold",
  },

  category: {
    fontSize: 16,
    color: colors.primary,
    // textDecorationLine: 'underline',
    fontWeight: "bold",
    fontFamily: "sfProBold",
  },

  alignCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  preview: {
    height: winHeight,
    width: width,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  bottomToolbar: {
    width: width,
    position: "absolute",
    height: 100,
    bottom: 0,
  },
  captureBtn: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: "#FFFFFF",
  },
  captureBtnActive: {
    width: 80,
    height: 80,
  },
  captureBtnInternal: {
    width: 76,
    height: 76,
    borderWidth: 2,
    borderRadius: 76,
    backgroundColor: "red",
    borderColor: "transparent",
  },
  galleryContainer: {
    bottom: 100,
  },
  galleryImageContainer: {
    width: 75,
    height: 75,
    marginRight: 5,
  },
  galleryImage: {
    width: 75,
    height: 75,
  },
  icon: {
    marginLeft: 15,
  },
  no_notifications: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#0B7FF5",
    marginTop: 25,
    // alignItems:'center'
  },
  forgot: {
    marginTop: 30,
  },
  closeParent: {
    margin: 5,
    position: "absolute",
    top: 0,
    left: 0,
  },
  close: {
    width: 25,
    height: 25,
    color: "tomato",
  },
  controlBar: {
    position: "absolute",
    bottom: 10,
    left: "80%",
    right: 0,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  play: {
    position: "absolute",
    bottom: 10,
    right: "80%",
    left: 0,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
