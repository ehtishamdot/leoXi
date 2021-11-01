//firebase
import { async } from "regenerator-runtime";
import * as firebase from "../js/firebase/init";

export const updateRT_FB = async (Loc, data) => {
  await firebase.update(firebase.ref(firebase.database, Loc), data);
};

export const removeRT_FB = async (Loc) => {
  await firebase.remove(firebase.ref(firebase.database, Loc));
};

export const getRT_FB = async (Loc) => {
  const dbRef = firebase.ref(firebase.database);
  return await firebase.get(firebase.child(dbRef, Loc));
};

export const setRT_FB = async (Loc, data) => {
  await firebase.set(firebase.ref(firebase.database, Loc), data);
};
