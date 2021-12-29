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

var crypto = require("crypto");

export function encrypt(key, data) {
  var cipher = crypto.createCipher("aes-256-cbc", key);
  var crypted = cipher.update(data, "utf-8", "hex");
  crypted += cipher.final("hex");

  return crypted;
}

export function decrypt(key, data) {
  var decipher = crypto.createDecipher("aes-256-cbc", key);
  var decrypted = decipher.update(data, "hex", "utf-8");
  decrypted += decipher.final("utf-8");

  return decrypted;
}
