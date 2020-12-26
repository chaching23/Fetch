var environments = {
  staging: {

    FIREBASE_API_KEY: "AIzaSyDUW3T6tAN9zaMtG6MZGNJ5MkIwOmugNs0",
    FIREBASE_AUTH_DOMAIN: "myfirstproject-5e2bb.firebaseapp.com",
    FIREBASE_DATABASE_URL:  "https://myfirstproject-5e2bb.firebaseio.com",
    FIREBASE_PROJECT_ID: "myfirstproject-5e2bb",
    FIREBASE_STORAGE_BUCKET: "myfirstproject-5e2bb.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "62759041622",
    FIREBASE_APP_ID: "1:62759041622:web:ad1017b212bedfbb11d9f7",
    FIREBASE_MEASUREMENT_ID: "G-QQ41ZGVEYW"

  },
  production: {},
};

function getReleaseChannel() {
  let releaseChannel = Expo.Constants.manifest.releaseChannel;
  if (releaseChannel === undefined) {
    return "staging";
  } else if (releaseChannel === "staging") {
    return "staging";
  } else {
    return "staging";
  }
}
function getEnvironment(env) {
  return environments[env];
}
var Environment = getEnvironment(getReleaseChannel());
export default Environment;
