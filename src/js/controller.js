// View
import topNavAfterAuth from "./view/topNavAfterAuth";
import topNavBeforeAuth from "./view/topNavBeforeAuth";
import usersView from "./view/usersView";
import userRequestView from "./view/userRequestView";
import sideNavAfterAuth from "./view/sideNavAfterAuth";
import sideNavBeforeAuth from "./view/sideNavBeforeAuth";
import requestOverlayView from "./view/requestOverlayView";
import requestSubmittedOverlayView from "./view/requestSubmittedOverlayView";
import defaultView from "./view/defaultView";

//firebase
import * as firebase from "../js/firebase/init";

//Model
import * as model from "./model";

//Helpers
import * as Helpers from "./helpers";

//nav
import * as navigation from "./navigation";

const controlAuthState = async () => {
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
          adminGetAuth().then(() => {
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
            controlUsers();
          });

          //render the display
          sideNavAfterAuth.render();

          //controls recieved requests
          controlRecievedRequests();
        });
    } else {
      topNavBeforeAuth.render(model.userInfo.displayInfo);
      sideNavBeforeAuth.render();
    }
  });
};

const controlUsers = async () => {
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

const controlRecievedRequests = async () => {
  userRequestView.renderSpinner(".dashboard__users");
  const dbRef = firebase.ref(firebase.database);
  const snapshot = await firebase.get(firebase.child(dbRef, "notifications"));
  userRequestView.renderClear();
  if (snapshot.exists()) {
    snapshot.forEach((doc) => {
      if (doc.val().sendTo === model.userInfo.displayInfo.id) {
        userRequestView.generateUsersMarkup(doc.val());
      }
    });
  }
};

const controlLogoutAuth = async () => {
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

const controlLoginAuth = async () => {
  try {
    // Pops up google sign in Form
    const res = await firebase.signInWithPopup(
      firebase.auth,
      firebase.provider
    );

    const dbRef = firebase.ref(firebase.database);
    const snapshot = await firebase.get(
      firebase.child(dbRef, "users/" + res.user.uid)
    );

    // Stores users data to the user realtimeDB
    if (snapshot.exists()) {
      model.userInfoObject({
        id: snapshot.val().id,
        email: snapshot.val().email,
        name: snapshot.val().name,
        imageURL: snapshot.val().imageURL,
        coins: snapshot.val().coins,
      });
      firebase.set(
        firebase.ref(firebase.database, "users/" + res.user.uid),
        model.userInfo.displayInfo
      );
    } else {
      model.newUserInfoLogin(res.user);
      console.log(model.userInfo);
      firebase.set(
        firebase.ref(firebase.database, "users/" + res.user.uid),
        model.userInfo.displayInfo
      );
      controlAuthState();
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

const controlReqProfileView = async (id) => {
  //printing view
  const dbRef = firebase.ref(firebase.database);
  const snapshot = await firebase.get(
    firebase.child(dbRef, "notifications/" + model.userInfo.displayInfo.id)
  );
  const snapshotUser = await firebase.get(firebase.child(dbRef, "users/" + id));

  const snapshotNoti = await firebase.get(
    firebase.child(dbRef, "notifications")
  );
  let status = false;

  snapshotNoti?.forEach((snap) => {
    if (snap?.val().sendTo == id) {
      console.log(snap.val().sendTo, id);
      status = true;
    }
  });

  if (status) {
    requestOverlayView.render(snapshotUser?.val());
    requestSubmittedOverlayView.setting();
  } else {
    requestOverlayView.setting();
    requestOverlayView.render(snapshotUser?.val());
  }
};

const controlUserSendRequests = async (val, sendToId) => {
  //sending request
  try {
    console.log(val, sendToId);
    if (val > model.userInfo.displayInfo.coins) {
      alert("You have insufficient coins");
      return;
    }

    if (val < 0) {
      alert("Enter the correct amount");
      return;
    }

    if (val == undefined && val == null && val == 0) {
      alert("Enter again");
      return;
    }

    const data = model.userInfo.displayInfo;

    console.log(data.id);
    await firebase.update(firebase.ref(firebase.database, "users/" + data.id), {
      coins: model.userInfo.displayInfo.coins - val,
      prevCoins: model.userInfo.displayInfo.coins,
    });

    // Stores users data to the user realtimeDB
    firebase.set(firebase.ref(firebase.database, "notifications/" + data.id), {
      sendFrom: data.id,
      sendTo: sendToId,
      name: data.name,
      imageURL: data.imageURL,
      coins: val,
    });

    controlAuthState();
  } catch (err) {
    console.log(err);
  }
};

const controlRequestStatus = async (status, id) => {
  //getting requests user Data
  const dbRef = firebase.ref(firebase.database);
  const snapshot = await firebase.get(
    firebase.child(dbRef, "notifications/" + id)
  );

  // get the coins and add them to current user coins and display this notification in history
  if (Number(status)) {
    //UPDATES THE SNAPSHOT
    await firebase.update(
      firebase.ref(firebase.database, "users/" + model.userInfo.displayInfo.id),
      {
        coins: snapshot.val().coins + model.userInfo.displayInfo.coins,
      }
    );

    await firebase.remove(
      firebase.ref(firebase.database, "notifications/" + id)
    );
  } else {
    const dbRef = firebase.ref(firebase.database);

    const snapshotUser = await firebase.get(
      firebase.child(dbRef, "users/" + id)
    );
    console.log(snapshotUser.val().prevCoins);

    await firebase.update(firebase.ref(firebase.database, "users/" + id), {
      coins: snapshotUser.val().prevCoins,
    });

    // DELETES THE SNAPSHOT
    await firebase.remove(
      firebase.ref(firebase.database, "notifications/" + id)
    );
  }

  requestOverlayView.renderClear();
  controlAuthState();
  controlRecievedRequests();
  ///
  firebase.set(
    firebase.ref(firebase.database, "notiHistory/" + id),
    snapshot.val()
  );
};

const controlCancelDom = () => {};

//  ----------- ADMIN PANNEL SETTING

const adminSetAuth = (adminsInfo) => {
  firebase.set(
    firebase.ref(firebase.database, "admins/" + model.userInfo.displayInfo.id),
    {
      email: adminsInfo,
    }
  );
};

const adminGetAuth = async () => {
  const dbRef = firebase.ref(firebase.database);
  const snapshots = await firebase.get(firebase.child(dbRef, "admins"));

  snapshots?.forEach((shot) => {
    console.log(shot.val());
    if (model.userInfo.displayInfo.email === shot.val().email) {
      adminSetValue();
    } else {
      console.log("you are not admin");
    }
  });
};

// ----------------- COIN VALUES

const adminSetValue = () => {
  model.coinsValues.coinCounts = 5;
  model.coinsValues.coinPrice = 4;
};

(() => {
  topNavAfterAuth.addHandlerLogin(controlLoginAuth);
  sideNavBeforeAuth.addHandlerLogin(controlLoginAuth);
  topNavBeforeAuth.addHandlerLogin(controlLogoutAuth);
  sideNavAfterAuth.addHandlerLogin(controlLogoutAuth);
  usersView.addHandlerLogin(controlReqProfileView);
  userRequestView.addHandlerLogin(controlRequestStatus);
  requestOverlayView.addHandlerLogin(controlReqProfileView);
  requestOverlayView.addHandlerSubmit(controlUserSendRequests);
  requestOverlayView.addHandlerCancel(controlCancelDom);
  controlAuthState();
})();
