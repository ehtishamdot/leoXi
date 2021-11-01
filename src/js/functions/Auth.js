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

export const controlLogoutAuth = async () => {
  firebase
    .signOut(firebase.auth)
    .then(() => {
      topNavBeforeAuth.render();
      sideNavBeforeAuth.render();
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

    const snapshot = await helper.getRT_FB("users/" + res.user.uid);

    if (snapshot.exists()) {
      model.userInfoObject({
        id: snapshot.val().id,
        email: snapshot.val().email,
        name: snapshot.val().name,
        imageURL: snapshot.val().imageURL,
        coins: snapshot.val().coins,
      });

      // Stores users data to the user realtimeDB
      helper.setRT_FB("users/" + res.user.uid, model.userInfo.displayInfo);
    } else {
      model.newUserInfoLogin(res.user);
      console.log(model.userInfo);
      // Stores users data to the user realtimeDB
      helper.setRT_FB("users/" + res.user.uid, model.userInfo.displayInfo);

      state.controlAuthState();
    }

    //storing data in db
    await firebase.setDoc(
      firebase.doc(firebase.db, "users", res.user.uid),
      model.userInfo.displayInfo
    );
  } catch (err) {
    console.log(err);
  }
};
