import { View } from "./view";

class defaultView extends View {
  defaultSettings(displayInfo, coinInfo) {
    console.log(coinInfo.coinPrice);
    document.querySelector(".overlay__coin--price").textContent =
      Math.abs(coinInfo.coinPrice).toFixed(2) + "$";
  }
}

export default new defaultView();
