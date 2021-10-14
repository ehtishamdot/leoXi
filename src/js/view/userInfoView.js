import { View } from "./view";

class UserInfo extends View {
  _parentEl = document.querySelector(".content");

  addHandlerLogin(handler) {
    this._parentEl.addEventListener("click", handler);
  }
}

export default new UserInfo();
