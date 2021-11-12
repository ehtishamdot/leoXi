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
import * as state from "./State";

//helpers
import * as helper from "../helpers";

export const controlRequestStatus = async (status, id) => {
  // get the coins and add them to current user coins and display this notification in history
  const snapshot = await helper.getRT_FB("notifications/" + id);

  if (Number(status)) {
    await helper.updateRT_FB("users/" + model.userInfo.displayInfo.id, {
      coins: snapshot.val().coins + model.userInfo.displayInfo.coins,
    });

    await helper.removeRT_FB("notifications/" + id);
  } else {
    const snapshotUser = await helper.getRT_FB("users/" + id);

    console.log(snapshotUser.val().prevCoins);

    await helper.updateRT_FB("users/" + id, {
      coins: snapshotUser.val().prevCoins,
    });

    await helper.removeRT_FB("notifications/" + id);
  }

  requestOverlayView.renderClear();
  state.controlAuthState();
  controlRecievedRequests();

  await helper.setRT_FB("notiHistory/" + id, snapshot.val());
};

export const controlUserSendRequests = async (val, sendToId) => {
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

    await helper.updateRT_FB("users/" + data.id, {
      coins: model.userInfo.displayInfo.coins - val,
      prevCoins: model.userInfo.displayInfo.coins,
    });

    //Userhistory
    const coinValue = await helper.getRT_FB("coinValue");
    const user = await helper.getRT_FB("users/" + data.id);
    const userHistory = await helper.getRT_FB("userHistory/" + data.id);
    console.log(user.val().coins * coinValue.val().value);
    await helper.updateRT_FB("userHistory/" + data.id, {
      totalIncome:
        model.userInfo.displayInfo.coins * coinValue.val().value +
        val * coinValue.val().value,
    });

    console.log(userHistory.val().totalIncome);

    // Stores users data to the user realtimeDB
    await helper.setRT_FB("notifications/" + data.id, {
      sendFrom: data.id,
      sendTo: sendToId,
      name: data.name,
      imageURL: data.imageURL,
      coins: val,
    });

    state.controlAuthState();
  } catch (err) {
    console.log(err);
  }
};

export const controlRecievedRequests = async () => {
  userRequestView.renderSpinner(".dashboard__users");

  const snapshot = await helper.getRT_FB("notifications");

  userRequestView.renderClear();
  if (snapshot.exists()) {
    snapshot.forEach((doc) => {
      if (doc.val().sendTo === model.userInfo.displayInfo.id) {
        userRequestView.generateUsersMarkup(doc.val());
      }
    });
  }
};
