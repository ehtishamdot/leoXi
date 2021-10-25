import { View } from "./view";

class SubmittedRequestOverlay extends View {
  _parentEl = document.querySelector(".request__overlay");

  setting() {
    document.querySelector(".coins-count").disabled = true;
    document.querySelector(".coins-count").placeholder = "already submitted";
  }
}

export default new SubmittedRequestOverlay();
