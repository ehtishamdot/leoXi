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

export const controlReqProfileView = async (id) => {
  await helper.getRT_FB("notifications/" + model.userInfo.displayInfo.id);

  const snapshotUser = await helper.getRT_FB("users/" + id);
  const snapshotNoti = await helper.getRT_FB("notifications");
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
