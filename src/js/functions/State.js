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
import AfterLoginView from "../view/AfterLoginView";
import AfterLogoutView from "../view/AfterLogoutView";

//firebase
import * as firebase from "../firebase/init";

//Model
import * as model from "../model";

//functions
import * as adminAuth from "./AdminAuth";
import * as users from "./Users";
import * as requests from "./Requests";
import AfterLogoutView from "../view/AfterLogoutView";

export const controlAuthState = async () => {
  await firebase.onAuthStateChanged(firebase.auth, (user) => {
    if (user) {
      //user data from Firebase
      // const dbRef = firebase.ref(firebase.database);
      firebase
        .getDoc(firebase.doc(firebase.db, "users", user.uid))
        .then((snapshot) => {
          //checks
          if (snapshot.exists()) {
            //sends the data to the model "USERINFO"
            model.userInfoObject(snapshot.data());
          }
        })
        .then(() => {
          //admin setting
          adminAuth.adminGetAuth().then(() => {
            //render the display
            //control sidebar users
          });

          //render the display
          sideNavAfterAuth.render();
          AfterLoginView.setting();

          //controls recieved requests
          requests.controlRecievedRequests();
        });
    } else {
      topNavBeforeAuth.render(model.userInfo.displayInfo);
      sideNavBeforeAuth.render();
      AfterLogoutView.render();
      AfterLogoutView.setting();
    }
  });
};
