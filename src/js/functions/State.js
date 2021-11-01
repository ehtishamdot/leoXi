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
import * as users from "./Users";
import * as requests from "./Requests";

export const controlAuthState = async () => {
  await firebase.onAuthStateChanged(firebase.auth, (user) => {
    if (user) {
      //user data from Firebase
      const dbRef = firebase.ref(firebase.database);
      firebase
        .get(firebase.child(dbRef, "users/" + user.uid))
        .then((snapshot) => {
          //checks
          if (snapshot.exists()) {
            //sends the data to the model "USERINFO"
            model.userInfoObject(snapshot.val());
          }
        })
        .then(() => {
          //admin setting
          adminAuth.adminGetAuth().then(() => {
            //render the display
            topNavAfterAuth.render(
              model.userInfo.displayInfo,
              model.coinsValues
            );

            defaultView.defaultSettings(
              model.userInfo.displayInfo,
              model.coinsValues
            );

            //control sidebar users
            users.controlUsers();
          });

          //render the display
          sideNavAfterAuth.render();

          //controls recieved requests
          requests.controlRecievedRequests();
        });
    } else {
      topNavBeforeAuth.render(model.userInfo.displayInfo);
      sideNavBeforeAuth.render();
    }
  });
};
