//firebase
import * as firebase from "../../../../src/js/firebase/init";

//Model
import * as model from "../model";

//view
import requestView from "../view/requestView";

//helpers
import * as helper from "../../../../src/js/helpers";
import * as constant from "../../../../src/js/constants";
import { async } from "regenerator-runtime";

export const retrieveData = async (data) => {
  //requests Sell
  sellingRequests(data);
  // requests buy
  buyingRequests(data);
  // active requests
  activeRequestsView(data);
  // datas(data);
}; ///
///
///
///
///
///
///
///

const sellingRequests = async (data) => {
  console.log("dsf");
  var ref = firebase.collection(
    firebase.db,
    "notifications",
    data.uid,
    "requestSell"
  );
  const docSnap = await firebase.getDocs(ref);
  docSnap.forEach((doc) => {
    console.log(doc.data().coins);
    requestView.requestMarkupSell(
      doc.data(),
      helper.decrypt(constant.KEY, doc.data().coins)
    );
  });
};
///
///
///
///
///
///

const buyingRequests = async (data) => {
  var ref = firebase.collection(
    firebase.db,
    "notifications",
    data.uid,
    "requestBuy"
  );
  const docSnap = await firebase.getDocs(ref);
  docSnap.forEach((doc) => {
    console.log(doc.data().coins);
    requestView.requestMarkupBuy(
      doc.data(),
      helper.decrypt(constant.KEY, doc.data().coins)
    );
  });
};
///
///
///
///
///
///
///
const activeRequestsView = async (data) => {
  const docSnapBuy = await firebase.getDocs(
    firebase.collection(firebase.db, "activeRequests", data.uid, "requestBuy")
  );
  docSnapBuy.forEach((doc) => {
    console.log(doc.data());
    requestView.activeBuyRequestsMarkup(
      doc.data(),
      helper.decrypt(constant.KEY, doc.data().coins)
    );
  });

  const docSnapSell = await firebase.getDocs(
    firebase.collection(firebase.db, "activeRequests", data.uid, "requestSell")
  );
  docSnapSell.forEach((doc) => {
    console.log(doc.data());
    requestView.activeSellRequestsMarkup(
      doc.data(),
      helper.decrypt(constant.KEY, doc.data().coins)
    );
  });
};
///
///
///
///
///
///
///
export const activeRequests = async (data, node) => {
  if (
    data.sendFrom === undefined ||
    data.sendFrom === "undefined" ||
    data.sendTo === undefined ||
    data.sendTo === "undefined"
  )
    return;
  console.log(data);

  await firebase.deleteDoc(
    firebase.doc(
      firebase.db,
      "notifications",
      data.sendTo,
      data.toDo,
      data.sendFrom
    )
  );

  if (data.toDo === "requestSell") {
    const doc = await firebase.getDoc(
      firebase.doc(firebase.db, "userCoins", data.sendFrom)
    );

    await firebase.updateDoc(
      firebase.doc(firebase.db, "userCoins", data.sendFrom),
      {
        coins: doc.data().prevCoins,
      }
    );

    await firebase.updateDoc(
      firebase.doc(firebase.db, "users", data.sendFrom),
      {
        coins: helper.decrypt(constant.KEY, doc.data().prevCoins),
      }
    );
  }
  await firebase.deleteDoc(
    firebase.doc(
      firebase.db,
      "activeRequests",
      data.sendFrom,
      data.toDo,
      data.sendTo
    )
  );

  requestView.renderSetting(node);
};
///
///
///
///
///
///
///

