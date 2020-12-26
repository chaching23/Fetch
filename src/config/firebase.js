import Environment from "./environment";
import * as firebase from "firebase";
require("firebase/firestore");

const config = {
  apiKey: Environment["FIREBASE_API_KEY"],
  authDomain: Environment["FIREBASE_AUTH_DOMAIN"],
  databaseURL: Environment["FIREBASE_DATABASE_URL"],
  projectId: Environment["FIREBASE_PROJECT_ID"],
  storageBucket: Environment["FIREBASE_STORAGE_BUCKET"],
  messagingSenderId: Environment["FIREBASE_MESSAGING_SENDER_ID"],
  appId: Environment["FIREBASE_APP_ID"],
  measurementId: Environment["FIREBASE_MEASUREMENT_ID"],
};

firebase.initializeApp(config);

export {firebase};

const db = firebase.firestore();

export default db;
