// View
import topNavAfterAuth from "./view/topNavAfterAuth";
import topNavBeforeAuth from "./view/topNavBeforeAuth";
import usersView from "./view/usersView";
import userRequestView from "./view/userRequestView";
import sideNavAfterAuth from "./view/sideNavAfterAuth";
import sideNavBeforeAuth from "./view/sideNavBeforeAuth";

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

            //render the display
            topNavAfterAuth.render(model.userInfo.displayInfo);
            sideNavAfterAuth.render();

            //control sidebar users
            controlUsers();

            //controls recieved requests
            controlRecievedRequests();
          }
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
    querySnapshot.forEach((doc) => {
      if (model.userInfo.displayInfo.email != doc.val().email) {
        usersView.generateUsersMarkup(doc.val());
      }
    });
  }
};

const controlUserSendRequests = async (sendToId) => {
  //sending request
  try {
    const data = model.userInfo.displayInfo;

    await firebase.update(firebase.ref(firebase.database, "users/" + data.id), {
      coins: model.userInfo.displayInfo.coins - 3.5,
    });

    // Stores users data to the user realtimeDB
    firebase.set(firebase.ref(firebase.database, "notifications/" + data.id), {
      sendFrom: data.id,
      sendTo: sendToId,
      name: data.name,
      imageURL: data.imageURL,
      coins: 3.5,
    });

    controlAuthState();
  } catch (err) {
    console.log(err);
  }
};

const controlRecievedRequests = async () => {
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
    //DELETES THE SNAPSHOT
    await firebase.remove(
      firebase.ref(firebase.database, "notifications/" + id)
    );
  }

  controlAuthState();
  controlRecievedRequests();
  ///
  firebase.set(
    firebase.ref(firebase.database, "notiHistory/" + id),
    snapshot.val()
  );
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

(() => {
  topNavAfterAuth.addHandlerLogin(controlLoginAuth);
  sideNavBeforeAuth.addHandlerLogin(controlLoginAuth);
  topNavBeforeAuth.addHandlerLogin(controlLogoutAuth);
  sideNavAfterAuth.addHandlerLogin(controlLogoutAuth);
  usersView.addHandlerLogin(controlUserSendRequests);
  userRequestView.addHandlerLogin(controlRequestStatus);
  controlAuthState();
})();
