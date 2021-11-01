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
import * as adminAuth from "./AdminAuth";

export const controlUsers = async () => {
  const dbRef = firebase.ref(firebase.database);

  //getting Data
  const querySnapshot = await firebase.get(firebase.child(dbRef, "users"));

  usersView.renderClear();
  if (querySnapshot.exists()) {
    console.log(model.coinsValues.coinPrice);
    querySnapshot.forEach((doc) => {
      if (model.userInfo.displayInfo.email != doc.val().email) {
        usersView.generateUsersMarkup(doc.val(), model.coinsValues);
      }
    });
  }
};
