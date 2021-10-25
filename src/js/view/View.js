export class View {
  _userInfo;

  render(data) {
    this._userInfo = data;
    this._renderMarkup();
  }

  _renderMarkup() {
    const html = this._generateMarkup();
    this.renderClear();
    this._parentEl.insertAdjacentHTML("beforeend", html);
  }

  _generateMarkup() {}

  renderSpinner(parentEl) {
    const markup = ` 
     <div class="lds-dual-ring"></div>>`;
    console.log(parentEl);
    document.querySelector(parentEl).insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage() {}

  renderErrorMessage() {}

  renderMarkup() {}

  removeHidden() {
    this._parentEl.classList.remove("hidden");
    console.log(this._parentEl);
  }

  addHidden() {
    this._parentEl.classList.add("hidden");
    console.log(this._parentEl);
  }

  renderClear() {
    this._parentEl.innerHTML = "";
  }

  renderChildClear() {
    this._parentChildEL.innerHTML = "";
  }
}
