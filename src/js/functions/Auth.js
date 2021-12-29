// View
import topNavAfterAuth from "../view/topNavAfterAuth";
import topNavBeforeAuth from "../view/topNavBeforeAuth";
import usersView from "../view/usersView";
import userRequestView from "../view/userRequestView";
import sideNavAfterAuth from "../view/sideNavAfterAuth";
import sideNavBeforeAuth from "../view/sideNavBeforeAuth";
import requestOverlayView from "../view/requestOverlayView";
import requestSubmittedOverlayView from "../view/requestSubmittedOverlayView";
import defaultView from "../view/defaultView";

//firebase
import * as firebase from "../firebase/init";

//Model
import * as model from "../model";

//functions
import * as state from "./State";

//Helper
import * as helper from "../helpers";
import * as constant from "../constants";
import AfterLoginView from "../view/AfterLoginView";

export const controlLogoutAuth = async () => {
  firebase
    .signOut(firebase.auth)
    .then(() => {
      topNavBeforeAuth.render();
      sideNavBeforeAuth.render();
      state.controlAuthState();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const controlLoginAuth = async () => {
  try {
    // Pops up google sign in Form
    const res = await firebase.signInWithPopup(
      firebase.auth,
      firebase.provider
    );

    // const snapshot = await helper.getRT_FB("users/" + res.user.uid);
    var ref = firebase.doc(firebase.db, "userCoins", res.user.uid);
    const snapshot = await firebase.getDoc(ref);

    if (snapshot.exists()) {
      model.userInfoObject({
        id: snapshot.val().id,
        email: snapshot.val().email,
        name: snapshot.val().name,
        imageURL: snapshot.val().imageURL,
        coins: snapshot.val().coins,
      });

      console.log(res.user.uid);

      // Stores users data to the user realtimeDB
      // helper.setRT_FB("users/" + res.user.uid, model.userInfo.displayInfo);
    } else {
      model.newUserInfoLogin(res.user);

      // Stores users data to the user realtimeDB
      helper.setRT_FB("users/" + res.user.uid, model.userInfo.displayInfo);
      await firebase.setDoc(
        firebase.doc(firebase.db, "users", res.user.uid),
        model.userInfo.displayInfo
      );

      console.log(model.userInfo.displayInfo.coins);
      await firebase.setDoc(
        firebase.doc(firebase.db, "userCoins", res.user.uid),
        {
          coins: helper.encrypt(
            constant.KEY,
            "" + model.userInfo.displayInfo.coins
          ),
        }
      );

      state.controlAuthState();
    }

    //storing data in db
  } catch (err) {
    console.log(err);
  }
};
