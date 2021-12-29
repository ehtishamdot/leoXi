import { doc } from "@firebase/firestore";
import { View } from "./view";

class AdminView extends View {
  _parentEl = document.querySelector(".admin__setting");

  _generateMarkup() {
    return `<div class="operation operation--transfer">
          <h2>Add Admin</h2>
          <form class="form-admin form--transfer add--admin" >
            <input type="email" class="form__input form__input--to" data-option="add--admin" />
            <button class="form__btn form__btn--transfer">→</button>
            <label class="form__label add-admin--label">Enter email</label>
          </form>
        </div>
        <div class="operation operation--transfer">
          <h2>Remove Admin</h2>
          <form class="form-admin form--transfer remove--admin">
            <input type="email" class="form__input form__input--to" data-option="remove--admin" />
            <button class="form__btn form__btn--transfer">→</button>
            <label class="form__label remove-admin--label">Enter email</label>
          </form>
        </div>

        <!-- //SETTING CURRENCY VALUE -->
        <div
          class="operation operation--close"
          style="grid-column-start: span 2; grid-row-start: span 2"
        >
          <h2>Change Current Coin Value</h2>
          <form class="form-admin form--close coin--value">
            <input
              type="number"
              step="0.00000000000001"
              class="form__input form__input--user"
              data-option= "coin--value"
            />
            <button class="form__btn form__btn--close">→</button>
            <label class="form__label">Currency - USD</label>
          </form>
        </div>
        <!-- // CURRENT ADMINS -->
      </div>`;
  }

  AdminDashboardAccessMarkup() {
    const el = document.querySelector(".admin-access--container");
    const markup = `<a  class="sidebar__items--link admin--access" style="cursor:pointer;">Admin Dashboard</a>`;
    el.innerHTML = "";
    el.insertAdjacentHTML("beforeend", markup);
  }

  addHandlerSubmit(handler) {
    this._parentEl.addEventListener("submit", (e) => {
      e.preventDefault();
      handler(e.target.children[0].value, e.target.children[0].dataset.option);
    });
  }

  addHandlerClick() {
    document.querySelector(".sidebar__items").addEventListener("click", (e) => {
      const btn = e.target.closest(".admin--access");
      if (!btn) return;
      this._parentEl.parentElement.classList.toggle("hidden");
      document.querySelector(".overlay-request").classList.toggle("hidden");
    });

    document
      .querySelector(".admin-dashboard--cross")
      .addEventListener("click", () => {
        this._parentEl.parentElement.classList.toggle("hidden");
        document.querySelector(".overlay-request").classList.toggle("hidden");
      });
  }

  handleError(option) {
    if (option === "add--admin") {
      document.querySelector(".add-admin--label").textContent =
        "No user with such email!";
      document.querySelector(".add-admin--label").style.color = "red";
    }

    if (option === "remove--admin") {
      console.log(document.querySelector(".remove-admin--label"));
      document.querySelector(".remove-admin--label").textContent =
        "No user with such email!";
      document.querySelector(".remove-admin--label").style.color = "red";
    }
  }

  handleSuccess(option) {
    if (option === "add--admin") {
      document.querySelector(".add-admin--label").textContent =
        "Admin added Successfuly";
      document.querySelector(".add-admin--label").style.color = "green";
    }

    if (option === "remove--admin") {
      document.querySelector(".remove-admin--label").textContent =
        "Admin removed Successfuly";
      document.querySelector(".remove-admin--label").style.color = "green";
    }
  }

  handleDefaultAdminError() {
    document.querySelector(".remove-admin--label").textContent =
      "You cannot remove default Admin!";
    document.querySelector(".remove-admin--label").style.color = "red";
  }

  handlerAlreadyAddedAdminError() {
    document.querySelector(".add-admin--label").textContent =
      "You are already Admin!";
    document.querySelector(".add-admin--label").style.color = "green";
  }
}

export default new AdminView();
