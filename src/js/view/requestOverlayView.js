import { View } from "./view";

class RequestOverlay extends View {
  _parentEl = document.querySelector(".profile__data");
  _parentChildEL = document.querySelector(".request__overlay");
  _generateMarkup() {
    return `
               <img
              class="profile__photo"
              src="${this._userInfo.imageURL}"
              alt="profile image"
            />
            <h1 class="profile__person" data-id="${this._userInfo.id}">${this._userInfo.name}</h1>

        `;
  }

  setting() {
    document.querySelector(".coins-count").disabled = false;
    document.querySelector(".coins-count").placeholder = "0";
  }

  addHandlerLogin(handler) {
    document
      .querySelector(".dashboard__users")
      .addEventListener("click", (e) => {
        const btn = e.target.closest(".preview");
        if (!btn) return;
        handler(btn.dataset.id);
      });
  }

  addHandlerSubmit(handler) {
    document
      .querySelector(".number-of-coins")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = e.target.parentNode.parentNode.children[1].children[1];
        const val = document.querySelector(".coins-count").value;
        handler(Number(val), btn.dataset.id);

        //  document.querySelector(".request__overlay").classList.add("hidden");
        //  document.querySelector(".overlay").classList.add("hidden");

        // after auth
        if (val == undefined && val == null && val == 0) return;
        document
          .querySelector(".coins-count")
          .setAttribute("placeholder", "already submitted");
        document.querySelector(".coins-count").disabled = true;
      });
  }

  addHandlerCancel(handler) {
    document.querySelector(".cancel-btn").addEventListener("click", () => {
      document.querySelector(".request__overlay").classList.add("hidden");
      document.querySelector(".overlay-request").classList.add("hidden");
      document.querySelector("body").style.overflowY = "scroll";
      handler();
    });
  }
}

export default new RequestOverlay();
