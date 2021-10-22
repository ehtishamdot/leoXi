//firebase
import { async } from "regenerator-runtime";
import * as firebase from "../js/firebase/init";

export const getUsersFB = async (query) => {
  const dbRef = firebase.ref(firebase.database);
  //getting Data
  return (querySnapshot = await firebase.get(firebase.child(dbRef, query)));
};
