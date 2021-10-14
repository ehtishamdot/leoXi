class Signup {
  #parentEl = document.querySelector(".btn-signup");

  render() {
    console.log("you clicked signup button");
  }

  addHandlerLogin(handler) {
    this.#parentEl.addEventListener("click", handler);
  }
}

export default new Signup();
