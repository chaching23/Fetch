//import firebase, { firestore } from "firebase";
import db, { firebase } from "../config/firebase";
import { orderBy, groupBy, values } from "lodash";
import * as Permissions from "expo-permissions";
import { Alert } from "react-native";
import * as Facebook from "expo-facebook";

import uuid from "uuid";

export const getUsers = () => {
  return async (dispatch, getState) => {
    try {
      const posts = await db
        .collection("users")
        .orderBy("balance", "desc")
        .limit(25)
        .get();

      let array = [];
      posts.forEach((post) => {
        array.push(post.data());
      });

      dispatch({ type: "GET_POSTS", payload: array });
    } catch (e) {
      console.error(e);
    }
  };
};

export const getTrans = () => {
  return async (dispatch, getState) => {
    try {
      const posts = await db
        .collection("trans")
        .orderBy("date", "desc")
        .limit(25)
        .get();

      let array = [];
      posts.forEach((post) => {
        array.push(post.data());
      });

      dispatch({ type: "GET_HOT", payload: array });
    } catch (e) {
      console.error(e);
    }
  };
};

export const signup = (name) => {
  return async (dispatch, getState) => {
    try {
      console.log("getUsers");
      const id = uuid.v4();
      const user = {
        uid: id,
        name: name,
        balance: 0,
        dateJoined: new Date().getTime(),
      };
      db.collection("users").doc(id).set(user);
      dispatch({ type: "LOGIN", payload: user });
    } catch (e) {
      console.error(e);
    }
  };
};

export const uploadPost = (name, points, to) => {
  return async (dispatch, getState) => {
    try {
      // const { name } = getState().user;
      const id = uuid.v4();

      const upload = {
        id: id,
        date: new Date().getTime(),
        points: points,
        name: name,
        to: to,
      };

      db.collection("trans").doc(id).set(upload);
    } catch (e) {
      console.error(e);
    }
  };
};

export const updateScore = (uid, points, to) => {
  return async (dispatch, getState) => {
    try {
      const userQuery = await db.collection("users").doc(uid).get();

      let user = userQuery.data();

      db.collection("users")
        .doc(uid)
        .update({
          balance: +user.balance + +points,
        });

      // .update({
      //   balance: firebase.firestore.FieldValue.increment(points),
      // });
    } catch (e) {
      console.error(e);
    }
  };
};
