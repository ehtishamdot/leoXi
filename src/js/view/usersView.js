import { View } from "./view";

class UsersView extends View {
  _parentEl = document.querySelector(".dashboard__users");

  generateUsersMarkup(data) {
    const html = `
          <!-- PREVIEW USER START -->
            <li class="preview tehe"  data-id="${data.id}">
              <a class="preview__link" href="#${data.id}">
                <figure class="preview__fig">
                  <img src="${data.imageURL}" crossorigin="anonymous" alt="profile-image" />
                </figure>

                <div class="status__score status__score--white">
                  <span style="margin-right: 0.5rem">COINS</span>
                  <span class="status__points">${data.coins}</span>
                </div>
              </a>
            </li>
            <!--PREVIEW USER END -->
      `;
    this._parentEl.insertAdjacentHTML("beforeend", html);
  }

  addHandlerLogin(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".preview");
      if (!btn) return;
      console.log(btn);
      console.log(btn.dataset.id);
      handler(btn.dataset.id);
    });
  }
}

export default new UsersView();
