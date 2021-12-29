import { View } from "./view";

class RequestOverlay extends View {
  requestMarkupSell(data, coins) {
    const html = `
              <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src="${data.imageURL}"
                                class="avatar avatar-sm me-3"
                                alt="user1"
                              />
                            </div>
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <h6 class="mb-0 text-sm">${data.name}</h6>
                              
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-sm font-weight-bold mb-0">${coins}</p>
                        </td>
                        <td>
                          <p class="text-sm font-weight-bold mb-0">${coins}$</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-secondary"
                            >Active</span
                          >
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold"
                            > ${data.uploadDate}</span
                          >
                        </td>
                        <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary request-status--btn  requestSell  font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                            data-status = "1"
                            data-sendTo = "${data.sendTo}" 
                            data-sendFrom = "${data.sendFrom}"
                            data-todo = "requestSell"
                          >
                            Accept
                          </a>
                        </td>
                        <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary request-status--btn requestSell  font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                            data-status = "0"
                            data-sendTo = "${data.sendTo}"
                            data-sendFrom = "${data.sendFrom}"
                            data-todo = "requestSell"
                          >
                            Reject
                          </a>
                        </td>
                      </tr>
        `;

    document
      ?.querySelector(".selling-requests")
      ?.insertAdjacentHTML("afterbegin", html);
  }

  requestMarkupBuy(data, coins) {
    const html = `
              <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src="${data.imageURL}"
                                class="avatar avatar-sm me-3"
                                alt="user1"
                              />
                            </div>
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <h6 class="mb-0 text-sm">${data.name}</h6>
                              
                            </div>
                          </div>
                        </td>
                         <td>
                          <p class="text-sm font-weight-bold mb-0">${coins}</p>
                        </td>
                        <td>
                          <p class="text-sm font-weight-bold mb-0">${coins}$</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-success"
                            >Active</span
                          >
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold"
                            > ${data.uploadDate}</span
                          >
                        </td>
                         <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary request-status--btn requestBuy font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                            data-status = "1"
                             data-sendTo = "${data.sendTo}"
                             data-sendFrom = "${data.sendFrom}"
                             data-todo = "requestBuy"
                          >
                            Accept
                          </a>
                        </td>
                        <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary request-status--btn requestBuy font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                            data-status = "0"
                            data-sendTo = "${data.sendTo}"
                            data-sendFrom = "${data.sendFrom}"
                            data-todo = "requestBuy"
                          >
                            Reject
                          </a>
                        </td>
                      </tr>
        `;

    document
      ?.querySelector(".buying-requests")
      ?.insertAdjacentHTML("afterbegin", html);
  }

  activeBuyRequestsMarkup(data, coins) {
    const html = `
              <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src="${data.imageURL}"
                                class="avatar avatar-sm me-3"
                                alt="user1"
                              />
                            </div>
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <h6 class="mb-0 text-sm">${data.name}</h6>
                              
                            </div>
                          </div>
                        </td>
                         <td>
                          <p class="text-sm font-weight-bold mb-0">${coins}</p>
                        </td>
                        <td>
                          <p class="text-sm font-weight-bold mb-0">${coins}$</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-success"
                            >Buying</span
                          >
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold"
                            > ${data.uploadDate}</span
                          >
                        </td>
                         <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary undo-request undo-request--buy font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                             data-status = "1"
                             data-sendTo = "${data.sendTo}"
                             data-sendFrom = "${data.sendFrom}"
                             data-todo = "requestBuy"
                             data-coin = "${data.coins}"
                          >
                            Undo
                          </a>
                        </td>
          
                      </tr>
        `;

    document
      ?.querySelector(".active-requests")
      ?.insertAdjacentHTML("afterbegin", html);
  }
  activeSellRequestsMarkup(data, coins) {
    const html = `
              <tr>
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img
                                src="${data.imageURL}"
                                class="avatar avatar-sm me-3"
                                alt="user1"
                              />
                            </div>
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <h6 class="mb-0 text-sm">${data.name}</h6>
                              
                            </div>
                          </div>
                        </td>
                         <td>
                          <p class="text-sm font-weight-bold mb-0">${coins}</p>
                        </td>
                        <td>
                          <p class="text-sm font-weight-bold mb-0">${coins}$</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-secondary"
                            >Selling</span
                          >
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold"
                            > ${data.uploadDate}</span
                          >
                        </td>
                         <td class="align-middle">
                          <a
                            href="javascript:;"
                            class="text-secondary undo-request undo-request--sell font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                             data-status = "1"
                             data-sendTo = "${data.sendTo}"
                             data-sendFrom = "${data.sendFrom}"
                             data-todo = "requestSell"
                             data-coin = "${data.coins}"
                          >
                            Undo
                          </a>
                        </td>
          
                      </tr>
        `;

    document
      ?.querySelector(".active-requests")
      ?.insertAdjacentHTML("afterbegin", html);
  }

  renderSetting = (node) => {
    node.remove();
  };

  controlRequestStatusBuy = (handler) => {
    document.querySelector("body").addEventListener("click", (e) => {
      const btn = e.target.closest(".requestBuy");
      if (!btn) return;
      // e.target.parentNode.parentNode.style.display = "none;
      handler(
        {
          status: e.target.dataset?.status,
          sendTo: e.target.dataset?.sendto,
          sendFrom: e.target.dataset?.sendfrom,
          toDo: e.target.dataset?.todo,
        },
        e.target.parentNode.parentNode
      );
    });
  };

  controlRequestStatusSell = (handler) => {
    document.querySelector("body").addEventListener("click", (e) => {
      const btn = e.target.closest(".requestSell");
      if (!btn) return;
      // e.target.parentNode.parentNode.style.display = "none;
      handler(
        {
          status: e.target.dataset?.status,
          sendTo: e.target.dataset?.sendto,
          sendFrom: e.target.dataset?.sendfrom,
          toDo: e.target.dataset?.todo,
        },
        e.target.parentNode.parentNode
      );
    });
  };
  controlActiveRequests = (handler) => {
    document.querySelector("body").addEventListener("click", (e) => {
      const btn = e.target.closest(".undo-request");
      if (!btn) return;
      // e.target.parentNode.parentNode.style.display = "none;
      handler(
        {
          status: e.target.dataset?.status,
          sendTo: e.target.dataset?.sendto,
          sendFrom: e.target.dataset?.sendfrom,
          toDo: e.target.dataset?.todo,
          coins: e.target.dataset?.coins,
        },
        e.target.parentNode.parentNode
      );
    });
  };
}

export default new RequestOverlay();
