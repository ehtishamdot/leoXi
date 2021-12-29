//firebase
import * as firebase from "../firebase/init";

//Model
import * as model from "../model";

//view
import historyView from "../view/historyView";

//helpers
import * as helper from "../../../../src/js/helpers";
import * as helper from "../../../../src/js/constants";
import { async } from "regenerator-runtime";

export const retrieveData = async (data) => {
  //sended requests Sell
  sellingSendedRequests(data);
  //sended requests buy
  buyingSendedRequests(data);
  //recieved requests Sell
  sellingRecievedRequests(data);
  //recieved requests buy
  buyingRecievedRequests(data);
};

const sellingSendedRequests = async (data) => {
  const querySnapshot = await firebase.getDocs(
    firebase.collection(
      firebase.db,
      "history",
      "requestSended",
      "sellRequest",
      data.uid,
      "requests"
    )
  );

  querySnapshot.forEach((doc) => {
    historyView.sendedRequestMarkupSell(doc.data());
  });
};

const buyingSendedRequests = async (data) => {
  const querySnapshot = await firebase.getDocs(
    firebase.collection(
      firebase.db,
      "history",
      "requestSended",
      "buyRequest",
      data.uid,
      "requests"
    )
  );

  querySnapshot.forEach((doc) => {
    historyView.sendedRequestMarkupBuy(doc.data());
  });
};

const sellingRecievedRequests = async (data) => {
  const querySnapshot = await firebase.getDocs(
    firebase.collection(
      firebase.db,
      "history",
      "requestRecieved",
      "sellRequest",
      data.uid,
      "requests"
    )
  );

  querySnapshot.forEach((doc) => {
    historyView.recievedRequestMarkupSell(doc.data());
  });
};
const buyingRecievedRequests = async (data) => {
  const querySnapshot = await firebase.getDocs(
    firebase.collection(
      firebase.db,
      "history",
      "requestRecieved",
      "buyRequest",
      data.uid,
      "requests"
    )
  );

  querySnapshot.forEach((doc) => {
    historyView.recievedRequestMarkupBuy(doc.data());
  });
};
