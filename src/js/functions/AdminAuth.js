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
import adminView from "../view/adminView";

//firebase
import * as firebase from "../firebase/init";

//Model
import * as model from "../model";

//Helper
import * as helper from "../helpers";

//functions
import * as state from "./State";
import { async } from "@firebase/util";
//  ----------- ADMIN PANNEL SETTING

export const adminSetAuth = async (value, option) => {
  const snapshot = await helper.getRT_FB("users");
  const snapshotAdmins = await helper.getRT_FB("admins");
  console.log(value, option);

  snapshot.forEach((snap) => {
    if (snap.val().email !== value) {
      adminView.handleError(option);
      return;
    }
  });

  if (option === "add--admin") {
    let status = false;
    snapshotAdmins.forEach((snap) => {
      if (snap.val().email === value) {
        status = true;
      }
    });

    if (status) {
      adminView.handlerAlreadyAddedAdminError();
      return;
    }

    snapshot.forEach((snap) => {
      if (snap.val().email === value) {
        helper.setRT_FB("admins/" + snap.val().id, {
          email: value,
        });
        adminView.handleSuccess(option);
      }
    });
  }

  if (option === "remove--admin") {
    snapshot.forEach((snap) => {
      if (snap.val().email === value) {
        helper.removeRT_FB("admins/" + snap.val().id);
        adminView.handleSuccess(option);
      }
    });
    if (option === "leonasltt@gmail.com" || option === "ahtionpc1@gmail.com") {
      adminView.handleDefaultAdminError();
    }
  }

  // COIN VALUE

  if (option === "coin--value") {
    if (value === undefined || !value) return;
    helper.updateRT_FB("coinValue", {
      value: value,
    });
    state.controlAuthState();
    adminSetValue();
  }
};

export const adminGetAuth = async () => {
  const snapshots = await helper.getRT_FB("admins");
  let adminStatus = false;
  snapshots?.forEach((shot) => {
    if (model.userInfo.displayInfo.email === shot.val().email) {
      adminStatus = true;
      adminSetValue();
    }
  });

  if (adminStatus) {
    console.log("you are admin ji");
    adminView.render();
  } else {
    console.log("ap admin nhi ho");
  }
};

const adminSetValue = async () => {
  const snapshot = await helper.getRT_FB("coinValue");
  console.log(Number(snapshot.val().value));
  model.coinsValues.coinCounts = Number(snapshot.val().value);
  model.coinsValues.coinPrice = Number(snapshot.val().value);
  await defaultView.defaultSettings(
    model.userInfo.displayInfo,
    snapshot.val().value
  );
};
