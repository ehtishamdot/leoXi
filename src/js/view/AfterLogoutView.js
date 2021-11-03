import { View } from "./view";

class LogOut extends View {
  _parentEl = document.querySelector(".btn-logout");

  render() {
    console.log("you clicked logout button");
  }
  setting() {
    document.querySelector(".dashboard").classList.add("hidden");
    document.querySelector(".faqs").classList.remove("hidden");
  }
  addHandlerLogin(handler) {
    this._parentEl.addEventListener("click", () => {
      handler();
      this.addHidden();
    });
  }
}

export default new LogOut();
