export class View {
  render() {
    this._renderMarkup();
  }

  _renderMarkup() {
    const html = this._generateMarkup();
    this.renderClear();
    this._parentEl.insertAdjacentHTML("afterbegin", html);
  }

  _generateMarkup() {}

  renderSpinner() {}

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
}
