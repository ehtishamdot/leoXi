import * as firebase from "../js/firebase/init";

//Default user Info
export let userInfo = {
  displayInfo: {},
};

export const userInfoObject = (data) => {
  userInfo.displayInfo = {
    id: data.uid,
    email: data.email,
    name: data.displayName,
    image: data.photoURL,
  };
};

export const checkAuthStatus = () => {
  firebase.onAuthStateChanged(firebase.auth, (user) => {
    if (user) {
      console.log(user);
      userInfoObject(user);
      console.log(userInfo);
    }
  });
};

export const logOutUser = () => {
  firebase
    .signOut()
    .then(() => {})
    .catch((err) => {
      throw err;
    });
};

export const googleLogin = () => {
  firebase
    .signInWithPopup(firebase.auth, firebase.provider)
    .then((res) => {
      userInfoObject(res.user);
    })
    .catch((err) => {
      throw err;
    });
};
