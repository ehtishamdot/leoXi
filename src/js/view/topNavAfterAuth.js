import { View } from "./view";

class topNavAfterAuth extends View {
  _parentEl = document.querySelector(".nav-top");

  _generateMarkup() {
    return `
          <ul class="nav__items">
            <!-- ITEM 1 -->
            <li class="top-btn nav__items--item">
    
              <!-- LOGOUT BTN -->
              <button class="btn  btn-logout btn--small--green">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  style="pointer-events: none"
                  class="login-icon"
                >
                  <g class="style-scope">
                    <path
                      d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,3c4.96,0,9,4.04,9,9 c0,1.42-0.34,2.76-0.93,3.96c-1.53-1.72-3.98-2.89-7.38-3.03C14.57,12.6,16,10.97,16,9c0-2.21-1.79-4-4-4C9.79,5,8,6.79,8,9 c0,1.97,1.43,3.6,3.31,3.93c-3.4,0.14-5.85,1.31-7.38,3.03C3.34,14.76,3,13.42,3,12C3,7.04,7.04,3,12,3z M9,9c0-1.65,1.35-3,3-3 s3,1.35,3,3c0,1.65-1.35,3-3,3S9,10.65,9,9z M12,21c-3.16,0-5.94-1.64-7.55-4.12C6.01,14.93,8.61,13.9,12,13.9 c3.39,0,5.99,1.03,7.55,2.98C17.94,19.36,15.16,21,12,21z"
                      class="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>
                <span>Log Out</span>
              </button>
            </li>
            <!-- ITEM 1 END -->
                

             <!-- ITEM 2 -->
            <li class="nav__items--item status__price--context">
              <ul class="status__price">
                <span><img src="https://img.icons8.com/fluency/48/000000/low-price.png"/>  Current price of the Coin is <span class="status__coin--price">1$</span> </span>
              </ul>
            </li>
            <!-- ITEM 2 END -->
                 

            <!-- ITEM 3 -->
            <li class="nav__items--item">
              <!-- status -->
              <ul class="status">

                <img
                  src="${this._userInfo.imageURL}"
                  alt="profile"
                  class="status__profile"
                  crossorigin="anonymous"
                />
                <div>
                  <span  class ="status__username">${this._userInfo.name}</span>
                  <div class="status__score status__score--green">
                  <span style="margin-right: 0.5rem">COINS</span>
                  <span class="status__points">${this._userInfo.coins}</span>
                  </div>
                </div>
              </ul>
            </li>
            <!-- ITEM 3 END -->
          </ul>
      `;
  }

  addHandlerLogin(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn-login");
      if (btn) {
        console.log(e.target);
        handler();
      }
    });
  }
}

export default new topNavAfterAuth();
