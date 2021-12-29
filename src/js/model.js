import { async } from "regenerator-runtime";

//Default user Info
export let userInfo = {
  displayInfo: {},
  logStatus: false,
};

export let coinsValues = {
  coinCounts: 0,
  coinPrice: 0,
};

export let notifications = {};

export const userInfoObject = (data) => {
  console.log(data);
  userInfo.displayInfo = {
    id: data.id,
    email: data.email,
    name: data.name,
    imageURL: data.imageURL,
    coins: data.coins,
  };
};

export const newUserInfoLogin = (data) => {
  userInfo.displayInfo = {
    id: data.uid,
    email: data.email,
    name: data.displayName,
    imageURL: data.photoURL,
    coins: 10,
  };
};


