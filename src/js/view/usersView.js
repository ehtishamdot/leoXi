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
                <div style="display:flex; flex-direction: column;"> 
                <div class="status__score status__score--white">
                  <span style="margin-right: 0.5rem">COINS</span>
                  <span class="status__points">${data.coins}</span>
                </div>
                <div style="margin-top:1rem; font-size:2rem;">
                <img src="https://img.icons8.com/fluency/48/000000/low-price.png">
                <span class="status__coin--price" style="font-weight:300">${data.coins}$</span>
                </div>
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
      handler(btn.dataset.id);
      document.querySelector(".request__overlay").classList.remove("hidden");
      document.querySelector(".overlay-request").classList.remove("hidden");
      document.querySelector("body").style.overflowY = "hidden";
      document.querySelector(".coins-count").value = "";
    });
  }
}

export default new UsersView();