export const controlRequestBuy = async (data, node) => {
  if (
    data.sendFrom === undefined ||
    data.sendFrom === "undefined" ||
    data.sendTo === undefined ||
    data.sendTo === "undefined"
  )
    return;

  let ref = firebase.doc(firebase.db, "userCoins", data.sendTo);
  let ref2 = firebase.doc(
    firebase.db,
    "notifications",
    data.sendTo,
    data.toDo,
    data.sendFrom
  );
  let ref3 = firebase.doc(firebase.db, "userCoins", data.sendFrom);
  const doc = await firebase.getDoc(ref);
  const doc2 = await firebase.getDoc(ref2);
  const doc3 = await firebase.getDoc(ref3);
  console.log(doc.data());
  console.log(doc2.data());
  console.log(data.sendTo);
  console.log(data.sendFrom);
  if (
    doc.data()?.coins === undefined ||
    doc.data().coins === null ||
    doc2.data()?.coins === undefined ||
    doc2.data().coins === null
  )
    return;

  console.log(Number(data.status));
  if (Number(data.status)) {
    let calVal = Math.abs(
      Number(helper.decrypt(constant.KEY, doc.data()?.coins)) -
        Number(helper.decrypt(constant.KEY, doc2.data()?.coins))
    );
    console.log(
      `user Val: ${Number(helper.decrypt(constant.KEY, doc.data()?.coins))}`
    );
    console.log(`val: ${helper.decrypt(constant.KEY, doc2.data()?.coins)}`);
    console.log(`cal val: ${calVal}`);
    let calValSendedUser = Math.abs(
      Number(helper.decrypt(constant.KEY, doc3.data()?.coins)) +
        Number(helper.decrypt(constant.KEY, doc2.data()?.coins))
    );

    console.log(Number(helper.decrypt(constant.KEY, doc2.data().coins)));
    console.log(Number(helper.decrypt(constant.KEY, doc.data().coins)));

    await firebase.updateDoc(
      firebase.doc(firebase.db, "userCoins", data.sendTo),
      {
        coins: helper.encrypt(constant.KEY, "" + calVal),
      }
    );
    await firebase.updateDoc(
      firebase.doc(firebase.db, "userCoins", data.sendFrom),
      {
        coins: helper.encrypt(constant.KEY, "" + calValSendedUser),
      }
    );

    await firebase.updateDoc(firebase.doc(firebase.db, "users", data.sendTo), {
      coins: calVal,
    });

    await firebase.updateDoc(
      firebase.doc(firebase.db, "users", data.sendFrom),
      {
        coins: calValSendedUser,
      }
    );

    await firebase.deleteDoc(ref2);
    requestView.renderSetting(node);
  } else {
    await firebase.deleteDoc(ref2);
    requestView.renderSetting(node);
  }
};

///
///
///
///
///
///
///

export const controlRequestSell = async (data, node) => {
  if (
    data.sendFrom === undefined &&
    data.sendFrom === "undefined" &&
    data.sendTo === undefined &&
    data.sendTo === "undefined"
  )
    return;

  let ref = firebase.doc(firebase.db, "userCoins", data.sendTo);
  let ref2 = firebase.doc(
    firebase.db,
    "notifications",
    data.sendTo,
    data.toDo,
    data.sendFrom
  );
  const doc = await firebase.getDoc(ref);
  const doc2 = await firebase.getDoc(ref2);
  const doc3 = await firebase.getDoc(
    firebase.doc(firebase.db, "userCoins", data.sendFrom)
  );

  if (Number(data.status)) {
    let calVal = Math.abs(
      Number(helper.decrypt(constant.KEY, doc2.data().coins)) +
        Number(helper.decrypt(constant.KEY, doc.data().coins))
    );
    await firebase.updateDoc(
      firebase.doc(firebase.db, "userCoins", data.sendTo),
      {
        coins: helper.encrypt(constant.KEY, "" + calVal),
      }
    );

    await firebase.updateDoc(firebase.doc(firebase.db, "users", data.sendTo), {
      coins: Number(calVal),
    });

    console.log(Number(helper.decrypt(constant.KEY, doc2.data().coins)));
    console.log(Number(helper.decrypt(constant.KEY, doc3.data().coins)));

    console.log(Number(helper.decrypt(constant.KEY, doc3.data().coins)));

    await firebase.deleteDoc(ref2);
    requestView.renderSetting(node);
  } else {
    await firebase.updateDoc(
      firebase.doc(firebase.db, "userCoins", data.sendTo),
      {
        coins: doc.data().prevCoins,
      }
    );
    await firebase.deleteDoc(ref2);
    requestView.renderSetting(node);
  }
};

// key = "123|a123123123123123";
// const datas = async (data) => {
//   docSnap.forEach((doc) => {
//     let refCoin = firebase.doc(firebase.db, "userCoins", doc.data().id);
//     // console.log(doc.data());
//     let encstring = helper.encrypt(constant.KEY, "" + 100);
//     // let decstring = crptr.decrypt(encstring);
//     console.log(encstring);
//     // console.log(decstring);
//     firebase.setDoc(refCoin, {
//       coins: encstring,
//     });
//   });
// };

// const datas = async (data) => {
//   var ref = firebase.collection(firebase.db, "userCoins");
//   const docSnap = await firebase.getDocs(ref);
//   docSnap.forEach((doc) => {
//     console.log(doc.data().coins);
//     // let encstring = helper.encrypt(key, "" + doc.data().coins);
//     let decstring = helper.decrypt(constant.KEY, doc.data().coins);
//     // console.log(encstring);
//     console.log(decstring);
//   });
// };
