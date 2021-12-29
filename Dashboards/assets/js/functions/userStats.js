//model
import * as model from "../model";

//firebase
import * as firebase from "../firebase/init";

//functions

//helper
import * as helper from "../helpers";

export const userStats = async (data) => {
  console.log(data.uid);
  const snapshot = await helper.getRT_FB("users/" + data.uid);
  const coinValue = await helper.getRT_FB("coinValue");
  const userHistory = await helper.getRT_FB("userHistory/" + data.uid);
  console.log(coinValue.val().value);
  const money = coinValue.val().value * snapshot.val().coins;
  // document.querySelector(".current-money").textContent = `$${money}`;
  // document.querySelector(".coins-value").textContent = `${
  //   snapshot.val().coins
  // }`;
  // document.querySelector(".alltime-income").textContent = `$${
  //   userHistory.val().totalIncome
  // }`;
  // document.querySelector(".total-trades").textContent = `${
  //   snapshot.val().totalTrades
  // }`;
};
