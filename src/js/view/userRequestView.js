import { View } from "./view";

class UserRequestView extends View {
  _parentEl = document.querySelector(".users-request");

  generateUsersMarkup(data) {
    const html = `
            <!-- HISTORY ITEM -->
                  <tr class="requests-view" data-id="${data.sendFrom}">
                    <td>
                      <!-- WIDGET  -->
                      <div class="widget">
                        <!-- WIDGET PROFILE IMAGE  -->
                        <div class="widget__left">
                          <img
                            width="40"
                            class="rounded-circle"
                            src="${data.imageURL}"
                            alt="profile image"
                            crossorigin="anonymous"
                          />
                        </div>
                        <!-- WIDGET PROFILE IMAGE END -->

                        <!-- WIDGET DATA  -->
                        <div class="widget__right">
                          <div class="widget-heading">${data.name}</div>
                        </div>
                        <!-- WIDGET DATA  -->
                      </div>
                      <!-- WIDGET END -->
                    </td>

                    <!-- COINS COUNT -->
                    <td><span class="table__coins--count">${data.coins} </span> COINS</td>
                    <!-- COINS COUNT END -->

                    <!-- STATUS-->
                    <td>
                      <div class="table__status--pending">Pending</div>
                    </td>
                    <!-- STATUS END -->

                    <!-- TABLE BTNS  -->
                    <td class="full-flex table__btns">
                      <button
                        class="btn--small  btn--small--green"
                        style="margin-right: 1rem"
                        data-status ="1"
                      >
                        Accept
                      </button>
                      <button class="btn--small  btn--small--red" data-status ="0">Reject</button>
                    </td>
                    <!-- TABLE BTNS END -->
                  </tr>
                  <!-- HISTORY ITEME END-->
      `;
    this._parentEl.insertAdjacentHTML("beforeend", html);
  }

  addHandlerLogin(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn--small");

      if (!btn) return;
      handler(
        btn.dataset.status,
        e.target.closest(".requests-view").dataset.id
      );
    });
  }
}

export default new UserRequestView();
