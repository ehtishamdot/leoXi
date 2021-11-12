//firebase
import * as firebase from "../firebase/init";

//Model
import * as model from "../model";

//functions
import * as userState from "./userStats";

export const controlAuthState = async () => {
  await firebase.onAuthStateChanged(firebase.auth, (user) => {
    if (user) {
      //user data from Firebase
      userState.userStats(user);
    } else {
    }
  });
};
