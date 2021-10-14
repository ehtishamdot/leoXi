import { View } from "./view";

class Login extends View {
  _parentEl = document.querySelector(".content");

  _generateMarkup() {}

  addHandlerLogin(handler) {
    this._parentEl.addEventListener("click", () => {
      handler();
      this.addHidden();
    });
  }
}

export default new Login();
