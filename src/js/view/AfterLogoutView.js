import { View } from "./view";

class LogOut extends View {
  _parentEl = document.querySelector(".btn-logout");

  render() {
    console.log("you clicked logout button");
  }

  addHandlerLogin(handler) {
    this._parentEl.addEventListener("click", () => {
      handler();
      this.addHidden();
    });
  }
}

export default new LogOut();
