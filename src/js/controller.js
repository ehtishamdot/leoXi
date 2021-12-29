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
import adminView from "./view/adminView";

//firebase
import * as firebase from "../js/firebase/init";

//Model
import * as model from "./model";

//Functions
import * as auth from "./functions/Auth";
import * as request from "./functions/Requests";
import * as state from "./functions/State";
import * as adminAuth from "./functions/AdminAuth";
import * as overlay from "./functions/Overlays";

//Helpers
import * as Helpers from "./helpers";

//nav
import * as navigation from "./navigation";

const controlCancelDom = () => {};

// ----------------- Control ADD Event Listeners

(() => {
  topNavAfterAuth.addHandlerLogin(auth?.controlLoginAuth);
  sideNavBeforeAuth.addHandlerLogin(auth?.controlLoginAuth);
  topNavBeforeAuth.addHandlerLogin(auth?.controlLogoutAuth);
  sideNavAfterAuth.addHandlerLogin(auth?.controlLogoutAuth);
  usersView.addHandlerSell(overlay?.controlReqProfileView);
  usersView.addHandlerBuy(overlay?.controlReqProfileView);
  // userRequestView.addHandlerLogin(request?.controlRequestStatus);
  // requestOverlayView.addHandlerLogin(overlay?.controlReqProfileView);
  requestOverlayView.addHandlerSubmit(request?.controlUserSendRequests);
  requestOverlayView.addHandlerCancel(controlCancelDom);
  adminView.addHandlerSubmit(adminAuth?.adminSetAuth);
  adminView?.addHandlerClick();
  state?.controlAuthState();
})();
