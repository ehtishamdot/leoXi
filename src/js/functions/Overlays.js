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

//Helpers
import * as helper from "../helpers";

export const controlReqProfileView = async (id, mod) => {
  await helper.getRT_FB("notifications/" + model.userInfo.displayInfo.id);

  if (mod === "sell") {
    console.log("sel");
  }

  if (mod === "buy") {
    console.log("buy");
  }

  const snapshotUser = await helper.getRT_FB("users/" + id);
  const snapshotNoti = await helper.getRT_FB("notifications");
  let status = false;

  snapshotNoti?.forEach((snap) => {
    if (snap?.val().sendTo == id) {
      console.log(snap.val().sendTo, id);
      status = true;
    }
  });
  requestOverlayView.setting();
  requestOverlayView.render(snapshotUser?.val(), 0, mod);

  // if (status) {
  //   // if status true it will render the overlay and set the settings for input
  //   requestOverlayView.render(snapshotUser?.val(), 0, mod);
  //   requestSubmittedOverlayView.setting();
  // } else {
  //   // if status false it will render the overlay and disable the settings for input
  // }
};
