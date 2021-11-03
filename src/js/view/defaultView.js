import { View } from "./view";

class defaultView extends View {
  defaultSettings(displayInfo, coinInfo) {
    console.log(coinInfo);
    document.querySelector(".overlay__coin--price").textContent =
      Math.abs(Number(coinInfo)).toFixed(2) + "$";
  }
}

export default new defaultView();
