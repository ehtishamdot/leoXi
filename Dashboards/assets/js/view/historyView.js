import { View } from "./view";

class RequestOverlay extends View {
  sendedRequestMarkupSell(data) {
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
                              <p class="text-xs text-secondary mb-0">
                                ${data.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">${data.coins} coins</p>
                          <p class="text-xs text-secondary mb-0">${data.coins}$</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-secondary"
                            >Sell</span
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
                            class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Sell
                          </a>
                        </td>
                      </tr>
        `;

    document
      ?.querySelector(".sended-requests--sell")
      ?.insertAdjacentHTML("afterbegin", html);
  }

  sendedRequestMarkupBuy(data) {
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
                              <p class="text-xs text-secondary mb-0">
                                ${data.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">${data.coins} coins</p>
                          <p class="text-xs text-secondary mb-0">${data.coins}$</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="badge badge-sm bg-gradient-success"
                            >Buy</span
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
                            class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Buy
                          </a>
                        </td>
                      </tr>
        `;

    document
      ?.querySelector(".sended-requests--buy")
      ?.insertAdjacentHTML("afterbegin", html);
  }

  recievedRequestMarkupSell(data) {
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
                              <p class="text-xs text-secondary mb-0">
                                ${data.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">${data.coins} coins</p>
                          <p class="text-xs text-secondary mb-0">${data.coins}$</p>
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
                            class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Sell
                          </a>
                        </td>
                      </tr>
        `;

    document
      ?.querySelector(".recieved__requests--sell")
      ?.insertAdjacentHTML("afterbegin", html);
  }

  recievedRequestMarkupBuy(data) {
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
                              <p class="text-xs text-secondary mb-0">
                                ${data.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">${data.coins} coins</p>
                          <p class="text-xs text-secondary mb-0">${data.coins}$</p>
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
                            class="text-secondary font-weight-bold text-xs"
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Buy
                          </a>
                        </td>
                      </tr>
        `;

    document
      ?.querySelector(".recieved__requests--buy")
      ?.insertAdjacentHTML("afterbegin", html);
  }
}

export default new RequestOverlay();
