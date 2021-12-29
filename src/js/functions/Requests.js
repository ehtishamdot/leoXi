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
import * as constants from "../constants";
import * as address from "../firebase/address";

export const controlRequestStatus = async (status, id) => {
  // // get the coins and add them to current user coins and display this notification in history
  // const snapshot = await helper.getRT_FB("notifications/" + id);
  // if (Number(status)) {
  //   await helper.updateRT_FB("users/" + model.userInfo.displayInfo.id, {
  //     coins: snapshot.val().coins + model.userInfo.displayInfo.coins,
  //   });
  //   await helper.removeRT_FB("notifications/" + id);
  // } else {
  //   const snapshotUser = await helper.getRT_FB("users/" + id);
  //   await helper.updateRT_FB("users/" + id, {
  //     coins: snapshotUser.val().prevCoins,
  //   });
  //   await helper.removeRT_FB("notifications/" + id);
  // }
  // requestOverlayView.renderClear();
  // state.controlAuthState();
  // controlRecievedRequests();
  // await helper.setRT_FB("notiHistory/" + id, snapshot.val());
};

export const controlUserSendRequests = async (val, sendToId, mod) => {
  //sending request
  try {
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

    // get the user coins  and decrypt it  then minus it with input value which val
    var ref = firebase.doc(firebase.db, "userCoins", data.id);
    const doc = await firebase.getDoc(ref);
    let snapRequest = await helper.getRT_FB("users/" + sendToId);
    const coinVal = await helper.getRT_FB("coinValue");
    const date = new Date();
    const options = {
      hour: `numeric`,
      minute: `numeric`,
      day: `numeric`,
      month: `long`,
      year: `numeric`,
      weekday: `long`,
    };
    const locate = navigator.language;

    const reviewUploadDate = new Intl.DateTimeFormat(locate, options).format(
      date
    );
    //update the coin value
    const updatedValue = Math.abs(
      Number(helper.decrypt(constants.KEY, doc.data().coins)) - val
    );

    ///
    ///
    ///
    ///
    ///
    ///
    ///

    let refR;
    let refSended;
    let refRecieved;
    if (mod == "sell") {
      //update the updatdValue in usersCoins
      await firebase.updateDoc(ref, {
        coins: helper.encrypt(constants.KEY, "" + updatedValue),
        prevCoins: doc.data().coins,
      });
      ///
      ///
      ///
      ///
      ///
      ///
      ///
      //updates the value in users/ coins for display interface
      console.log(updatedValue);
      await firebase.updateDoc(firebase.doc(firebase.db, "users", data.id), {
        coins: updatedValue,
      });

      refR = firebase.doc(
        firebase.db,
        "notifications",
        sendToId,
        "requestSell",
        data.id
      );

      firebase.setDoc(
        firebase.doc(
          firebase.db,
          "activeRequests",
          data.id,
          "requestSell",
          sendToId
        ),
        {
          sendFrom: data.id,
          sendTo: sendToId,
          name: snapRequest.val().name,
          imageURL: snapRequest.val().imageURL,
          coins: helper.encrypt(constants.KEY, "" + val),
          uploadDate: reviewUploadDate,
        }
      );

      refSended = firebase.collection(
        firebase.db,
        "history",
        "requestSended",
        "sellRequest",
        data.id,
        "requests"
      );
      refRecieved = firebase.collection(
        firebase.db,
        "history",
        "requestRecieved",
        "sellRequest",
        sendToId,
        "requests"
      );
    }

    if (mod === "buy") {
      firebase.setDoc(
        firebase.doc(
          firebase.db,
          "activeRequests",
          data.id,
          "requestBuy",
          sendToId
        ),
        {
          sendFrom: data.id,
          sendTo: sendToId,
          name: snapRequest.val().name,
          imageURL: snapRequest.val().imageURL,
          coins: helper.encrypt(constants.KEY, "" + val),
          uploadDate: reviewUploadDate,
        }
      );
      refR = firebase.doc(
        firebase.db,
        "notifications",
        sendToId,
        "requestBuy",
        data.id
      );

      refSended = firebase.collection(
        firebase.db,
        "history",
        "requestSended",
        "buyRequest",
        data.id,
        "requests"
      );
      refRecieved = firebase.collection(
        firebase.db,
        "history",
        "requestRecieved",
        "buyRequest",
        sendToId,
        "requests"
      );
    }

    firebase.setDoc(refR, {
      sendFrom: data.id,
      sendTo: sendToId,
      name: data.name,
      imageURL: data.imageURL,
      coins: helper.encrypt(constants.KEY, "" + val),
      uploadDate: reviewUploadDate,
    });

    //user sended request history

    console.log(snapRequest.val());
    firebase.addDoc(refSended, {
      sendFrom: data.id,
      sendTo: sendToId,
      name: snapRequest.val().name,
      imageURL: snapRequest.val().imageURL,
      email: snapRequest.val().email,
      coins: val,
      uploadDate: reviewUploadDate,
      coinVal: coinVal.val().value,
    });

    //user recieved request history
    firebase.addDoc(refRecieved, {
      sendFrom: data.id,
      sendTo: sendToId,
      name: data.name,
      imageURL: data.imageURL,
      coins: val,
      uploadDate: reviewUploadDate,
      email: data.email,
      coinVal: coinVal.val().value,
    });

    state.controlAuthState();
  } catch (err) {
    console.log(err);
  }
};

export const controlRecievedRequests = async () => {
  // const data = model.userInfo.displayInfo;
  // userRequestView.renderSpinner(".dashboard__users");
  // const snapshot = await helper.getRT_FB("notifications");
  // userRequestView.renderClear();
  // if (snapshot.exists()) {
  //   snapshot.forEach((doc) => {
  //     if (doc.val().sendTo === model.userInfo.displayInfo.id) {
  //       userRequestView.generateUsersMarkup(doc.val());
  //       console.log(doc.val());
  //     }
  //   });
  // }
};
