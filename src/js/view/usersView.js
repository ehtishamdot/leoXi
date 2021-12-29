import { View } from "./view";

class UsersView extends View {
  _parentEl = document.querySelector(".dashboard__users");

  generateUsersMarkup(data, coinInfo) {
    const html = `
          <!-- PREVIEW USER START -->
            <li class="preview tehe"  data-id="${data.id}">
              <a class="preview__link" href="#${data.id}">
                <figure class="preview__fig">
                  <img src="${
                    data.imageURL
                  }" crossorigin="anonymous" alt="profile-image" />
                </figure>
                <div style="display:flex; flex-direction: column;"> 
                <div class="status__score status__score--white" style="width: 12rem;">
                  <span style="margin-right: 0.5rem">COINS</span>
                  <span class="status__points">${Math.floor(data.coins)}</span>
                </div>
                <div style="margin-top:1rem; font-size:2rem; width:12rem; ">
                <img src="https://img.icons8.com/fluency/48/000000/low-price.png">
                <span class="status__coin--price" style="font-weight:500; word-wrap: break-word;">${Math.floor(
                  data.coins * coinInfo
                )}$</span>
                </div>
                 </div>
              </a>
               <div
                class="full-flex table__btns"
                style="display: flex; justify-content: center"
              >
                <button
                  class="btn--small btn--small--green buy"  data-id="${data.id}"
                  style="margin-right: 1rem"
                  data-status="1"
                >
                  Buy
                </button>
                <button class="btn--small btn--small--red sell"  data-id="${
                  data.id
                }"  data-status="0">
                  Sell
                </button>
              </div>
             
            </li>
            <!--PREVIEW USER END -->
      `;
    this._parentEl.insertAdjacentHTML("beforeend", html);
  }

  addHandlerSell(handler) {
    F;
    this._parentEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".sell");
      if (!btn) return;
      handler(btn.dataset.id, "sell");
      document.querySelector(".request__overlay").classList.remove("hidden");
      document.querySelector(".overlay-request").classList.remove("hidden");

      //hidden the values so user can not input more after submission
      document.querySelector("body").style.overflowY = "hidden";
      document.querySelector(".coins-count").value = "";
    });
  }

  addHandlerBuy(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".buy");
      if (!btn) return;

      handler(btn.dataset.id, "buy");
      console.log(btn.dataset.id);
      document.querySelector(".request__overlay").classList.remove("hidden");
      document.querySelector(".overlay-request").classList.remove("hidden");

      //hidden the values so user can not input more after submission
      document.querySelector("body").style.overflowY = "hidden";
      document.querySelector(".coins-count").value = "";
    });
  }
}

export default new UsersView();
