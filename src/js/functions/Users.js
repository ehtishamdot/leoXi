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

//helper
import * as helper from "../helpers";
import * as constants from "../constants";

export const controlUsers = async () => {
  // const dbRef = firebase.ref(firebase.database);

  //getting Data
  // const querySnapshot = await firebase.get(firebase.child(dbRef, "users"));
  const snapshot = await helper.getRT_FB("coinValue");

  usersView.renderClear();

  console.log(model.coinsValues.coinPrice);

  var ref = firebase.collection(firebase.db, "users");
  const docSnap = await firebase.getDocs(ref);

  docSnap.forEach((doc) => {
    if (model.userInfo.displayInfo.email != doc.data().email) {
      console.log(doc.data());
      usersView.generateUsersMarkup(doc.data(), snapshot.val().value);
    }
  });

  // querySnapshot.forEach((doc) => {
  //   if (model.userInfo.displayInfo.email != doc.val().email) {
  //            console.log(snapshot.val().value);
  //     usersView.generateUsersMarkup(doc.val(), snapshot.val().value);
  //   }
  // });
};
