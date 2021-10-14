// View
import topNavAfterAuth from "./view/topNavAfterAuth";
import topNavBeforeAuth from "./view/topNavBeforeAuth";

//Model
import * as model from "./model";

const controlAuthState = () => {
  //Check if user is already logged in or not
  model.checkAuthStatus();
};

//UserInfo
const controlDisplayInfo = () => {
  if (model.userInfo) {
  }
};

//Login View
const controlLoginAuth = () => {
  model.googleLogin();
  if (model.userInfo) {
    topNavAfterAuth.render();
  }
};

//Signup View
const controlSignUpAuth = () => {};

//Logout View
const controlLogoutAuth = () => {
  model.logOutUser();
};

(() => {
  topNavAfterAuth.addHandlerLogin(controlLoginAuth);
  controlAuthState();
})();
